// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K5DKF9QN');`}</Script>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.0/github-markdown-light.min.css"
            integrity="sha512-Pmhg2i/F7+5+7SsdoUqKeH7UAZoVMYb1sxGOoJ0jWXAEHP0XV2H4CITyK267eHWp2jpj7rtqWNkmEOw1tNyYpg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
