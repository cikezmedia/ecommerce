import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
    },
  },
};

const Banner = () => {
  return (
    <div className='bg-black'>
      <div className='flex flex-col items-center mx-auto p-6 pt-16 pb-16 gap-8'>
        <div className='flex flex-col mx-auto items-center gap-5 pb-4'>
          <h1 className='text-4xl lg:text-6xl font-montserrat font-semibold text-white'>
            Shop Like A Pro
          </h1>
          <div className='w-32 h-0.5 bg-purple'></div>
        </div>
        <p className='max-w-3xl text-center pl-4 pr-4 text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          alias quod! Earum ea, cupiditate, nostrum quidem quasi nobis
          temporibus repellendus beatae dignissimos tempore aperiam, enim
        </p>
        <motion.button
          variants={variants}
          initial='hidden'
          whileInView='show'
          className='bg-purple p-4 px-16 font-montserrat text-black font-semibold text-lg rounded-lg'
        >
          Explore now
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
