import Card from '@/components/common/Card';
import { ReactNode, useEffect, useState } from 'react';

interface IPage {
  pageLen: number;
}

interface IItem {
  title: ReactNode;
  children: ReactNode;
  footer: ReactNode;
  onClick: () => void;
  tags?: string[];
}

interface ICardList {
  items?: IItem[];
  page?: IPage;
  onChangePage?: (page: number) => void;
  onSelect?: (item: IItem) => void;
}

const CardList = ({
  items = [],
  page = { pageLen: 10 },
  onChangePage,
  onSelect,
}: ICardList) => {
  const [cursor, setCursor] = useState(0);
  const lastPageCount = Math.ceil(items.length / page.pageLen);
  const displayedItems = items.slice(
    cursor * page.pageLen,
    (cursor + 1) * page.pageLen
  );

  useEffect(() => {
    onChangePage && onChangePage(cursor);
  }, [onChangePage, cursor]);
  return (
    <div>
      <ul className='list-none p-0' style={{ display: 'ruby' }}>
        {displayedItems.map((item, idx) => (
          <li key={idx.toString()} className='inline-block'>
            <Card {...item} key={idx.toString()} />
          </li>
        ))}
      </ul>
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
                onClick={() => setCursor(idx)}
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
