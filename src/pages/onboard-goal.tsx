import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import OnboardPageLayout from '../layouts/onboard-page-layout';
import BrainIcon from '../components/icons/brain';
import TextareaField from '../components/global/textarea-field';
import Button from '../components/global/button';
import LeftArrow from '../components/icons/left-arrow';
import OnboardFooter from '../components/onboard-components/onboard-footer';
import Completed from '../components/icons/onboarding/completed';
import Inprogress from '../components/icons/onboarding/inprogress';
import Comming from '../components/icons/onboarding/coming';
import CommingDark from '../components/icons/onboarding/coming-dark';
import CommingLight from '../components/icons/onboarding/coming-light';

const OnboardGoal: React.FC = () => {
  let [initialBrandName, setInitialBrandName] = useState<string>('CompanyX');
  let [brandName, setBrandName] = useState<string>('');
  let [brandNameValid, setBrandNameValid] = useState<boolean>(false);

  const changeBrandName = (e: any) => {
    setBrandName((brandName = e.target.value));
  };

  const checkBrandName = () => {
    if (brandName === '') {
      setBrandNameValid((brandNameValid = false));
    } else {
      setBrandNameValid((brandNameValid = true));
    }
  };

  const changeBrandProduct = (e: any) => {
    if (e.key === 'Enter') {
      setInitialBrandName((initialBrandName = brandName));
    }
  };

  return (
    <OnboardPageLayout>
      <div className='min-h-screen'>
        <OnboardFooter step={3} />

        <div className='flex flex-wrap' style={{ background: '#f3f6f8' }}>
          <div className='xl:w-2/3 w-full min-h-screen flex flex-wrap p-10 container mx-auto pb-28'>
            <AnimatePresence>
              <motion.div
                transition={{
                  type: 'spring',
                  damping: 20,
                  stiffness: 100,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}>
                <div className='w-full flex justify-center mb-16'>
                  <img src='/logo.svg' alt='' />
                </div>
                <div className='w-full text-center mb-10'>
                  <h1 className='lg:text-5xl text-2xl text-bt-gray-900 font-tiemposHeadline'>
                    Define your goals
                  </h1>
                </div>
                <div className='w-full text-center mb-10'>
                  <h1 className='text-lg text-bt-gray-900 font-sans'>
                    Supper easy to understand our process after
                  </h1>
                </div>
                <div className='w-full'>
                  <button
                    className='h-11 flex items-center lg:w-video-card-width w-full mx-auto outline-none focus:outline-none font-thin text-white bg-bt-red px-6 font-sans uppercase text-sm'
                    style={{ letterSpacing: '.2em' }}>
                    1 - Launch goals
                  </button>
                  <div
                    className='lg:w-video-card-width w-full p-8 flex flex-wrap mx-auto'
                    style={{ background: '#D8E0ED' }}>
                    <div className='w-full'>
                      <BrainIcon />
                    </div>
                    <div className='w-full my-2 relative'>
                      <p className='text-lg font-tiemposHeadline text-bt-daintree '>
                        Now lets set some goals for this next activity
                      </p>
                    </div>
                    <div className='w-full'>
                      <p className='text-sm font-sans text-bt-daintree'>
                        Quickly answer these questions to the best of your ability to recongize your
                        goals
                      </p>
                    </div>
                  </div>
                  <div
                    className='lg:w-video-card-width w-full px-10 pt-5 mx-auto flex flex-wrap'
                    style={{ background: '#E5EBF5' }}>
                    <div className='w-full mb-4'>
                      <h1 className='text-xl text-bt-daintree font-tiemposHeadline'>
                        4. How do you see your brand in the next 10 years?
                      </h1>
                    </div>
                    <div className='w-full mb-4'>
                      <p className='font-sans font-semibold text-xs mb-2'>
                        Write your answer below
                      </p>
                    </div>
                    <div className='w-full'>
                      <div className='w-full flex flex-wrap items-center'>
                        <div className='lg:w-1/1 w-full mb-5'>
                          <TextareaField
                            label='Write 240 characters about your brand'
                            placeHolder='Every brand decicision is quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'
                            onChange={changeBrandName}
                            value={brandName}
                            isValueValid={brandNameValid}
                            onFocusOut={checkBrandName}
                            onEnterPress={changeBrandProduct}
                          />
                        </div>
                      </div>
                    </div>

                    <div className='lg:w-1/1 w-full flex justify-between items-center h-20 left-0 px-5 '>
                      <button
                        className='flex items-center text-sm outline-none focus:outline-none text-bt-daintree opacity-40'
                        onClick={() => {}}>
                        <LeftArrow />
                        <span className='ml-3'>Back</span>
                      </button>
                      <Button
                        buttonText='Go to the next Question'
                        classes='px-8'
                        onClick={() => {}}
                      />
                    </div>
                  </div>
                </div>
                <div className='w-full flex justify-center mt-10 -mb-10'>
                  <img src='/next-step2.png' alt='' />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className='w-1/3 xl:block hidden min-h-screen bg-bt-daintree'>
            {/* <img src='/lines.svg' alt='' className='ml-auto' /> */}
            <div
              className='min-h-screen'
              style={{
                background: `url("/lines.svg")`,
              }}>
              <div className='ml-16 m-40'>
                <div className='text-bt-cerulean mb-4'>Define</div>
                <ul>
                  <li>
                    <div>
                      <div className='flex items-stretch'>
                        <div className=''>
                          <Completed />
                        </div>
                        <div className='ml-1 mt-2 text-bt-cerulean ml-2'>Launch</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-stretch'>
                      <div className='ml-3 mt-2'>
                        <Inprogress />
                      </div>
                      <div className=' text-bt-cerulean mt-2 ml-4'>Intro</div>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-stretch'>
                      <div className='ml-3 mt-2'>
                        <Inprogress />
                      </div>{' '}
                      <div className='text-bt-cerulean mt-2 ml-4'>Goals</div>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-stretch'>
                      <div className='ml-3 mt-2'>
                        <Comming />
                      </div>{' '}
                      <div className='text-bt-cerulean mt-2 ml-4'>Choice Statement</div>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-stretch'>
                      <div className='ml-1 mt-2'>
                        <CommingLight />
                      </div>{' '}
                      <div className='text-bt-cerulean ml-2 mt-4'>Setup Factor</div>
                    </div>
                  </li>
                </ul>

                <div className='text-bt-cerulean mb-2 mt-8'>Align</div>
                <ul>
                  <li>
                    <div className='flex items-stretch'>
                      <div className='ml-1'>
                        <CommingLight />
                      </div>
                      <div className='text-bt-cerulean ml-2 mt-2'>Invite Others</div>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-stretch'>
                      <div className='ml-1 mt-2'>
                        <CommingDark />
                      </div>
                      <div className='text-bt-cerulean mt-4 ml-2'>Start the Driver</div>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-stretch'>
                      <div className='ml-1 mt-2'>
                        <CommingDark />
                      </div>
                      <div className='text-bt-cerulean mt-4 ml-2'>Schedule a Calibration</div>
                    </div>
                  </li>
                </ul>

                <div className='text-bt-cerulean mb-2 mt-8'>Accelerate</div>
                <ul>
                  <li>
                    <div className='flex items-stretch'>
                      <div className='ml-1'>
                        <CommingDark />
                      </div>{' '}
                      <div className='text-bt-cerulean mt-1 ml-2'>Facts</div>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-stretch'>
                      <div className=' ml-1 mt-2'>
                        <CommingDark />
                      </div>{' '}
                      <div className='text-bt-cerulean mt-4 ml-2'>Market</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <img src='/labels.svg' alt='' className='ml-10 mt-24' />
          </div>
        </div>
      </div>
    </OnboardPageLayout>
  );
};

export default OnboardGoal;
