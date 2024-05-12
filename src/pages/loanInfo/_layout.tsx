import Head from 'next/head';
import { ReactNode } from 'react';

export default function LoanInfoLayout({ children }: { children: ReactNode }) {
  console.log('??', 1);
  return (
    <>
      <Head>
        <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
      </Head>
      <body>{children}</body>
    </>
  );
}
