import { GetStaticProps } from 'next';
import { Marked } from 'marked';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { MENUS } from '@/common/constants';
import { getPostById, getPostIds } from '@/common/utils';

const marked = new Marked(
  markedHighlight({
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  })
);

const renderer = new marked.Renderer();

renderer.code = function (code: string) {
  return `
    <div class="mockup-code text-black border bg-[#f6f8fa]" style="width:90%;margin:auto;margin-bottom:20px;">
      <pre style="margin-bottom:0;padding:0;">
      <code>\n${marked.parseInline(code)}</code>
      </pre>
    </div>
  `;
};

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
      <Head>
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://jparkk0517.github.io' />
        <meta property='og:title' content={post.meta.title} />
        <meta property='og:description' content={post.meta.desc} />
      </Head>
      <div className='mb-20'>
        <div className='hero bg-base-300'>
          <div className='hero-content text-center'>
            <div className='max-w-md'>
              <h1 className='text-5xl font-bold'>{post.meta.title}</h1>
              <p className='my-4'>{post.meta.date}</p>
              <div className='max-w-[80vw] break-words mb-4'>
                {post.meta.desc}
              </div>
              {post.meta.tags.map((tag) => (
                <div className={`badge badge-outline mr-1`} key={tag}>
                  {tag}
                </div>
              ))}
              {/* <button className='btn btn-primary'>Get Started</button> */}
            </div>
          </div>
        </div>
        <div className='divider' />
        <div
          className='markdown-body min-h-[58vh] px-6 max-w-[100vw]'
          dangerouslySetInnerHTML={{
            __html: marked.parse(post.content, {
              renderer,
            }),
          }}>
          {/* <div
            dangerouslySetInnerHTML={{
              __html: marked.parse(post.content, {
                renderer,
              }),
            }}
          /> */}
        </div>
        <div className='flex justify-between mt-10 max-w-[100vw]'>
          {
            <button
              className={`btn btn-8xl md:btn-md gap-2 lg:gap-3 ${
                prev ? '' : 'btn-disabled'
              } w-[48%]`}
              onClick={() => {
                prev && route.push(MENUS.POST(prev.route));
              }}>
              <svg
                className='h-6 w-6 fill-current md:h-8 md:w-8'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'>
                <path d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z'></path>
              </svg>
              <span className='w-[70%] overflow-hidden text-xs'>
                {prev?.meta.title ?? ''}
              </span>
            </button>
          }
          {
            <button
              className={`btn btn-8xl md:btn-md gap-2 lg:gap-3 ${
                next ? '' : 'btn-disabled'
              } w-[48%]`}
              onClick={() => {
                next && route.push(MENUS.POST(next.route));
              }}>
              <span className='w-[70%] overflow-hidden  text-xs'>
                {next?.meta.title ?? ''}
              </span>
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
    </>
  );
}

export async function getStaticPaths() {
  const postIds = getPostIds();

  const posts = postIds.map((postId) => `/posts/${postId}`);

  return {
    paths: posts,
    fallback: false,
  };
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { postId = '' } = params ?? { postId: '' };
  const postIds = getPostIds();
  const idx = postIds.findIndex((_postId) => postId === _postId);
  let prev = null,
    post = null,
    next = null;
  for (let i = 0; i < postIds.length; i++) {
    const _postId = postIds[i];
    if (_postId === postId) {
      prev = i === 0 ? null : getPostById(postIds[i - 1]);
      post = getPostById(_postId);
      next = i + 1 === postIds.length ? null : getPostById(postIds[i + 1]);
      break;
    }
  }

  return {
    props: {
      prev,
      post,
      next,
    },
  };
};
