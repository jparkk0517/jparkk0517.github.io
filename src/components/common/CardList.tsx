import Card from '@/components/common/Card';
import { ReactNode, useEffect, useState } from 'react';
import useSearchKeyword from '@/store/searchStore';
interface IPage {
  pageLen?: number;
  pageNumber?: number;
}

interface IItem {
  title: string;
  children: ReactNode;
  date: ReactNode;
  onClick: () => void;
  tags?: string[];
}

interface ICardList {
  items?: IItem[];
  page?: IPage;
  onChangePage?: (page: number) => void;
  onSelect?: (item: IItem) => void;
}

const CardList = ({ items = [], page, onChangePage }: ICardList) => {
  const { pageLen = 10, pageNumber = 0 } = page ?? {};
  const { searchFilter, searchKeyword, setSearchFilter, setSearchKeyword } =
    useSearchKeyword();

  const [cursor, setCursor] = useState(pageNumber);
  const lastPageCount = Math.ceil(items.length / pageLen);
  const displayedItems = items.slice(cursor * pageLen, (cursor + 1) * pageLen);

  useEffect(() => {
    onChangePage && onChangePage(cursor);
  }, [onChangePage, cursor]);

  useEffect(() => {
    setCursor(pageNumber);
  }, [pageNumber]);
  return (
    <div className=''>
      {displayedItems.length === 0 ? (
        <div className='text-black text-6xl h-[85vh] font-black grid place-content-center'>
          No Data
        </div>
      ) : (
        <ul className='list-none p-0' style={{ display: 'ruby' }}>
          {displayedItems.map((item, idx) => (
            <li key={idx.toString()} className='inline-block'>
              <Card
                {...item}
                onClickTag={(tag) => {
                  setSearchFilter('tag');
                  setSearchKeyword(tag);
                }}
                key={idx.toString()}
                emphatic={{
                  tag: searchFilter === 'tag' ? searchKeyword : undefined,
                  title: searchFilter === 'title' ? searchKeyword : undefined,
                }}
              />
            </li>
          ))}
        </ul>
      )}
      <div className='flex justify-center mt-4'>
        <div className='join'>
          {cursor > 3 && (
            <>
              <button
                onClick={() => setCursor(0)}
                className='join-item btn btn-lg'>
                첫페이지
              </button>
              <span className='mx-2'>...</span>
            </>
          )}

          {new Array(lastPageCount)
            .fill(null)
            .map((_, idx) => idx)
            .filter((idx) => cursor - 3 <= idx && idx <= cursor + 3)
            .map((idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCursor(idx);
                }}
                className={`join-item btn btn-lg ${
                  idx === cursor ? 'btn-active' : ''
                }`}>
                {idx + 1}
              </button>
            ))}

          {cursor < lastPageCount - 4 && (
            <>
              <span className='mx-2'>...</span>
              <button
                onClick={() => setCursor(lastPageCount - 1)}
                className='join-item btn btn-lg'>
                끝페이지
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardList;
