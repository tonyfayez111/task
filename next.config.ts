const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/your-repository-name/' : '',
  basePath: isProd ? '/your-repository-name' : '',

};

export default nextConfig;