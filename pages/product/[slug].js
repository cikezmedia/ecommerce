import React, { useContext, useRef, useState } from 'react';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import data from '../../utils/data';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import {
  MdOutlineKeyboardBackspace,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import Link from 'next/link';
import { Banner } from '../../components';
import { Store } from '../../utils/Store';
import dynamic from 'next/dynamic';

function ProductPage() {
  const inputRef = useRef();
  const { state, dispatch } = useContext(Store);
  const [count, setCount] = useState(1);
  const { query } = useRouter();
  const router = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  const handleAdd = () => {
    if (count < product.countInStock) {
      setCount((prev) => prev + 1);
    } else {
      setCount(product.countInStock);
    }
  };

  const handleSub = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  if (!product) {
    return <div>Product Not Found</div>;
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + count : count;
    if (product.countInStock < quantity) {
      alert('Sorry product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };
  return (
    <>
      <Head>
        <title>KezMart Online Store | {product.description}</title>
        <meta name='description' content='KezMart Special Store' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='flex flex-row items-center justify-between sticky z-10 top-0 bg-gradient-to-r from-purple to-gray-100 pl-6 pr-6 p-2'>
        <Link href='/shop'>
          <a>
            <MdOutlineKeyboardBackspace className='w-7 h-7 text-white' />
          </a>
        </Link>
        <span className='text-black font-medium'>{product.brand}</span>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='col-span-1 p-6 lg:p-20 text-black bg-white'>
          <div className='flex flex-col'>
            <Image
              src={product.image}
              alt={product.name}
              width='100%'
              height='100%'
              layout='responsive'
              className='rounded-lg'
              priority={true}
            />
          </div>
        </div>
        <div className='col-span-1 text-black bg-gray-100 p-6 pb-10 lg:p-8 lg:pl-10'>
          <div className='flex flex-col gap-5 lg:gap-8 pt-4 lg:pt-10'>
            <div className='flex flex-row items-center gap-2 font-montserrat font-medium'>
              <div>
                Category:
                <span className='text-mainPurple font-bold pl-2'>
                  {product.category}
                </span>
              </div>
              -
              <div>
                Store:
                <span className='text-mainPurple font-bold pl-2'>
                  {product.brand}
                </span>
              </div>
            </div>
            <h2 className='text-4xl font-semibold font-montserrat tracking-wide'>
              {product.name}
            </h2>
            <div className='flex flex-row items-center text-gray-600 gap-2 text-sm font-semibold'>
              <div className='flex flex-row items-center'>
                <AiFillStar className='w-4 h-4 text-yellow-500' />
                <AiFillStar className='w-4 h-4 text-yellow-500' />
                <AiFillStar className='w-4 h-4 text-yellow-500' />
              </div>
              <span>{product.rating} / 5</span> -
              <span>{product.numReviews} Reviews</span>
            </div>
            <span className='text-base font-normal'>{product.description}</span>
            <div className='flex flex-row items-center justify-between'>
              <span className='text-4xl font-semibold pt-3 gap-4'>
                ${(product.amount * count).toFixed(2)}
              </span>
              <span className='pt-4'>
                In stock:{' '}
                {product.countInStock > 0
                  ? product.countInStock
                  : 'Unavailable'}
              </span>
            </div>
            <div className='flex flex-row items-center gap-4 pt-2'>
              <button
                onClick={handleSub}
                className='border border-black font-semibold text-xl w-9 h-9 rounded-lg'
              >
                -
              </button>
              <div ref={inputRef} className='font-normal text-3xl'>
                {count}
              </div>
              <button
                onClick={handleAdd}
                className='text-white bg-black font-semibold text-xl w-9 h-9 rounded-lg'
              >
                +
              </button>
            </div>
            <div className='flex flex-row items-center pt-4 gap-4'>
              <button
                onClick={addToCartHandler}
                className='bg-white text-black border p-2.5 px-6 border-black rounded-lg'
              >
                Add to Cart
              </button>
              <Link href='../' alt=''>
                <a>
                  <button className='bg-black text-white p-2.5 px-6 rounded-lg'>
                    Buy now
                  </button>
                </a>
              </Link>
            </div>
            <div className='flex flex-col pt-4'>
              <div className='flex flex-row items-center justify-between border-b border-gray-300 pb-3'>
                <div className='flex flex-col text-[11px]'>
                  <span>Dispatch in 1 - 2 days</span>
                  <span className='underline'>Do not like delay?</span>
                </div>
                <MdKeyboardArrowRight className='w-4 h-4' />
              </div>
              <div className='flex flex-row items-center justify-between border-b border-gray-300 pb-4 pt-4'>
                <span className='text-[11px]'>Home delivery - $10</span>
                <MdKeyboardArrowRight className='w-4 h-4' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </>
  );
}

export default dynamic(() => Promise.resolve(ProductPage), { ssr: false });
