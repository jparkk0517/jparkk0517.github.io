import '@/app/globals.css';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import NavBar from '@/components/NavBar';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K5DKF9QN"
          height="0"
          width="0"
          style={{
            display: 'none',
            visibility: 'hidden',
          }}
        ></iframe>
      </noscript>

      <div className="h-screen">
        <NavBar />
        <Main>
          <Component {...pageProps} />
          <Footer />
        </Main>
      </div>
    </>
  );
}

export default MyApp;
