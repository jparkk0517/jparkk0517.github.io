import { ReactNode } from 'react';

const Main = ({ children }: { children?: ReactNode }) => {
  return (
    <main
      className='p-4 align-baseline overflow-y-scroll'
      style={{ height: '88vh' }}>
      {children}
    </main>
  );
};

export default Main;
