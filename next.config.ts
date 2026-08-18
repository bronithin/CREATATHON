import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable Gzip/Brotli compression for all text and data payloads
  compress: true,

  // Enable Next.js Image optimization with AVIF and WebP format support
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },

  // Long-term immutable caching headers for static assets
  async headers() {
    return [
      {
        source: "/elements/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
