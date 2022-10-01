import Head from 'next/head';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Products from '../components/Products';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to KezMart Online Store</title>
        <meta name='description' content='KezMart Special Store' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Hero />
      <Banner />
      <Products />
    </div>
  );
}
