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
    <div className='mb-20'>
      <div className='hero bg-base-300'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold'>{post.meta.title}</h1>
            <p className='my-4'>{post.meta.date}</p>
            <div className='max-w-[80vw] break-words'>{post.meta.desc}</div>
            {/* <button className='btn btn-primary'>Get Started</button> */}
          </div>
        </div>
      </div>

      <div className='divider' />

      <article className='markdown-body min-h-[58vh]'>
        <div
          dangerouslySetInnerHTML={{
            __html: marked.parse(post.content, {}),
          }}
        />
      </article>
      <div className='flex justify-between'>
        {
          <button
            className={`btn btn-neutral btn-sm md:btn-md gap-2 lg:gap-3 ${
              prev ? '' : 'btn-disabled'
            }`}
            onClick={() => {
              prev && route.push(`/posts/${prev.route}`);
            }}>
            <svg
              className='h-6 w-6 fill-current md:h-8 md:w-8'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'>
              <path d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z'></path>
            </svg>
            <div className='flex flex-col items-start'>
              <span className='text-base-content/50 hidden text-xs font-normal md:block'>
                Prev
              </span>
              <span>{prev?.meta.title ?? ''}</span>
            </div>
          </button>
        }
        {
          <button
            className={`btn btn-neutral btn-sm md:btn-md gap-2 lg:gap-3 ${
              next ? '' : 'btn-disabled'
            }`}
            onClick={() => {
              next && route.push(`/posts/${next.route}`);
            }}>
            <div className='flex flex-col items-end'>
              <span className='text-neutral-content/50 hidden text-xs font-normal md:block'>
                Next
              </span>
              <span>{next?.meta.title ?? ''}</span>
            </div>
            <svg
              className='h-6 w-6 fill-current md:h-8 md:w-8'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'>
              <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z'></path>
            </svg>
          </button>
        }
      </div>
    </div>
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
