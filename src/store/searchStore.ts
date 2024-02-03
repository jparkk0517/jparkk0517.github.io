import { create } from 'zustand';

const useSearchKeyword = create<{
  searchKeyword: string;
  searchFilter: 'tag' | 'title';
  setSearchKeyword: (searchKeyword: string) => void;
  clearSearchKeyword: () => void;
  setSearchFilter: (searchFilter: 'tag' | 'title') => void;
}>((set) => ({
  searchKeyword: '',
  searchFilter: 'title',
  setSearchKeyword(searchKeyword) {
    set((_state) => ({ ..._state, searchKeyword }));
  },
  clearSearchKeyword() {
    set((_state) => ({ ..._state, searchKeyword: '' }));
  },
  setSearchFilter(searchFilter) {
    set((_state) => ({ ..._state, searchFilter }));
  },
}));

export default useSearchKeyword;
