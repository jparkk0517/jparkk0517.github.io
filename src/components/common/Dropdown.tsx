import { ReactNode } from 'react';

interface IDropdown {
  trigger: ReactNode;
  items?: Array<ReactNode>;
}

const Dropdown = ({ trigger, items = [] }: IDropdown) => {
  return (
    <div className='dropdown'>
      <summary className='m-1 btn'>{trigger}</summary>
      <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52'>
        {items.map((item, idx) => (
          <li key={idx.toString()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
