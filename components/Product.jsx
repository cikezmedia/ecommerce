import React from 'react';
import { Filter, Card } from './';
import data from '../utils/data';

const Product = () => {
  return (
    <>
      <Filter />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 px-4 lg:px-20 pt-16'>
        {data.products.map((product) => (
          <Card
            key={product.slug}
            image={product.image}
            name={product.name}
            slug={product.slug}
            brand={product.brand}
            amount={product.amount}
            stock={product.countInStock}
          />
        ))}
      </div>
    </>
  );
};

export default Product;
