import { HTMLAttributes } from 'react';

interface IButton extends HTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, children, ...props }: IButton) => {
  return (
    <button {...props} className={`btn btn-outline ${className ?? ''}`}>
      {children}
    </button>
  );
};

export default Button;
