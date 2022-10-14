import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
// import { CheckoutWizard } from '../components';
import { Store } from '../utils/Store';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';

export default function Shipping() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;

  useEffect(() => {
    setValue('fullname', shippingAddress.fullname);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('state', shippingAddress.state);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('country', shippingAddress.country);
  }, [setValue, shippingAddress]);

  const submitForm = async (data, event) => {
    event.preventDefault();
    const { fullname, address, city, state, postalCode, country } = data;
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullname,
        address,
        city,
        state,
        postalCode,
        country,
      },
    });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullname,
          address,
          city,
          state,
          postalCode,
          country,
        },
      })
    );
  };
  return (
    <>
      <Head>
        <title>Checkout Page</title>
        <meta name='description' content='KezMart Special Store' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div>
        {/* <CheckoutWizard activeStep={1} /> */}
        <div className='flex sticky top-0 border-b-4 border-mainPurple p-4 font-roboto text-lg bg-white'>
          Shipping Address
        </div>
        <div className='flex flex-col mx-auto max-w-lg p-6 mt-6'>
          <form
            className='flex flex-col gap-5'
            onSubmit={handleSubmit(submitForm)}
          >
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='fullname'
                className='font-semibold font-montserrat'
              >
                Full Name
              </label>
              <input
                type='text'
                placeholder='Full Name'
                {...register('fullname', {
                  required: {
                    value: true,
                    message: 'Full name is required',
                  },
                })}
                className='bg-gray-100 font-montserrat focus:border-2 outline-none border-mainPurple border text-gray-700 p-3'
                id='fullname'
              />
              {errors?.fullname && (
                <span className='text-red-600 text-xs font-light'>
                  {errors.fullname.message}
                </span>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='address'
                className='font-semibold font-montserrat'
              >
                Address
              </label>
              <input
                type='text'
                {...register('address', {
                  required: {
                    value: true,
                    message: 'Address is required',
                  },
                  minLength: {
                    value: 10,
                    message: 'Minimum of 10 characters is required',
                  },
                })}
                placeholder='Address'
                className='bg-gray-100 placeholder:bg-gray-100  font-montserrat focus:border-2 border outline-none border-mainPurple p-3 text-gray-700'
                id='address'
              />
              {errors?.address && (
                <span className='text-red-600 text-xs font-light'>
                  {errors.address.message}
                </span>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='city' className='font-semibold font-montserrat'>
                City
              </label>
              <input
                type='text'
                {...register('city', {
                  required: {
                    value: true,
                    message: 'City is required',
                  },
                  minLength: {
                    value: 2,
                    message: 'Minimum of 2 characters is required',
                  },
                })}
                placeholder='City'
                className='bg-gray-100 placeholder:bg-gray-100  font-montserrat focus:border-2 border outline-none border-mainPurple p-3 text-gray-700'
                id='city'
              />
              {errors?.city && (
                <span className='text-red-600 text-xs font-light'>
                  {errors.city.message}
                </span>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='state' className='font-semibold font-montserrat'>
                State
              </label>
              <input
                type='text'
                {...register('state', {
                  required: {
                    value: true,
                    message: 'State is required',
                  },
                  minLength: {
                    value: 2,
                    message: 'Minimum of 2 characters is required',
                  },
                })}
                placeholder='State'
                className='bg-gray-100 placeholder:bg-gray-100  font-montserrat focus:border-2 border outline-none border-mainPurple p-3 text-gray-700'
                id='state'
              />
              {errors?.state && (
                <span className='text-red-600 text-xs font-light'>
                  {errors.state.message}
                </span>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='postalCode'
                className='font-semibold font-montserrat'
              >
                Postal Code
              </label>
              <input
                type='text'
                {...register('postalCode', {
                  required: {
                    value: true,
                    message: 'Postal Code is required',
                  },
                  minLength: {
                    value: 3,
                    message: 'Minimum of 3 characters is required',
                  },
                })}
                placeholder='Postal Code'
                className='bg-gray-100 placeholder:bg-gray-100  font-montserrat focus:border-2 border outline-none border-mainPurple p-3 text-gray-700'
                id='postalCode'
              />
              {errors?.postalCode && (
                <span className='text-red-600 text-xs font-light'>
                  {errors.postalCode.message}
                </span>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='country'
                className='font-semibold font-montserrat'
              >
                Country
              </label>
              <input
                type='text'
                {...register('country', {
                  required: {
                    value: true,
                    message: 'Country is required',
                  },
                  minLength: {
                    value: 3,
                    message: 'Minimum of 3 characters is required',
                  },
                })}
                placeholder='Country'
                className='bg-gray-100 placeholder:bg-gray-100  font-montserrat focus:border-2 border outline-none border-mainPurple p-3 text-gray-700'
                id='country'
              />
              {errors?.country && (
                <span className='text-red-600 text-xs font-light'>
                  {errors.country.message}
                </span>
              )}
            </div>
            <div className='flex flex-col gap-2 pt-6'>
              <button
                className='mx-auto items-center w-40 text-white bg-mainPurple font-semibold p-3'
                type='submit'
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
Shipping.auth = true;
