import { ReactNode } from 'react';

interface ICard {
  title: ReactNode;
  children: ReactNode;
  footer: ReactNode;
  tags?: string[];
  onClick?: () => void;
}

const Card = ({ title, children, footer, onClick, tags = [] }: ICard) => {
  return (
    <div
      onClick={onClick}
      className='card m-4 bg-base-100 hover:bg-base-200  hover:scale-105 transform transition-transform duration-300 border border-slate-600 cursor-pointer'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        {children}
        <div className='card-actions justify-end'>
          {tags.map((tag) => (
            <div className='badge badge-outline' key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
