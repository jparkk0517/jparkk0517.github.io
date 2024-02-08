import fs from 'fs';
import path from 'path';
import CardList from '@/components/common/CardList';
import { useRouter } from 'next/router';
import useSearchKeyword from '@/store/searchStore';
import { MENUS } from '@/common/constants';
import { getAllPosts } from '@/common/utils';
import { useEffect } from 'react';

function postFilter(searchFilter: 'tag' | 'title', searchKeyword: string) {
  return (post: IPost) => {
    if (searchKeyword === '') return true;
    return {
      tag: post.meta.tags
        .map((tag) => tag.toLowerCase())
        .reduce(
          (prev, _tag) => prev || _tag.includes(searchKeyword.toLowerCase()),
          false
        ),
      title: post.meta.title
        .toLowerCase()
        .includes(searchKeyword.toLowerCase()),
    }[searchFilter];
  };
}

export default function Home({ posts }: IPostsProps) {
  const { searchKeyword, searchFilter } = useSearchKeyword(
    ({ searchFilter, searchKeyword }) => ({ searchFilter, searchKeyword })
  );
  const router = useRouter();
  const filter = postFilter(searchFilter, searchKeyword);

  return (
    <>
      <CardList
        items={posts.filter(filter).map((post) => ({
          title: post.meta.title,
          children: post.meta.desc,
          tags: post.meta.tags ?? [],
          onClick: () => {
            router.push(MENUS.POST(post.route));
          },
          date: post.meta.date,
        }))}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts: IPost[] = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
