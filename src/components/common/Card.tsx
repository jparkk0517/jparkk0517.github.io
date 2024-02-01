import useSearchKeyword from '@/store/searchStore';
import { ReactNode } from 'react';

interface ICard {
  title: ReactNode;
  children: ReactNode;
  footer: ReactNode;
  date: ReactNode;
  tags?: string[];
  onClick?: () => void;
}

const Card = ({ title, children, date, onClick, tags = [] }: ICard) => {
  const { searchKeyword } = useSearchKeyword();
  return (
    <div
      onClick={onClick}
      className='card m-4 bg-base-100 hover:bg-base-200  hover:scale-105 transform transition-transform duration-300 border border-slate-600 cursor-pointer'>
      <div className='card-body'>
        <h2 className='card-title'>
          {title}
          <div className='badge badge-primary'>{date}</div>
        </h2>
        <div
          className='text-ellipsis max-w-[70vw] max-h-[10vh] overflow-hidden'
          style={{
            display: '-webkit-flex',
          }}>
          {children}
        </div>
        <div className='card-actions justify-end'>
          {tags.map((tag) => (
            <div
              className={`badge badge-outline ${
                tag.includes(searchKeyword) && searchKeyword !== ''
                  ? 'badge-primary'
                  : ''
              }`}
              key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
