/**
 * Production-safe rate limiter and duplicate submission guard
 * Zero-dependency sliding window counter with memory cleanup
 */

import type { NextRequest } from "next/server";

interface RateLimitRecord {
  timestamps: number[];
}

interface DuplicateRecord {
  hash: string;
  expiresAt: number;
}

// In-memory sliding window store
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

/**
 * Extracts client IP safely from trusted proxy headers
 */
export function getClientIp(req: NextRequest): string {
  // Cloudflare
  const cfIp = req.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();

  // Standard X-Real-IP
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  // Forwarded-For (take the first, client-supplied IP in the chain)
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  // Fallback
  return "127.0.0.1";
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetSeconds: number;
}

/**
 * Checks and increments rate limit counter for a given client IP
 *
 * @param ip Client IP address
 * @param limit Maximum allowed requests in the window (default: 5)
 * @param windowMs Window duration in milliseconds (default: 10 minutes)
 */
export function checkRateLimit(
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

  // Filter timestamps within the current sliding window
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

  // Record this valid attempt
  record.timestamps.push(now);

  return {
    success: true,
    limit,
    remaining: limit - record.timestamps.length,
    resetSeconds,
  };
}

/**
 * Checks for duplicate submissions within a short deduplication window (e.g. 60s)
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
