import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import OnboardPageLayout from '../layouts/onboard-page-layout';
import Button from '../components/Global/Button';
import Completed from '../components/icons/onboarding/completed';
import Inprogress from '../components/icons/onboarding/inprogress';
import Comming from '../components/icons/onboarding/coming';
import CommingDark from '../components/icons/onboarding/coming-dark';
import CommingLight from '../components/icons/onboarding/coming-light';
import { useRouter } from 'next/router';

const OnboardSettingUp: React.FC = () => {
  const router = useRouter();

  const goToNext = () => {
    router.push('/onboard-choose-package');
  };

  return (
    <OnboardPageLayout>
      <div className='min-h-screen'>
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
                    Setting up your Dashboard
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
                    Start the driver
                  </button>

                  <div
                    className='lg:w-video-card-width w-full p-8 flex flex-wrap mx-auto'
                    style={{ background: '#D8E0ED' }}>
                    <div className='w-full my-2'>
                      <p className='text-lg text-center font-tiemposHeadline text-bt-daintree'>
                        Powering up the dashbaord
                      </p>
                    </div>
                    <div className='w-full'>
                      <p className='text-sm font-sans text-center text-bt-daintree'>
                        Awesome work completing everything so far! <br /> Let’s power up the
                        dashboard to complete the rest of the steps
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                  <Button buttonText='Go to the Dashbaord' onClick={goToNext} classes='px-8 mt-6' />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className='w-1/3 xl:block hidden min-h-screen bg-bt-daintree'>
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
                        <Comming />
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

export default OnboardSettingUp;
