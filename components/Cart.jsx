import Image from 'next/image';
import React, { useState } from 'react';
import { MdOutlineDelete } from 'react-icons/md';

const Cart = (props) => {
  const [count, setCount] = useState(1);
  function handleAdd() {
    setCount((prev) => prev + 1);
  }

  function handleSub() {
    setCount((prev) => prev - 1);
  }
  return (
    <>
      <div className='grid grid-cols-5 border-b pb-8 items-center pt-8 gap-4 border-gray-300'>
        <div className='col-span-1'>
          <Image
            src={props.image}
            alt=''
            width='80px'
            height='80px'
            className='rounded-lg'
          />
        </div>

        <div className='col-span-3 gap-4'>
          <div className='flex flex-col space-y-1 lg:space-y-4'>
            <h3 className='text-sm font-montserrat'>{props.name}</h3>
            <div className='flex flex-row gap-3'>
              <select className='bg-gray-200 text-black  dark:bg-gray-700 dark:text-white p-0.5 form-select rounded-lg space-x-2'>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>

              <div className='bg-gray-200 text-black  dark:bg-gray-700 dark:text-white p-0.5 form-select rounded-lg px-3 space-x-4'>
                <button onClick={handleSub}>-</button>
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-1'>
          <div className='flex flex-col gap-2 items-end place-content-end'>
            <span className='text-lg font-medium'>{props.amount}</span>
            <MdOutlineDelete className='w-6 h-6 text-red-500' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
