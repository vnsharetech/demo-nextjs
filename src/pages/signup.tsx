import React from 'react';
import SignupLayout from '../layouts/signup-layout';
import Signup from 'components/signup';

const SignupPage: React.FC = () => {
  return (
    <>
      <SignupLayout title='Signup Page | BrandTruth'>
        <div className='flex flex-wrap w-full h-screen'>
          <div className='flex items-center justify-center w-full xl:w-5/12 lg:w-7/12 bg-signup-bg'>
            <div className='px-4 py-6 mx-auto md:w-4/5 md:px-0'>
              <Signup />
            </div>
          </div>
          <div className='hidden bg-left bg-no-repeat bg-auto xl:w-7/12 lg:w-5/12 lg:block signup-bg-img bg-bt-daintree'>
            {/* <img src='/img/create-bg.png' alt='' className='max-h-screen ml-auto' /> */}
          </div>
        </div>
      </SignupLayout>
    </>
  );
};

export default SignupPage;
