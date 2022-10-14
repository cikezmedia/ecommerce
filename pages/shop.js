import Head from 'next/head';
import React from 'react';
import { Product } from '../components';

const shop = () => {
  return (
    <div className='bg-white text-black p-6 pb-10'>
      <Head>
        <title>KezMart Online Store</title>
        <meta name='description' content='KezMart Special Store' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='flex flex-col items-center gap-4 mx-auto pt-16 pb-16'>
        <h1 className='text-4xl lg:text-4xl font-montserrat font-semibold'>
          Shop Items
        </h1>
        <div className='w-28 h-0.5 bg-mainPurple'></div>
      </div>
      <Product />
    </div>
  );
};

export default shop;
