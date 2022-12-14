import React from 'react';

const Filter = () => {
  return (
    <>
      <div className='flex flex-col scrollbar-hide overflow-auto mx-auto items-center'>
        <div className='grid grid-flow-col mx-auto justify-items-center  space-x-4 font-medium items-center'>
          <button className='bg-mainPurple dark:bg-purple rounded-lg px-6 p-2 text-pink dark:text-white'>
            <span>New</span>
          </button>
          <button className='bg-pink rounded-lg px-6 p-2 text-gray-600'>
            Popular
          </button>
          <button className='bg-pink rounded-lg px-6 p-2 text-gray-600'>
            Shirts
          </button>
          <button className='bg-pink rounded-lg px-6 p-2 text-gray-600'>
            Shoes
          </button>
          <button className='bg-pink rounded-lg px-6 p-2 text-gray-600'>
            Categories
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
