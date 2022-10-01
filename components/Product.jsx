import React from 'react';
import { Filter, Card } from './';

const Product = () => {
  return (
    <>
      <Filter />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 px-4 lg:px-20 pt-16'>
        <Card
          image='/shirts/1.jpg'
          title={`Premium Men's T-Shirt`}
          store='Burberry'
          amount='$2,000.00'
          status='In stock 🔥'
        />
        <Card
          image='/shirts/2.jpg'
          title={`Premium Women's T-Shirt`}
          store='Gucci'
          amount='$3,100.00'
          status='In stock 🔥'
        />
        <Card
          image='/shirts/3.jpg'
          title={`Winter Jacker`}
          store='Gucci'
          amount='$2,000.00'
          status='In stock 🔥'
        />
        <Card
          image='/shirts/4.jpg'
          title={`Turkey Packet Shirt`}
          store='Turkey'
          amount='$1,900.00'
          status='In stock 🔥'
        />
        <Card
          image='/shirts/5.jpg'
          title={`Vintage Men's T-Shirt`}
          store='Turkey'
          amount='$900.00'
          status='In stock 🔥'
        />
        <Card
          image='/shirts/8.jpg'
          title={`Sports Men's Shirt`}
          store='China'
          amount='$820.00'
          status='In stock 🔥'
        />
        <Card
          image='/shoes/1.jpg'
          title={`Nike Leather Juggers`}
          store='Nike'
          amount='$1,000.00'
          status='In stock 🔥'
        />
        <Card
          image='/shoes/7.jpg'
          title={`Men's Sports Trainers`}
          store='Dolce'
          amount='$2,300.00'
          status='In stock 🔥'
        />
        <Card
          image='/shoes/2.jpg'
          title='Geniun Leather Snickers'
          amount='$65.00'
          store='Nike'
          status='In stock 🔥'
        />
        <Card
          image='/shoes/3.jpg'
          title='New Arrival Shoe'
          amount='$65.00'
          store='Nike'
          status='In stock 🔥'
        />
      </div>
    </>
  );
};

export default Product;
