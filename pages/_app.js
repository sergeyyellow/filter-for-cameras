// Importing global styles
import '../styles/globals.scss';

// Importing component styles
import '../components/filter-block/filter-block.scss';
import '../components/filter-by-price/filter-by-price.scss';
import '../components/filter-by-cameras/filter-by-cameras.scss';

import '../components/card-block-container/card-block-container.scss';
import '../components/one-product-card/one-product-card.scss';
import '../components/one-filter-by-camera/one-filter-by-camera.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;