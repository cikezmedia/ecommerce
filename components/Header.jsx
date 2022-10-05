import Link from 'next/link';
import React, { useState, useContext, useEffect, useRef } from 'react';
import { MdLightMode } from 'react-icons/md';
import { RiSearch2Line, RiUser6Line, RiShoppingCartLine } from 'react-icons/ri';
import { IoIosHeartEmpty } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { Store } from '../utils/Store';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

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

            <div className='relative flex flex-row space-x-6 items-center place-content-end w-1/3'>
              <form action='' method='post' className='relative'>
                <input
                  type='text'
                  placeholder='search...'
                  className='bg-purple w-36 p-1 text-black focus:scale-110 dark:text-pink bg-transparent pr-8 border border-black dark:border-pink outline-none rounded-lg pl-2 placeholder:text-black dark:placeholder:text-pink placeholder:text-sm'
                />
                <RiSearch2Line className='absolute w-5 h-5 cursor-pointer top-1.5 right-2 text-black dark:text-pink' />
              </form>
              <RiShoppingCartLine className='w-6 h-6 text-black dark:text-white' />
              <div className='absolute right-[89px] bottom-5'>
                {cart.cartItems.length > 0 && (
                  <span className='flex flex-col items-center mx-auto  bg-black dark:bg-white dark:text-black w-5 h-5 text-white rounded-full'>
                    <span className='flex flex-col text-sm items-center'>
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  </span>
                )}
              </div>
              <IoIosHeartEmpty className='w-6 h-6 text-black dark:text-white' />
              <div
                className='flex flex-row items-center cursor-pointer'
                onClick={toggleMenu}
                ref={menuRef}
              >
                <RiUser6Line className='w-6 h-6 text-black dark:text-white' />

                {isOpen && (
                  <>
                    <div className='absolute bg-black w-1 dark:bg-pink top-[60px] right-0 h-6'></div>
                    <div className='absolute top-[70px] z-20 bg-black  dark:bg-pink w-40 text-white dark:text-black right-0 p-4 rounded-b-lg'>
                      <div className='flex flex-col gap-5 text-lg font-roboto text-purple dark:text-black tracking-wider'>
                        <Link
                          href='/login'
                          className='pb-4 border-b-2 border-black'
                        >
                          <a>Login</a>
                        </Link>
                        <Link href='../'>
                          <a>Signup</a>
                        </Link>
                        <div className='flex flex-row text-sm gap-2 items-center'>
                          <MdLightMode className='w-5 h-5' /> Dark theme
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className='flex lg:hidden'>
          <div className='relative container flex flex-row justify-between items-center mx-auto'>
            <Link href='../'>
              <a className='text-3xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink'>
                KezMart
              </a>
            </Link>
            <div className='flex flex-row items-center space-x-4'>
              <RiSearch2Line className='w-6 h-6 text-black dark:text-white' />
              <RiShoppingCartLine className='w-6 h-6 text-black dark:text-white' />
              <div className='absolute right-[80px] bottom-5'>
                {cart.cartItems.length > 0 && (
                  <span className='flex flex-col items-center mx-auto  bg-black dark:bg-white dark:text-black w-5 h-5 text-white rounded-full'>
                    <span className='flex flex-col text-sm items-center'>
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  </span>
                )}
              </div>
              <IoIosHeartEmpty className='w-6 h-6 text-black dark:text-white' />
              <div
                onClick={toggleMenu}
                ref={menuRef}
                className='flex flex-row items-center cursor-pointer'
              >
                <CgMenuRight className='w-8 h-8 text-black dark:text-white' />

                {isOpen && (
                  <div className='absolute top-[60px] z-20 bg-black dark:bg-pink w-full text-white dark:text-black p-6 right-0'>
                    <div className='flex flex-col gap-5 text-lg font-roboto text-purple dark:text-black tracking-wider'>
                      <div className='flex flex-col gap-5'>
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
                      <Link href='../'>
                        <a>Login</a>
                      </Link>
                      <Link href='../'>
                        <a>Signup</a>
                      </Link>
                      <div className='flex flex-row items-center cursor-pointer space-x-2 text-sm'>
                        <MdLightMode className='w-5 h-5' />
                        <span>Light theme</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
