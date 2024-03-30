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
    });
  }, [router.query]);

  return (
    <main
      className="prose h-[95vh] overflow-y-scroll p-4 align-baseline"
      ref={mainRef}
    >
      {children}
      <Menu />
    </main>
  );
};

export default Main;
