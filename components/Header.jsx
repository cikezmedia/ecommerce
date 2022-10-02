import Link from 'next/link';
import React, { useState } from 'react';
import {
  MdLightMode,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import { RiSearch2Line, RiUser6Line, RiShoppingCartLine } from 'react-icons/ri';
import { CgMenuRight } from 'react-icons/cg';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <header className='p-6 border-b border-black dark:border-pink'>
        {/* Desktop Menu */}
        <div className='hidden lg:block'>
          <div className='container flex flex-row justify-between items-center mx-auto'>
            <Link href='../'>
              <a className='text-3xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-pink to-black w-1/3'>
                KezMart
              </a>
            </Link>

            <div className=' flex flex-row mx-auto place-content-center space-x-12 w-1/3'>
              <Link href='../'>
                <a>Home</a>
              </Link>
              <Link href='../shop'>
                <a>Shop</a>
              </Link>
              <Link href='../wishlist'>
                <a>Wishlist</a>
              </Link>
            </div>

            <div className='flex flex-row space-x-6 items-center place-content-end w-1/3'>
              <form action='' method='post' className='relative'>
                <input
                  type='text'
                  placeholder='search...'
                  className='bg-purple w-36 p-1 text-black focus:scale-110 dark:text-pink bg-transparent pr-8 border border-black dark:border-pink outline-none rounded-lg pl-2 placeholder:text-black dark:placeholder:text-pink placeholder:text-sm'
                />
                <RiSearch2Line className='absolute w-5 h-5 cursor-pointer top-1.5 right-2 text-black dark:text-pink' />
              </form>
              <RiShoppingCartLine className='w-6 h-6 text-black dark:text-white' />
              <MdLightMode className='w-6 h-6 text-black dark:text-white' />
              <div
                onClick={toggleMenu}
                className='flex flex-row items-center cursor-pointer'
              >
                <RiUser6Line className='w-6 h-6 text-black dark:text-white' />
                {!isOpen ? (
                  <MdKeyboardArrowDown className='w-5 h-5 text-black dark:text-white' />
                ) : (
                  <MdKeyboardArrowUp className='w-5 h-5 text-black dark:text-white' />
                )}
              </div>

              {isOpen && (
                <div className='absolute top-[85px] z-10 bg-black dark:bg-pink w-40 text-white dark:text-black right-2 p-4 rounded-b-lg'>
                  <div className='flex flex-col gap-5 text-lg font-roboto text-purple dark:text-black tracking-wider'>
                    <Link href='./' className='pb-4 border-b-2 border-black'>
                      <a>Login</a>
                    </Link>
                    <Link href='./'>
                      <a>Signup</a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className='flex lg:hidden'>
          <div className='container flex flex-row justify-between items-center mx-auto'>
            <Link href='../'>
              <a className='text-3xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink'>
                KezMart
              </a>
            </Link>
            <div className='flex flex-row items-center space-x-5'>
              <RiSearch2Line className='w-6 h-6 text-black dark:text-white' />
              <RiShoppingCartLine className='w-6 h-6 text-black dark:text-white' />
              <div
                onClick={toggleMenu}
                className='flex flex-row items-center pl-2 cursor-pointer'
              >
                <CgMenuRight className='w-8 h-8 text-black dark:text-white' />
              </div>

              {isOpen && (
                <div className='absolute top-[85px] z-10 bg-black dark:bg-pink w-full text-white dark:text-black p-6 right-0'>
                  <div className='flex flex-col gap-5 text-lg font-roboto text-purple dark:text-black tracking-wider'>
                    <div className='flex flex-col gap-5'>
                      <Link href='../'>
                        <a>Home</a>
                      </Link>
                      <Link href='shop'>
                        <a>Shop</a>
                      </Link>
                      <Link href='wishlist'>
                        <a>Wishlist</a>
                      </Link>
                    </div>
                    <Link href='./'>
                      <a>Login</a>
                    </Link>
                    <Link href='./'>
                      <a>Signup</a>
                    </Link>
                    <div className='flex flex-row items-center cursor-pointer space-x-2'>
                      <MdLightMode className='w-6 h-6' />
                      <span>Light theme</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
