const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
  webpack(config, options) {
    // ...existing code...
    return config;
  },
};

module.exports = nextConfig;
