import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface IFilterSearch {
  filters?: Array<{
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
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState(initialSearchKeyword);
  const [selectedFilter, setSelectedFilter] = useState(
    initialSelectedFilterKey
  );

  const handleSearch = () => {
    onSearch({
      selectedFilter,
      searchKeyword,
    });
    router.push('/');
  };
  const handleClear = () => {
    setSearchKeyword('');
  };

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
        <div className='flex border-base-300 border-2'>
          <input
            className='input input-sm join-item max-w-[30vw] focus:outline-none focus:border-none h-[30px]'
            placeholder={placeholder}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
          />
          <span className='cursor-pointer mr-2' onClick={handleClear}>
            <svg
              className='w-4 text-gray-600 h-[100%]'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </span>
        </div>
      </div>
      {filters && (
        <select
          className='select select-bordered join-item select-sm h-[34px] border-2 focus:outline-none'
          onChange={(e) => {
            setSelectedFilter(e.target.value);
          }}>
          {filters.map((filter) => (
            <option
              key={filter.key}
              selected={filter.key === selectedFilter}
              value={filter.key}>
              {filter.label}
            </option>
          ))}
        </select>
      )}
      <div className='indicator'>
        {/* <span className='indicator-item badge badge-secondary'>new</span> */}
        <button
          className='btn join-item btn-sm h-[34px]'
          onClick={handleSearch}>
          조회
        </button>
      </div>
    </div>
  );
}
