import '@/styles/globals.css';
import Layout from '@/components/layout/Layout';

import carsData from '@/data/carsData';


export default function App({ Component, pageProps }) {

  return (

    <Layout>

      <Component {...pageProps} carsData={carsData} />

    </Layout>
  )
}
