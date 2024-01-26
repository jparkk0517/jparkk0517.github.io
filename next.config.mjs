/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV !== 'production';
const envImageUnoptimize = isProduction ? false : true;

const nextConfig = {
  output: isProduction ? undefined : 'export',
  images: {
    unoptimized: envImageUnoptimize,
  },
  basePath:
    isProduction !== 'development' ? undefined : '/jparkk0517.github.io',
  assetPrefix: isProduction
    ? 'https://github.com/jparkk0517/jparkk0517.github.io/tree/gh-pages'
    : '',
};

export default nextConfig;
