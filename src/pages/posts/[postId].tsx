import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { marked } from 'marked';

export default function Post({ post }: { post: IPost }) {
  return (
    <>
      <article className='markdown-body'>
        <div
          dangerouslySetInnerHTML={{ __html: marked.parse(post.content, {}) }}
        />
      </article>
    </>
  );
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { postId = '' } = params ?? { postId: '' };
  const files = fs.readdirSync(path.join('posts'));

  const posts: IPost[] = files
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const fileName = filename.replace('.mdx', '');
      const markdownWithMeta = fs.readFileSync(
        path.join('posts', filename),
        'utf-8'
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
        fileName,
        route: fileName,
      };
    });
  const post = posts.find((post) => post.fileName === postId);
  return {
    props: {
      post,
    },
  };
};
