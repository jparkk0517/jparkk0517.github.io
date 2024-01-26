/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const envImageUnoptimize = isProduction ? false : true;

const nextConfig = {
  output: isProduction ? undefined : 'export',
  images: {
    unoptimized: envImageUnoptimize,
  },
  basePath: !isProduction ? undefined : '/jparkk0517.github.io',
  assetPrefix: isProduction ? '/' : undefined,
};

export default nextConfig;
