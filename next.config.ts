import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  skipMiddlewareUrlNormalize: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prosix.online",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.prosix.online",
      },
    ],
  },
};

export default nextConfig;
