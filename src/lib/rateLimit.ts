/**
 * Production-safe rate limiter and duplicate submission guard
 * Supports distributed Upstash Redis (for Serverless/Vercel) with an in-memory sliding-window fallback
 */

import type { NextRequest } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

interface RateLimitRecord {
  timestamps: number[];
}

interface DuplicateRecord {
  hash: string;
  expiresAt: number;
}

// In-memory sliding window store (used locally, in tests, or as a resilient fallback)
const ipStore = new Map<string, RateLimitRecord>();
const duplicateStore = new Map<string, DuplicateRecord>();

// Clean up stale entries every 5 minutes to prevent memory leaks
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupStores(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  const threshold = now - windowMs;
  for (const [ip, record] of ipStore.entries()) {
    const validTimestamps = record.timestamps.filter((t) => t > threshold);
    if (validTimestamps.length === 0) {
      ipStore.delete(ip);
    } else {
      record.timestamps = validTimestamps;
    }
  }

  for (const [key, record] of duplicateStore.entries()) {
    if (record.expiresAt <= now) {
      duplicateStore.delete(key);
    }
  }
}

// Strict IP format validation
const IPV4_REGEX = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const IPV6_REGEX = /^[0-9a-fA-F:]{2,39}$/;

/**
 * Normalizes and validates an IP address
 */
export function normalizeIp(rawIp: string | null | undefined): string | null {
  if (!rawIp || typeof rawIp !== "string") return null;

  let ip = rawIp.trim();

  // Strip port if present in IPv4 (e.g. 192.168.1.1:8080)
  if (ip.includes(".") && ip.includes(":")) {
    const parts = ip.split(":");
    if (parts.length === 2 && IPV4_REGEX.test(parts[0])) {
      ip = parts[0];
    }
  }

  // Handle IPv4-mapped IPv6 (e.g. ::ffff:192.168.1.1)
  if (ip.toLowerCase().startsWith("::ffff:")) {
    const mapped = ip.substring(7);
    if (IPV4_REGEX.test(mapped)) {
      return mapped;
    }
  }

  // Remove bracket notation from IPv6 (e.g. [2001:db8::1]:80)
  if (ip.startsWith("[") && ip.includes("]")) {
    const closingBracket = ip.indexOf("]");
    ip = ip.substring(1, closingBracket);
  }

  if (IPV4_REGEX.test(ip)) {
    return ip;
  }

  if (IPV6_REGEX.test(ip)) {
    return ip.toLowerCase();
  }

  return null;
}

/**
 * Extracts client IP safely from trusted proxy headers
 * Prioritizes platform-verified headers (Vercel, Cloudflare) and prevents X-Forwarded-For spoofing
 */
export function getClientIp(req: NextRequest): string {
  // 1. Vercel trusted edge header (injected by Vercel infrastructure)
  const vercelIp = req.headers.get("x-vercel-forwarded-for");
  if (vercelIp) {
    const firstVercelIp = vercelIp.split(",")[0]?.trim();
    const normalized = normalizeIp(firstVercelIp);
    if (normalized) return normalized;
  }

  // 2. Cloudflare connecting IP
  const cfIp = req.headers.get("cf-connecting-ip");
  if (cfIp) {
    const normalized = normalizeIp(cfIp);
    if (normalized) return normalized;
  }

  // 3. Standard X-Real-IP
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    const normalized = normalizeIp(realIp);
    if (normalized) return normalized;
  }

  // 4. Standard X-Forwarded-For
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const ips = forwardedFor.split(",").map((s) => s.trim());
    // In multi-hop proxy chains, validate each IP from client to edge
    for (const raw of ips) {
      const normalized = normalizeIp(raw);
      if (normalized) return normalized;
    }
  }

  // 5. Safe Fallback
  return "127.0.0.1";
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetSeconds: number;
}

// Lazy-initialized Redis & Upstash Ratelimit Singleton
let upstashClient: Redis | null = null;
let upstashRatelimit: Ratelimit | null = null;
let upstashInitialized = false;

function getUpstashRatelimit(): Ratelimit | null {
  if (upstashInitialized) return upstashRatelimit;
  upstashInitialized = true;

  const url =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN;

  if (url && token) {
    try {
      upstashClient = new Redis({ url, token });
      upstashRatelimit = new Ratelimit({
        redis: upstashClient,
        limiter: Ratelimit.slidingWindow(5, "10 m"),
        prefix: "@creatathon/ratelimit",
        analytics: false,
      });
    } catch {
      upstashRatelimit = null;
    }
  }

  return upstashRatelimit;
}

/**
 * Checks in-memory sliding window rate limit (sync fallback)
 */
export function checkRateLimitMemory(
  ip: string,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000
): RateLimitResult {
  const now = Date.now();
  cleanupStores(windowMs);

  let record = ipStore.get(ip);
  if (!record) {
    record = { timestamps: [] };
    ipStore.set(ip, record);
  }

  const windowStart = now - windowMs;
  record.timestamps = record.timestamps.filter((t) => t > windowStart);

  const currentCount = record.timestamps.length;
  const oldestTimestamp = record.timestamps[0] || now;
  const resetSeconds = Math.max(1, Math.ceil((oldestTimestamp + windowMs - now) / 1000));

  if (currentCount >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      resetSeconds,
    };
  }

  record.timestamps.push(now);

  return {
    success: true,
    limit,
    remaining: limit - record.timestamps.length,
    resetSeconds,
  };
}

/**
 * Checks rate limit for a client IP using distributed Upstash Redis if configured,
 * or resilient in-memory sliding window fallback.
 */
export async function checkRateLimitAsync(
  ip: string,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000
): Promise<RateLimitResult> {
  const ratelimit = getUpstashRatelimit();
  if (ratelimit) {
    try {
      const result = await ratelimit.limit(ip);
      const resetSeconds = Math.max(1, Math.ceil((result.reset - Date.now()) / 1000));
      return {
        success: result.success,
        limit: result.limit,
        remaining: result.remaining,
        resetSeconds,
      };
    } catch {
      // Fallback to in-memory on Upstash connection/timeout error (Fail-Safe, Not Fail-Open)
      return checkRateLimitMemory(ip, limit, windowMs);
    }
  }

  return checkRateLimitMemory(ip, limit, windowMs);
}

/**
 * Synchronous backward-compatible rate limit check
 */
export function checkRateLimit(
  ip: string,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000
): RateLimitResult {
  return checkRateLimitMemory(ip, limit, windowMs);
}

/**
 * Checks for duplicate submissions within a deduplication window (e.g. 60s)
 * Returns true if duplicate is detected, false otherwise
 */
export function isDuplicateSubmission(
  key: string,
  dedupWindowMs: number = 60 * 1000
): boolean {
  const now = Date.now();
  const existing = duplicateStore.get(key);

  if (existing && existing.expiresAt > now) {
    return true;
  }

  duplicateStore.set(key, {
    hash: key,
    expiresAt: now + dedupWindowMs,
  });

  return false;
}

