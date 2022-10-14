import Link from 'next/link';
import React, { useState, useContext, useEffect, useRef } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { MdLightMode } from 'react-icons/md';
import { RiSearch2Line, RiUser6Line, RiShoppingCartLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgMenuRight } from 'react-icons/cg';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

const Header = () => {
  const { status, data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
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

  const logoutUser = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white'>
      <header
        className='p-6 border-b border-black dark:border-pink'
        ref={menuRef}
      >
        {/* Desktop Menu */}
        <div className='hidden lg:block'>
          <div className='container flex flex-row justify-between items-center mx-auto'>
            <Link href='../'>
              <a className='text-3xl font-bold font-montserrat text-purple w-1/3'>
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
              <Link href='../cart'>
                <a>
                  <RiShoppingCartLine className='w-6 h-6 text-black dark:text-white' />
                </a>
              </Link>
              <div className='absolute right-[89px] bottom-5'>
                {cartItemsCount > 0 && (
                  <span className='flex flex-col items-center mx-auto  bg-black dark:bg-white dark:text-black w-5 h-5 text-white rounded-full'>
                    <span className='flex flex-col text-sm items-center'>
                      {cartItemsCount}
                    </span>
                  </span>
                )}
              </div>
              <AiOutlineHeart className='w-6 h-6 text-black dark:text-white' />
              <div
                className='flex flex-row items-center cursor-pointer'
                onClick={toggleMenu}
              >
                <RiUser6Line className='w-6 h-6 text-black dark:text-white' />
                {isOpen && (
                  <>
                    <div className='absolute bg-black w-1 dark:bg-pink top-[60px] right-0 h-6'></div>
                    <div className='absolute top-[70px] z-20 bg-black  dark:bg-pink w-48 text-white dark:text-black right-0 p-4 rounded-b-lg'>
                      <div className='flex flex-col gap-5 text-lg font-roboto text-purple dark:text-black tracking-wider'>
                        {status === 'loading' ? (
                          'loading'
                        ) : session?.user ? (
                          <div className='flex flex-col gap-5'>
                            <div className='text-mainPurple'>
                              <span className='font-light'>Welcome</span>{' '}
                              {session?.user.name}
                            </div>
                            <Link href='../cart'>
                              <a>My Cart</a>
                            </Link>
                            <Link href='../shipping'>
                              <a>Checkout</a>
                            </Link>
                            <Link href='../order-history'>
                              <a>Order History</a>
                            </Link>
                            <a
                              href='#'
                              className='text-red-500'
                              onClick={logoutUser}
                            >
                              Logout
                            </a>
                          </div>
                        ) : (
                          <div className='flex flex-col gap-5'>
                            <Link
                              href='../login'
                              className='pb-4 border-b-2 border-black'
                            >
                              <a>Login</a>
                            </Link>
                            <Link href='../signup'>
                              <a>Signup</a>
                            </Link>
                          </div>
                        )}

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
              <a className='text-3xl font-bold font-montserrat text-purple'>
                KezMart
              </a>
            </Link>
            <div className='flex flex-row items-center space-x-4'>
              <RiSearch2Line className='w-6 h-6 text-black dark:text-white' />
              <Link href='../cart'>
                <a>
                  <RiShoppingCartLine className='w-6 h-6 text-black dark:text-white' />
                </a>
              </Link>
              <div className='absolute right-[80px] bottom-5'>
                {cartItemsCount > 0 && (
                  <span className='flex flex-col items-center mx-auto  bg-black dark:bg-white dark:text-black w-5 h-5 text-white rounded-full'>
                    <span className='flex flex-col text-sm items-center'>
                      {cartItemsCount}
                    </span>
                  </span>
                )}
              </div>
              <AiOutlineHeart className='w-6 h-6 text-black dark:text-white' />
              <div
                onClick={toggleMenu}
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
                      {status === 'loading' ? (
                        'loading'
                      ) : session?.user ? (
                        <span className='flex flex-col gap-5 border-t pt-5 border-mainPurple'>
                          <div className='text-mainPurple'>
                            <span className='font-light'>Welcome</span>{' '}
                            {session?.user.name}
                          </div>
                          <Link href='../cart'>
                            <a>My Cart</a>
                          </Link>
                          <Link href='../shipping'>
                            <a>Checkout</a>
                          </Link>
                          <Link href='../order-history'>
                            <a>Order History</a>
                          </Link>
                          <a
                            href='#'
                            className='text-red-500'
                            onClick={logoutUser}
                          >
                            Logout
                          </a>
                        </span>
                      ) : (
                        <span className='flex flex-col gap-5'>
                          <Link href='../login'>
                            <a>Login</a>
                          </Link>
                          <Link href='../signup'>
                            <a>Signup</a>
                          </Link>
                        </span>
                      )}

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
    </div>
  );
};

export default Header;
