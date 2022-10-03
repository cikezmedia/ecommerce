import Head from 'next/head';
import React from 'react';
import { Product } from '../components';

const shop = () => {
  return (
    <div className='dark:bg-black bg-gray-100 p-6'>
      <Head>
        <title>KezMart Online Store</title>
        <meta name='description' content='KezMart Special Store' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='flex flex-col items-center gap-4 mx-auto pt-16 pb-16'>
        <h1 className='text-4xl lg:text-4xl font-montserrat font-semibold text-black dark:text-white'>
          Shop Items
        </h1>
        <div className='w-28 h-0.5 bg-purple'></div>
      </div>
      <Product />
    </div>
  );
};

export default shop;
