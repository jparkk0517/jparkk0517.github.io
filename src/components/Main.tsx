import Menu from '@/components/Menu';
import { ReactNode } from 'react';

const Main = ({ children }: { children?: ReactNode }) => {
  return (
    <main className='prose p-4 align-baseline overflow-y-scroll h-[85vh]'>
      {children}
      <Menu />
    </main>
  );
};

export default Main;
