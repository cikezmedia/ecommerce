import React, { useContext } from 'react';
import Head from 'next/head';
import { Cart } from '../components';
import Link from 'next/link';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

function CartScreen() {
  const router = useRouter();
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const totalPrice = cartItems.reduce((a, c) => a + c.quantity * c.amount, 0);

  return (
    <>
      <Head>
        <title>KezMart Online Store | Cart</title>
        <meta name='description' content='KezMart Special Store' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <div className='flex flex-col mx-auto items-center text-3xl font-montserrat font-semibold gap-4 pb-10 pt-16'>
        <h1 className='text-black'>Shopping Cart</h1>
        <div className='w-32 h-0.5 bg-mainPurple'></div>
      </div>

      {cartItems.length === 0 ? (
        <div className='flex flex-col'>
          <div className='flex flex-col mx-auto gap-6'>
            <h3 className='text-xl text-black '>Cart is empty</h3>
            <Link href='../shop'>
              <a className='bg-mainPurple p-3 px-6 rounded-lg text-white'>
                Go to shop
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className='grid grid-cols-1 lg:grid-cols-3 px-6 lg:px-10 lg:gap-10 pb-10'>
            <div className='col-span-2'>
              {cartItems.map((item) => (
                <Link href={`/product/${item.slug}`} key={item.slug}>
                  <a>
                    <Cart
                      quantity={item.quantity}
                      image={item.image}
                      amount={item.amount}
                      name={item.name}
                      item={item}
                    />
                  </a>
                </Link>
              ))}
            </div>
            <div className='col-span-1 pt-6'>
              <div className='flex sticky z-10 top-6 flex-col rounded-lg space-y-6 bg-gray-100 p-4 '>
                <h4 className='text-xl border-b text-gray-700 border-gray-300 pb-4 font-medium font-montserrat'>
                  Cart ({cartItems.reduce((a, c) => a + c.quantity, 0)})
                </h4>
                <span className='text-sm text-gray-600'>
                  Delivery: 3 - 5 days
                </span>
                <div className='flex flex-row text-gray-700 space-x-2 justify-between items-center'>
                  <span className='text-lg'>Subtotal:</span>
                  <h3 className='text-lg'>${totalPrice.toFixed(2)}</h3>
                </div>
                <div className='flex flex-row text-gray-700 justify-between items-center'>
                  <span className=''>Tax:</span>
                  <h3 className=''>$10</h3>
                </div>
                <div className='flex flex-row items-center border-t border-gray-300 space-x-2 pt-4 pb-4 place-content-end text-gray-700 font-poppings font-medium'>
                  <span>Total:</span>
                  <span className='text-2xl text-mainPurple'>
                    ${(totalPrice + 10).toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => router.push('login?redirect=/shipping')}
                  className='bg-mainPurple text-white p-3 font-medium rounded-lg'
                >
                  Proceed to checkout
                </button>
                <div className='flex flex-row place-content-end'>
                  <Link href='../shop'>
                    <a className='text-mainPurple font-poppins'>
                      Continue shopping
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
