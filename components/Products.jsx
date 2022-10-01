import React from 'react';
import { Product } from './';

const Products = () => {
  return (
    <div className='bg-white p-6 pt-10 pb-20'>
      <div className='flex flex-col mx-auto items-center text-3xl font-montserrat font-semibold text-black gap-4 pb-10'>
        <span>Available Product</span>
        <div className='w-32 h-0.5 bg-black'></div>
      </div>
      <Product />
    </div>
  );
};

export default Products;
