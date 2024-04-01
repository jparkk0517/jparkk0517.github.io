import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ className, children, ...props }: IButton) => {
  return (
    <button {...props} className={`btn btn-outline ${className ?? ''}`}>
      {children}
    </button>
  );
};

export default Button;
