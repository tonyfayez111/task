
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {  output: 'export',
  distDir: 'out',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  
  assetPrefix: isProd ? 'task' : '',
  basePath: isProd ? '/task' : '',

};

export default nextConfig;
