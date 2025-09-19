import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";
import bundleAnalyzer from "@next/bundle-analyzer";

// Bundle Analyzer wrapper
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false, // ✅ Stops auto-opening in browser
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  compiler: {
    // ✅ Strip console.logs only in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ✅ Typed webpack config
  webpack(config: WebpackConfig, { isServer }: { isServer: boolean }) {
    if (!isServer) {
      config.resolve = config.resolve || {};
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
