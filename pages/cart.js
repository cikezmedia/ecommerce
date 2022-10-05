import React from 'react';
import Head from 'next/head';
import { Cart } from '../components';
import Link from 'next/link';

const cart = () => {
  return (
    <>
      <Head>
        <title>KezMart Online Store | Cart</title>
        <meta name='description' content='KezMart Special Store' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <div className='flex flex-col mx-auto items-center text-3xl font-montserrat font-semibold gap-4 pb-10 pt-16'>
        <h1>Shopping Cart</h1>
        <div className='w-32 h-0.5 bg-mainPurple'></div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 px-6 lg:px-10 lg:gap-10 pb-10'>
        <div className='col-span-2'>
          <Cart
            image='/shirts/1.jpg'
            amount='$200.00'
            name='Product Name is here'
          />
          <Cart
            image='/shirts/2.jpg'
            amount='$300.00'
            name='Product name 2 is here name 2 is here'
          />
          <Cart
            image='/shirts/3.jpg'
            amount='$300.00'
            name='Product name 2 is here name 2 is here'
          />
          <Cart
            image='/shirts/4.jpg'
            amount='$300.00'
            name='Product name 2 is here name 2 is here'
          />
          <Cart
            image='/shirts/7.jpg'
            amount='$300.00'
            name='Product name 2 is here name 2 is here'
          />
          <Cart
            image='/shirts/6.jpg'
            amount='$300.00'
            name='Product name 2 is here name 2 is here'
          />
          <Cart
            image='/shirts/5.jpg'
            amount='$300.00'
            name='Product name 2 is here name 2 is here'
          />
          <Cart
            image='/shoes/6.jpg'
            amount='$300.00'
            name='Product name 2 is here name 2 is here'
          />
        </div>

        <div className='col-span-1 pt-6'>
          <div className='flex sticky z-10 top-6 flex-col rounded-lg space-y-6 bg-gray-100 p-4 '>
            <h4 className='text-xl border-b text-gray-700 border-gray-300 pb-4 font-medium font-montserrat'>
              Amount
            </h4>
            <span className='text-sm text-gray-600'>Delivery: 3 - 5 days</span>
            <div className='flex flex-row text-gray-700 space-x-2 justify-between items-center'>
              <span className='text-lg'>Subtotal:</span>
              <h3 className='text-lg'>$300.32</h3>
            </div>
            <div className='flex flex-row text-gray-700 justify-between items-center'>
              <span className=''>Vat:</span>
              <h3 className=''>$10</h3>
            </div>
            <div className='flex flex-row items-center border-t border-gray-300 space-x-2 pt-4 pb-4 place-content-end text-gray-700 font-poppings font-medium'>
              <span>Total:</span>
              <span className='text-2xl text-mainPurple'>$300.21</span>
            </div>

            <button className='bg-mainPurple text-white p-3 font-medium rounded-lg'>
              Proceed to checkout
            </button>
            <div className='flex flex-row place-content-end'>
              <Link href='../shop'>
                <a className='text-mainPurple font-poppins'>
                  Continue shopping
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cart;
