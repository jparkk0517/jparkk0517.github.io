interface IPost {
  fileName: string;
  content: string;
  meta: {
    title: string;
    desc: string;
    date: string;
    tags: string[];
  };
  route: string;
}

interface IPostsProps {
  posts: IPost[];
}
