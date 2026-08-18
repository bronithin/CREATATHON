/**
 * Validation schemas and regex helpers for Creatathon 2026 Registration
 */

export const ALLOWED_FOLLOWER_COUNTS = [
  "Under 10k",
  "10k - 50k",
  "50k - 200k",
  "200k - 1M",
  "1M+",
] as const;

export type FollowerCountType = (typeof ALLOWED_FOLLOWER_COUNTS)[number];

// Regex Patterns
export const REGEX_PATTERNS = {
  // Influencer name / handle: allows @username, creator name with unicode letters, numbers, spaces, dots, underscores, hyphens, apostrophes (2-60 chars)
  INFLUENCER_NAME: /^@?[\p{L}\p{N}\s_.\-']{2,60}$/u,

  // Brand / Company name: allows letters, numbers, spaces, punctuation like &, ., ,, -, ', /, (), # (2-100 chars)
  BRAND_NAME: /^[\p{L}\p{N}\s_.,&'()+/#\-]{2,100}$/u,

  // Location: City, State / Country with letters, numbers, commas, periods, spaces (2-100 chars)
  LOCATION: /^[\p{L}\p{N}\s,.'()/\-]{2,100}$/u,

  // Social link / Website: Valid URL (http/https), domain with TLD (e.g. instagram.com/user, brand.co.in), or @handle
  SOCIAL_LINK:
    /^(https?:\/\/)?((([a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,})|(@[a-zA-Z0-9_.]{2,30}))(\/[^\s<>"']*)?$/i,
};

/**
 * Sanitize user input by trimming and stripping HTML/control characters
 */
export function sanitizeInput(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\x00-\x1F\x7F]/g, "") // Strip control characters
    .replace(/<[^>]*>?/gm, "") // Strip HTML tags
    .trim();
}

export interface RegistrationInput {
  tab: "influencer" | "brand";
  name: string;
  location: string;
  socialLink: string;
  followerCount: string;
  hp_website?: string; // Honeypot field for anti-bot protection
}

export interface ValidationResult {
  isValid: boolean;
  isBot: boolean;
  errors: Record<string, string>;
  sanitizedData: Omit<RegistrationInput, "hp_website">;
}

/**
 * Comprehensive validation function for registration payloads
 */
export function validateRegistration(data: Partial<RegistrationInput>): ValidationResult {
  const errors: Record<string, string> = {};

  // Honeypot check - if populated, mark as bot
  const honeypot = sanitizeInput(data.hp_website);
  const isBot = Boolean(honeypot && honeypot.length > 0);

  const tab = data.tab === "brand" ? "brand" : data.tab === "influencer" ? "influencer" : undefined;
  if (!tab) {
    errors.tab = "Invalid registration type. Must be either 'influencer' or 'brand'.";
  }

  const name = sanitizeInput(data.name);
  const location = sanitizeInput(data.location);
  const socialLink = sanitizeInput(data.socialLink);
  let followerCount = sanitizeInput(data.followerCount);

  // 1. Name / Handle validation
  if (!name) {
    errors.name = tab === "brand" ? "Brand / Company name is required." : "Name / Handle is required.";
  } else if (tab === "influencer") {
    if (name.length < 2 || name.length > 60) {
      errors.name = "Handle / Name must be between 2 and 60 characters.";
    } else if (!REGEX_PATTERNS.INFLUENCER_NAME.test(name) || !/[\p{L}\p{N}]/u.test(name)) {
      errors.name = "Please enter a valid handle or name (e.g. @creatorname or Alex Doe).";
    }
  } else if (tab === "brand") {
    if (name.length < 2 || name.length > 100) {
      errors.name = "Brand name must be between 2 and 100 characters.";
    } else if (!REGEX_PATTERNS.BRAND_NAME.test(name) || !/[\p{L}\p{N}]/u.test(name)) {
      errors.name = "Please enter a valid brand or company name.";
    }
  }

  // 2. Location validation
  if (!location) {
    errors.location = "Location is required.";
  } else if (location.length < 2 || location.length > 100) {
    errors.location = "Location must be between 2 and 100 characters.";
  } else if (!REGEX_PATTERNS.LOCATION.test(location) || !/[\p{L}]/u.test(location)) {
    errors.location = "Please enter a valid location (e.g. Kochi, Kerala or Bangalore).";
  }

  // 3. Social link validation
  if (!socialLink) {
    errors.socialLink = tab === "brand" ? "Website or social link is required." : "Primary social link is required.";
  } else if (socialLink.length < 3 || socialLink.length > 255) {
    errors.socialLink = "Link must be between 3 and 255 characters.";
  } else if (!REGEX_PATTERNS.SOCIAL_LINK.test(socialLink)) {
    errors.socialLink =
      "Please enter a valid social link or website (e.g. instagram.com/username or https://brand.com).";
  }

  // 4. Follower count validation
  if (!followerCount) {
    followerCount = "Under 10k";
  } else if (!ALLOWED_FOLLOWER_COUNTS.includes(followerCount as FollowerCountType)) {
    errors.followerCount = "Please select a valid audience / follower count range.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    isBot,
    errors,
    sanitizedData: {
      tab: tab || "influencer",
      name,
      location,
      socialLink,
      followerCount,
    },
  };
}
