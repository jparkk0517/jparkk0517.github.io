import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';

const isProduction = process.env.NODE_ENV === 'production';
const envImageUnoptimize = isProduction ? false : true;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: !isProduction ? undefined : 'export',
  images: {
    unoptimized: envImageUnoptimize,
  },
  basePath: !isProduction ? undefined : '/jparkk0517.github.io',
  assetPrefix: isProduction ? '/' : undefined,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
