import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import LoadingIcons from 'react-loading-icons';

const LoginScreen = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { redirect } = router.query;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const submitForm = async (data, event) => {
    event.preventDefault();
    const { email, password } = data;
    try {
      setLoading(true);
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
        setLoading(false);
      }
    } catch (err) {
      toast.error(getError(err));
      setLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>KezMart Online Store | Login</title>
        <meta name='description' content='KezMart Special Store' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div>
        <div className='flex flex-col mx-auto items-center text-3xl font-montserrat font-semibold gap-4 pt-16'>
          <h1 className='text-black'>Login</h1>
          <div className='w-16 h-0.5 bg-mainPurple'></div>
        </div>
        <div className='flex flex-col mx-auto max-w-lg p-6 mt-6'>
          <form
            className='flex flex-col gap-6'
            onSubmit={handleSubmit(submitForm)}
          >
            <div className='flex flex-col gap-2'>
              <label htmlFor='email' className='font-semibold font-montserrat'>
                Email
              </label>
              <input
                type='email'
                placeholder='Email'
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Enter a valid email',
                  },
                })}
                className='bg-gray-100 font-montserrat focus:border-2 outline-none border-mainPurple border text-gray-800 p-3'
                id='email'
              />
              {errors?.email && (
                <span className='text-red-600 text-xs font-light'>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='password'
                className='font-semibold font-montserrat'
              >
                Password
              </label>
              <input
                type='password'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Minimum of 6 characters is required',
                  },
                })}
                placeholder='Password'
                className='bg-gray-100 font-montserrat focus:border-2 border outline-none border-mainPurple p-3 text-gray-800 '
                id='password'
              />
              {errors?.password && (
                <span className='text-red-600 text-xs font-light'>
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className='flex flex-row justify-between items-center'>
              <div>
                Not a member?
                <Link href='signup'>
                  <a className='text-purple'> Sign up</a>
                </Link>
              </div>
              <Link href='forgot'>
                <a className='text-purple'>Forgot password</a>
              </Link>
            </div>
            <div className='flex flex-col gap-2 pt-6'>
              <button
                className='mx-auto items-center w-40 text-white bg-mainPurple font-semibold p-3'
                type='submit'
              >
                {loading ? (
                  <span className='flex flex-row gap-2 justify-center items-center'>
                    <LoadingIcons.Circles className=' w-6 h-6' />
                    Loading
                  </span>
                ) : (
                  'Login'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
