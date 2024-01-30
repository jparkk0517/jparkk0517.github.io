import { ReactNode } from 'react';

const Main = ({ children }: { children?: ReactNode }) => {
  return (
    <main className='w-screen p-4 min-h-full align-baseline'>{children}</main>
  );
};

export default Main;
