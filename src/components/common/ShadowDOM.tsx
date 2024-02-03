import { ReactNode, useRef, useState, ReactPortal, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ShadowDOM({ children }: { children?: ReactNode }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [portal, setPortal] = useState<ReactPortal | null>(null);

  useEffect(() => {
    if (!divRef.current || divRef?.current?.shadowRoot) return;
    const shadowRoot =
      divRef?.current?.shadowRoot ??
      divRef.current.attachShadow({ mode: 'open' });
    const _portal = createPortal(children, shadowRoot);
    setPortal(_portal as ReactPortal);
  }, [children]);

  return <div ref={divRef}>{portal}</div>;
}
