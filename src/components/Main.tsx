import Menu from '@/components/Menu';
import { ReactNode, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const Main = ({ children }: { children?: ReactNode }) => {
  const router = useRouter();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;
    mainRef.current.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, [router.query]);

  return (
    <main
      className='prose p-4 align-baseline overflow-y-scroll h-[95vh]'
      ref={mainRef}>
      {children}
      <Menu />
    </main>
  );
};

export default Main;
