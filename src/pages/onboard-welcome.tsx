import React from 'react';
import OnboardPageLayout from '../layouts/onboard-page-layout';
import OnboardFooter from '../components/onboard-components/onboard-footer';

const OnboardWelcome: React.FC = () => {
  return (
    <OnboardPageLayout>
      <div className='min-h-screen'>
        <OnboardFooter step={1} />
        <div className='flex flex-wrap' style={{ background: '#f3f6f8' }}>
          <div className='lg:w-2/3 w-full min-h-screen flex flex-wrap p-10 container mx-auto'>
            <div className='w-full flex justify-center mb-16'>
              <img src='/logo.svg' alt='' />
            </div>
            <div className='w-full text-center mb-10'>
              <h1 className='lg:text-5xl text-2xl text-bt-gray-900 font-tiemposHeadline'>
                Welcome, Let's Get you started
              </h1>
            </div>
            <div className='w-full text-center mb-10'>
              <h1 className='text-lg text-bt-gray-900 font-sans'>
                We want to talk about a couple of brand points first.
              </h1>
            </div>
            <div className='w-full'>
              <div className='relative lg:w-video-card-width mx-auto bg-onboard-card-bg'>
                <img src='/video-img.png' alt='' />
                <div className='flex items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                  <img src='/player-icon.svg' alt='' />
                  <p className='lg:text-2xl text-white ml-3 font-tiemposHeadline'>
                    How to get started
                  </p>
                </div>
              </div>
              <div className='lg:w-video-card-width mx-auto bg-onboard-card-bg pb-3 relative'>
                <button className='h-11 flex items-center justify-center w-full outline-none focus:outline-none font-medium text-white bg-bt-red'>
                  Checkout the Process below
                </button>
                <div className='w-full flex justify-center my-10 lg:px-0 px-4'>
                  <img src='/steps-img.svg' alt='' />
                </div>
                <div className='w-full flex justify-center mb-5 lg:px-0 px-4'>
                  <img src='/progress-bar.svg' alt='' />
                </div>
                <div className='w-full mb-5 absolute -mt-8 ml-12'>
                  <img src='/onboard-tooltip-one.svg' alt='' />
                </div>
                <div className='w-full lg:px-10 px-4'>
                  <p className='lg:text-xl text-bt-daintree font-tiemposHeadline'>
                    We want to talk through a couple of brand points first.We want to talk through a
                    couple of brand points first.We want to talk through a couple of brand points
                    first.We want to talk through a couple of brand points first.We want to talk
                    through a couple of brand points first.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full flex justify-center mt-10 -mb-10'>
              <img src='/next-step.svg' alt='' />
            </div>
          </div>
          <div className='w-1/3 lg:block hidden min-h-screen bg-bt-daintree'>
            <img src='/lines.svg' alt='' className='ml-auto' />
            <img src='/labels.svg' alt='' className='ml-10 mt-24' />
          </div>
        </div>
      </div>
    </OnboardPageLayout>
  );
};

export default OnboardWelcome;
