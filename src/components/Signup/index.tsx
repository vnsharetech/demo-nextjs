import React from 'react';
import SignupCard from './signup-card';
import SignupSteps from './signup-steps';
import Link from 'next/link';

const Signup: React.FC = () => {
  return (
    <>
      <div className='flex flex-wrap py-10 lg:py-0 '>
        <div className='flex justify-center w-full'>
          <img src='/logo.svg' alt='' />
        </div>
        <div className='w-full mt-10 mb-5'>
          <SignupCard>
            <div className='w-full'>
              <h1 className='font-sans text-sm tracking-wider'>
                We are thrilled to have you on BrandTruth
              </h1>
            </div>
            <div className='w-full mt-5 mb-5 md:mb-8'>
              <h1 className='text-2xl font-tiemposHeadline md:text-3xl'>Create an Account</h1>
            </div>
            <div className='w-full'>
              <SignupSteps />
            </div>
          </SignupCard>
        </div>
        <div className='flex justify-between w-full'>
          <div>
            <Link href='/'>
              <p className='font-sans text-sm font-medium underline text-bt-daintree'>
                Need help Signing in?
              </p>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <p className='font-sans text-sm font-medium underline text-bt-daintree'>
                Already Registered?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
