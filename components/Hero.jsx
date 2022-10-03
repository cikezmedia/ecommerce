import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

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

const Hero = () => {
  return (
    <div className='flex flex-col-reverse gap-10 items-center bg-white pt-10 lg:pt-20 pb-20 lg:flex-row p-6'>
      <div className='flex flex-col w-full pl-2 font-montserrat lg:pl-20 lg:w-1/2'>
        <div className='text-gray-600 text-lg font-poppings font-medium'>
          New Arrival 🔥
        </div>
        <h1 className='text-6xl text-black pt-6 font-bold leading-2 lg:leading-tight tracking-wider'>
          The Best Place To Buy
          <span className='text-purple'>
            <Typewriter
              options={{
                strings: ['Original', 'Amazing', 'Winter', 'New', 'Summer'],
                autoStart: true,
                loop: true,
                delay: 250,
              }}
            />
          </span>
          Products
        </h1>
        <p className='text-gray-800 pr-10 pt-2 pb-2 lg:pt-4 lg:pb-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare nisi,
          at sed integer nec, velit vulputate est at.
        </p>
        <Link href='shop'>
          <motion.button
            variants={variants}
            initial='hidden'
            whileInView='show'
            className='bg-black w-36 transition ease-out hover:ease-in-out duration-500 hover:bg-mainPurple font-bold mt-4 items-center p-4 rounded-lg text-white'
          >
            Shop now
          </motion.button>
        </Link>
      </div>
      <div className='flex flex-col text-gray-600 pl-2 lg:pr-20 w-full lg:w-1/2'>
        <Image src='/banner.png' alt='' width={600} height={600} />
      </div>
    </div>
  );
};

export default Hero;
