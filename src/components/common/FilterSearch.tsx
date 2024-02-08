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
            className='input input-sm input-bordered join-item max-w-[30vw]'
            placeholder={placeholder}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter')
                onSearch({
                  selectedFilter,
                  searchKeyword,
                });
            }}
          />
        </div>
      </div>
      {filters && (
        <select
          className='select select-bordered join-item select-sm'
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
          className='btn join-item btn-sm'
          onClick={() => {
            onSearch({
              selectedFilter,
              searchKeyword,
            });
            router.push('/');
          }}>
          조회
        </button>
      </div>
    </div>
  );
}
