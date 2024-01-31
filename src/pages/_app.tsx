import '@/app/globals.css';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import NavBar from '@/components/NavBar';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.0/github-markdown-light.min.css'
        integrity='sha512-Pmhg2i/F7+5+7SsdoUqKeH7UAZoVMYb1sxGOoJ0jWXAEHP0XV2H4CITyK267eHWp2jpj7rtqWNkmEOw1tNyYpg=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      />
      <div className='h-screen'>
        <NavBar />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
