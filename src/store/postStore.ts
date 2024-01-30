// store.js
import { create } from 'zustand';

const initialPosts: IPost[] = [];

const useStore = create<{
  posts: IPost[];
  setPosts: (posts: IPost[]) => void;
}>((set) => ({
  posts: initialPosts,
  setPosts: (posts: IPost[]) => set((state) => ({ ...state, posts })),
}));

export default useStore;
