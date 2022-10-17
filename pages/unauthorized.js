import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Unauthorized = () => {
  const router = useRouter();
  const { message } = router.query;
  return (
    <>
      <Head>
        <title>Unauthorized Page</title>
        <meta name='description' content='KezMart Special Store' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='flex flex-col mt-6 gap-4 mx-auto items-center p-6'>
        <span className='text-4xl text-red-500'>Access Denied</span>
        {message && <span>{message}</span>}
        <Link href='/login'>
          <button className='bg-mainPurple p-3 mt-6 text-white px-8 font-semibold'>
            Login now
          </button>
        </Link>
      </div>
    </>
  );
};

export default Unauthorized;
