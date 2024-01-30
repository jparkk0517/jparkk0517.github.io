import '@/app/globals.css';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import NavBar from '@/components/NavBar';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen'>
      <NavBar />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </div>
  );
}

export default MyApp;
