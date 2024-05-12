import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

export const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkMath)
  .use(remarkRehype)
  .use(rehypeKatex);

export function getPostIds() {
  const files = fs
    .readdirSync(path.join('posts'))
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => filename.replaceAll('.mdx', ''));
  return files;
}
export function getAllPosts() {
  return getPostIds()
    .map((postId) => getPostById(postId))
    .sort(
      ({ meta: { date: date1 } }, { meta: { date: date2 } }) =>
        new Date(date2).getTime() - new Date(date1).getTime(),
    );
}
export function getPostById(postId: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', postId + '.mdx'),
    'utf-8',
  );
  const { data: meta, content } = matter(markdownWithMeta);
  return {
    meta: {
      title: meta['title'] ?? '',
      desc: meta['desc'] ?? '',
      date: meta['date'] ?? '',
      tags: meta['tags'] ?? [],
    },
    content,
    fileName: postId,
    route: postId,
  };
}
