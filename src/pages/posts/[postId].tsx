import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { marked } from 'marked';
import Button from '@/components/common/Button';
import { useRouter } from 'next/router';

export default function Post({
  post,
  prev,
  next,
}: {
  post: IPost | null;
  prev: IPost | null;
  next: IPost | null;
}) {
  const route = useRouter();
  if (!post) return <>해당 포스트가 존재하지 않습니다.</>;
  return (
    <>
      <div
        className='mockup-browser border border-base-500 mb-6'
        style={{ minHeight: '75vh' }}>
        <div className='flex justify-between'>
          {
            <Button
              className={`${prev ? '' : 'btn-disabled'}`}
              onClick={() => {
                prev && route.push(`/posts/${prev.route}`);
              }}>
              이전 포스트
            </Button>
          }
          <div className='m-auto font-bold'>
            <h1>{post.meta.title}</h1>
          </div>
          {
            <Button
              className={`${next ? '' : 'btn-disabled'}`}
              onClick={() => {
                next && route.push(`/posts/${next.route}`);
              }}>
              다음 포스트
            </Button>
          }
        </div>
        {/* <div className='mockup-browser-toolbar'>
          <div className='input border border-base-500'>{post.meta.title}</div>
        </div> */}
        <div className='flex justify-center px-4 py-8 border-t border-base-500'>
          <article
            className='markdown-body w-screen'
            style={{
              minHeight: '58vh',
            }}>
            <div
              dangerouslySetInnerHTML={{
                __html: marked.parse(post.content, {}),
              }}
            />
          </article>
        </div>
      </div>
    </>
  );
}

function getPostFileNames() {
  const files = fs
    .readdirSync(path.join('posts'))
    .filter((filename) => filename.endsWith('.mdx'));
  return files;
}

export async function getStaticPaths() {
  const files = getPostFileNames();

  const posts = files.map(
    (filename) => `/posts/${filename.replaceAll('.mdx', '')}`
  );
  return {
    paths: posts,
    fallback: false,
  };
}

function getPostById(postId: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', postId + '.mdx'),
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
    fileName: postId,
    route: postId,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { postId = '' } = params ?? { postId: '' };
  const files = getPostFileNames();
  for (let i = 0; i < files.length; i++) {
    if (files[i] === `${postId}.mdx`) {
      return {
        props: {
          post: getPostById(postId as string),
          prev:
            i === 0 ? null : getPostById(files[i - 1].replaceAll('.mdx', '')),
          next:
            i + 1 === files.length
              ? null
              : getPostById(files[i + 1].replaceAll('.mdx', '')),
        },
      };
    }
  }

  return {
    props: {
      post: null,
      prev: null,
      next: null,
    },
  };
};
