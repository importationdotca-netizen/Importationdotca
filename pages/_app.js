import Head from 'next/head';
import '../styles/globals.css';
import StructuredData from '../components/StructuredData';
import { organizationSchema } from '../lib/schema';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StructuredData data={organizationSchema()} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
