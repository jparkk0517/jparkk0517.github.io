import { ReactNode } from 'react';

interface ICard {
  title: ReactNode;
  children: ReactNode;
  footer: ReactNode;
  date: ReactNode;
  tags?: string[];
  emphatic?: {
    title?: string;
    tag?: string;
    desc?: string;
  };
  onClick?: () => void;
  onClickTag?: (tag: string) => void;
}

const Card = ({
  title,
  children,
  date,
  onClick,
  emphatic,
  onClickTag,
  tags = [],
}: ICard) => {
  return (
    <div
      onClick={onClick}
      className='card m-4 bg-base-100 hover:bg-base-200  hover:scale-105 transform transition-transform duration-300 border border-slate-600 cursor-pointer max-w-[70vw]'>
      <div className='card-body'>
        <h2 className='card-title'>
          {title}
          <div className='badge bg-white text-black'>{date}</div>
        </h2>
        <div
          className='text-ellipsis max-w-[50vw] max-h-[10vh] overflow-hidden'
          style={{
            display: '-webkit-flex',
          }}>
          {children}
        </div>
        <div className='card-actions justify-end'>
          {tags.map((tag) => (
            <div
              onClick={(e) => {
                e.stopPropagation();
                onClickTag && onClickTag(tag);
              }}
              className={`badge badge-outline ${
                emphatic?.tag &&
                tag.toLowerCase().includes(emphatic.tag.toLowerCase()) &&
                emphatic.tag !== ''
                  ? 'border-secondary text-secondary'
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
