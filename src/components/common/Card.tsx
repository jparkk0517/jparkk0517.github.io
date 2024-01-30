import { ReactNode } from 'react';

interface ICard {
  title: ReactNode;
  children: ReactNode;
  footer: ReactNode;
  onClick?: () => void;
}

const Card = ({ title, children, footer, onClick }: ICard) => {
  return (
    <div
      onClick={onClick}
      className='card m-4 w-96 bg-base-100 hover:bg-base-200  hover:scale-105 transform transition-transform duration-300 border border-slate-600 cursor-pointer'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        {children}
        <div className='card-actions justify-end'>{footer}</div>
      </div>
    </div>
  );
};

export default Card;
