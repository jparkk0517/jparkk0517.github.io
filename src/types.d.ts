interface IPost {
  fileName: string;
  content: string;
  meta: {
    title: string;
    desc: string;
    date: string;
  };
  route: string;
}

interface IPostsProps {
  posts: IPost[];
}
