import { useEffect, useState } from 'react';

interface IFilterSearch {
  filters: Array<{
    key: string;
    label: string;
  }>;
  onSearch: (props: { selectedFilter: string; searchKeyword: string }) => void;
  initialSearchKeyword?: string;
  initialSelectedFilterKey?: string;
  placeholder?: string;
}

export default function FilterSearch({
  filters,
  onSearch,
  initialSearchKeyword = '',
  initialSelectedFilterKey = '',
  placeholder = '',
}: IFilterSearch) {
  const [searchKeyword, setSearchKeyword] = useState(initialSearchKeyword);
  const [selectedFilter, setSelectedFilter] = useState(
    initialSelectedFilterKey
  );

  useEffect(() => {
    setSearchKeyword(initialSearchKeyword);
    return () => {
      setSearchKeyword('');
    };
  }, [initialSearchKeyword]);

  useEffect(() => {
    setSelectedFilter(initialSelectedFilterKey);
    return () => {
      setSelectedFilter('');
    };
  }, [initialSelectedFilterKey]);
  return (
    <div className='join'>
      <div>
        <div>
          <input
            className='input input-bordered join-item'
            placeholder={placeholder}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            style={{
              maxWidth: '30vw',
            }}
          />
        </div>
      </div>
      <select
        className='select select-bordered join-item'
        defaultValue={selectedFilter}>
        {filters.map((filter) => (
          <option key={filter.key}>{filter.label}</option>
        ))}
      </select>
      <div className='indicator'>
        {/* <span className='indicator-item badge badge-secondary'>new</span> */}
        <button
          className='btn join-item'
          onClick={() => {
            onSearch({
              selectedFilter,
              searchKeyword,
            });
          }}>
          Search
        </button>
      </div>
    </div>
  );
}
