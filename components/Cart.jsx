import Image from 'next/image';
import React, { useContext } from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import { Store } from '../utils/Store';

const Cart = (props) => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
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
            priority={true}
          />
        </div>

        <div className='col-span-3 gap-4'>
          <div className='flex flex-col space-y-1 lg:space-y-4'>
            <h3 className='text-sm font-montserrat text-black'>{props.name}</h3>
            <div className='flex flex-row gap-3'>
              <select className='bg-gray-200 text-black p-0.5 form-select rounded-lg space-x-2'>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
              <span className='text-black'>
                {props.quantity} x ${props.amount.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className='col-span-1'>
          <div className='flex flex-col gap-2 items-end place-content-end'>
            <span className='text-lg font-medium text-black'>
              ${(props.amount * props.quantity).toFixed(2)}
            </span>
            <button onClick={() => removeItemHandler(props.item)}>
              <MdOutlineDelete className='w-6 h-6 text-red-500' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
