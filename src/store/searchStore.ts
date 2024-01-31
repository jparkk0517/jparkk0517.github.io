// store.js
import { create } from 'zustand';

const initialKeyword = '';

const useSearchKeyword = create<{
  searchKeyword: string;
  setSearchKeyword: (searchKeyword: string) => void;
  clearSearchKeyword: () => void;
}>((set) => ({
  searchKeyword: initialKeyword,
  setSearchKeyword(searchKeyword) {
    set((_state) => ({ ..._state, searchKeyword }));
  },
  clearSearchKeyword() {
    set((_state) => ({ ..._state, searchKeyword: '' }));
  },
}));

export default useSearchKeyword;
