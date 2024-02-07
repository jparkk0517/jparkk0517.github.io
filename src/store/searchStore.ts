import { create } from 'zustand';
interface ISearchKeyword {
  searchKeyword: string;
  searchFilter: 'tag' | 'title';
  setSearchKeyword: (searchKeyword: string) => void;
  clearSearchKeyword: () => void;
  setSearchFilter: (searchFilter: 'tag' | 'title') => void;
}

const useSearchKeyword = create<ISearchKeyword>((set) => ({
  searchKeyword: '',
  searchFilter: 'title',
  setSearchKeyword(searchKeyword) {
    set((_state) => ({ ..._state, searchKeyword }));
  },
  clearSearchKeyword() {
    set((_state) => ({ ..._state, searchKeyword: '', searchFilter: 'tag' }));
  },
  setSearchFilter(searchFilter) {
    set((_state) => ({ ..._state, searchFilter }));
  },
}));


export default useSearchKeyword;
