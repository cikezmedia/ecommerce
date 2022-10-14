import React from 'react';

const CheckoutWizard = ({ activeStep = 0 }) => {
  return (
    <div className='flex flex-wrap pt-4'>
      {['User Login', 'Shipping', 'Payment Method', 'Place Order'].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-1 border-b-2 pb-4 text-center ${
              index <= activeStep
                ? 'border-mainPurple text-mainPurple'
                : 'border-purple text-purple'
            }`}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
};

export default CheckoutWizard;
