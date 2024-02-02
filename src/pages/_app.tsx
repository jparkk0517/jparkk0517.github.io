import '@/app/globals.css';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import NavBar from '@/components/NavBar';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K5DKF9QN');`}</script>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.0/github-markdown-light.min.css'
          integrity='sha512-Pmhg2i/F7+5+7SsdoUqKeH7UAZoVMYb1sxGOoJ0jWXAEHP0XV2H4CITyK267eHWp2jpj7rtqWNkmEOw1tNyYpg=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </Head>
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-K5DKF9QN'
          height='0'
          width='0'
          style={{
            display: 'none',
            visibility: 'hidden',
          }}></iframe>
      </noscript>

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
