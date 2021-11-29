import Head from 'next/head';

// Importing global styles
import '../styles/globals.scss';

// Importing component styles
import '../styles/home.scss';

import '../components/filter-block/filter-block.scss';
import '../components/filter-by-price/filter-by-price.scss';
import '../components/filter-by-cameras/filter-by-cameras.scss';

import '../components/card-block-container/card-block-container.scss';
import '../components/one-product-card/one-product-card.scss';
import '../components/one-filter-by-camera/one-filter-by-camera.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        {/* Connecting the Montserrat font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>);
}

export default MyApp;