import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import CardList from '@/components/common/CardList';
import usePosts from '@/store/postStore';
import { useEffect } from 'react';
import Button from '@/components/common/Button';
import { useRouter } from 'next/router';

export default function Home({ posts }: IPostsProps) {
  const router = useRouter();
  const { setPosts } = usePosts();
  useEffect(() => {
    setPosts(posts);
  }, [posts, setPosts]);
  return (
    <>
      <CardList
        items={posts.map((post) => ({
          title: post.meta.title,
          children: post.meta.desc,
          footer: (
            <Button
              onClick={() => {
                router.push(`/posts/${post.route}`);
              }}>
              보러가기
            </Button>
          ),
        }))}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('src/pages/posts'));

  const posts: IPost[] = files
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const fileName = filename.replace('.mdx', '');
      const markdownWithMeta = fs.readFileSync(
        path.join('src/pages/posts', filename),
        'utf-8'
      );
      const { data: meta, content } = matter(markdownWithMeta);
      console.log(content, markdownWithMeta);
      return {
        meta: {
          title: meta['title'],
          desc: meta['desc'],
          date: meta['date'],
        },
        content,
        fileName,
        route: fileName,
      };
    });
  return {
    props: {
      posts,
    },
  };
};
