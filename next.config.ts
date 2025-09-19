const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optimize Images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
