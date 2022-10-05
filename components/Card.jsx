import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

const Card = (product) => {
  return (
    <>
      <div className='relative'>
        <Link href={`/product/${product.slug}`}>
          <a>
            <Image
              src={product.image}
              alt=''
              width='100'
              height='100%'
              layout='responsive'
              className='rounded-lg'
            />
          </a>
        </Link>
        <div className='flex flex-row align-center mx-auto justify-between mt-3 space-x-2'>
          <Link href={`/product/${product.slug}`}>
            <a className='flex flex-col'>
              <span className='text-mainPurple text-base font-medium font-poppins'>
                {product.name.length < 22
                  ? product.name
                  : `${product.name.substr(0, 22)}...`}
              </span>
              <span className='text-gray-400 text-sm'>{product.brand}</span>
            </a>
          </Link>
          <Link href={`/product/${product.slug}`}>
            <a>
              <div className='flex bg-mainPurple font-semibold text-sm font-montserrat p-1.5 text-white lg:p-2 px-4 rounded-lg'>
                ${product.amount}
              </div>
            </a>
          </Link>
        </div>
        <div className='flex absolute items-center bottom-[65px] rounded-full bg-black text-white p-2 border-2 border-pink right-3'>
          <AiOutlineShopping className='w-5 h-5' />
        </div>
        <div className='absolute top-3 opacity-40 rounded-lg bg-black text-white text-sm p-1 px-3 right-3'>
          {product.stock} in stock 🔥
        </div>
      </div>
    </>
  );
};

export default Card;
