import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='flex flex-row justify-between items-center mt-auto bg-black p-6 border-t-4 border-mainPurple'>
        <div className='text-3xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-purple to-white'>
          KezMart
        </div>
        <div className='font-medium'>All Rights Reserved</div>
      </div>
    </>
  );
};

export default Footer;
