import Head from 'next/head';
import '../styles/theme.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }){
  return (
    <>
      <Head>
        <title>Bright Green PAC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A people-powered PAC for a brighter future." />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
