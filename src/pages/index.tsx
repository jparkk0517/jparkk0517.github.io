import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import CardList from '@/components/common/CardList';
import Button from '@/components/common/Button';
import { useRouter } from 'next/router';
import useSearchKeyword from '@/store/searchStore';
import { MENUS } from '@/common/constants';

export default function Home({ posts }: IPostsProps) {
  const { searchKeyword } = useSearchKeyword();
  const router = useRouter();

  return (
    <>
      <CardList
        page={{
          pageLen: 8,
        }}
        items={posts
          .filter(
            (post) =>
              post.meta.tags.includes(searchKeyword) || searchKeyword === ''
          )
          .map((post) => ({
            title: post.meta.title,
            children: post.meta.desc,
            tags: post.meta.tags ?? [],
            onClick: () => {
              router.push(MENUS.POST(post.route));
            },
            footer: <Button onClick={() => {}}>보러가기</Button>,
            date: post.meta.date,
          }))}
      />
    </>
  );
}

export const getStaticProps = async () => {
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
    })
    .sort(
      ({ meta: { date: date1 } }, { meta: { date: date2 } }) =>
        new Date(date2).getTime() - new Date(date1).getTime()
    );
  return {
    props: {
      posts,
    },
  };
};
