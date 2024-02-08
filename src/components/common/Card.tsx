import { ReactNode } from 'react';

interface ICard {
  title: string;
  children: ReactNode;
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
    <div className='indicator'>
      <div
        onClick={onClick}
        className='card m-4 hover:scale-105 transform transition-transform duration-300 border border-slate-600 cursor-pointer max-w-[70vw]'>
        <span className='indicator-item badge badge-primary right-8'>
          {date}
        </span>

        <div className='card-body'>
          <h2 className='card-title flex-col'>
            <div>
              {title.split(' ').map((title) => {
                return (
                  <span
                    key={title}
                    className={`text-${
                      emphatic?.title && title.includes(emphatic?.title)
                        ? 'red'
                        : 'blue'
                    }-500 mr-2`}>
                    {title}
                  </span>
                );
              })}
            </div>
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
                className={`badge ${
                  emphatic?.tag &&
                  tag.toLowerCase().includes(emphatic.tag.toLowerCase()) &&
                  emphatic.tag !== ''
                    ? 'badge-neutral'
                    : ''
                }`}
                key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
