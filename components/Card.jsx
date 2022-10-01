import React from 'react';
import Image from 'next/image';
import { AiOutlineShopping } from 'react-icons/ai';

const Card = (props) => {
  return (
    <>
      <div className='relative'>
        <Image
          src={props.image}
          alt=''
          width='100'
          height='100%'
          layout='responsive'
          className='rounded-lg'
        />
        <div className='flex flex-row align-center mx-auto justify-between mt-3 space-x-2'>
          <div>
            <h4 className='flex flex-col'>
              <span className='text-gray-600 text-base font-medium font-poppins'>
                {props.title.length < 15
                  ? props.title
                  : `${props.title.substr(0, 15)}...`}
              </span>
              <span className='text-gray-400 text-sm'>{props.store}</span>
            </h4>
          </div>
          <div>
            <div className='flex bg-mainPurple font-semibold text-sm font-montserrat p-1.5 lg:p-2 px-4 rounded-lg'>
              {props.amount}
            </div>
          </div>
        </div>
        <div className='flex absolute items-center bottom-[65px] rounded-full bg-black text-white p-2 border border-pink right-3'>
          <AiOutlineShopping className='w-5 h-5' />
        </div>
        <div className='absolute top-3 opacity-40 rounded-lg bg-black text-white text-sm p-1 px-3 right-3'>
          {props.status}
        </div>
      </div>
    </>
  );
};

export default Card;
