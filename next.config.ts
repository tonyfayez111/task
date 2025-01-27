
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {  output: 'export',
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
  
  assetPrefix: isProd ? '/task' : '',
  basePath: isProd ? '/task' : '',

};

export default nextConfig;
