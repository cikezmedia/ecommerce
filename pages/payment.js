import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Store } from '../utils/Store';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { BsPaypal, BsCashCoin } from 'react-icons/bs';
import { FaCcStripe } from 'react-icons/fa';

const payment = () => {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState('');

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress, paymentMethod } = cart;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!selectedMethod) {
      return toast.error('Payment method is required');
    }
    dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: selectedMethod });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        paymentMethod: selectedMethod,
      })
    );
    router.push('/placeorder');
  };

  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push('/shipping');
    }
  }, [paymentMethod, router, shippingAddress.address]);
  return (
    <>
      <Head>
        <title>Choose Payment Method</title>
        <meta name='description' content='KezMart Special Store' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div>
        <div className='flex sticky top-0 border-b-4 border-mainPurple p-4 font-roboto text-lg bg-white'>
          Choose Payment Method
        </div>
        <div className='flex flex-col mx-auto max-w-lg pt-10 p-6'>
          {[
            {
              name: 'PayPal',
              icon: <BsPaypal className='w-5 h-5 text-blue-500' />,
            },
            {
              name: 'Stripe',
              icon: <FaCcStripe className='w-5 h-5 text-blue-400' />,
            },
            {
              name: 'Pay on Delivery',
              icon: <BsCashCoin className='w-5 h-5 text-green-600' />,
            },
          ].map((payment) => (
            <div
              key={payment.name}
              className='flex flex-row space-x-3 items-center mb-4'
            >
              <input
                name='paymentMethod'
                className='p-2 w-5 h-5 bg-red-400 outline-none checked:bg-purple'
                required
                id={payment.name}
                type='radio'
                checked={selectedMethod === payment.name}
                onChange={() => setSelectedMethod(payment.name)}
              />
              <div className='flex flex-row items-center'>
                {payment.icon}
                <label
                  className='p-2 text-base font-montserrat font-medium'
                  htmlFor={payment.name}
                >
                  {payment.name}
                </label>
              </div>
            </div>
          ))}
          <div className='mb-4 flex flex-row mt-6 text-white justify-between'>
            <button
              onClick={() => router.push('/shipping')}
              className='bg-purple p-3 px-6'
            >
              Back
            </button>
            <button onClick={submitHandler} className='bg-mainPurple p-3 px-8'>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default payment;
