import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import OnboardPageLayout from '../layouts/onboard-page-layout';
import Button from '../components/Global/Button';
import DarkButton from '../components/Global/DarkButton';
import TickMark from '../components/icons/onboarding/tick-mark';
import { useRouter } from 'next/router';

const OnboardChoosePackage: React.FC = () => {
  const router = useRouter();
  const [team, setTeam] = useState([
    { name: 'John', profileImage: '' },
    { name: 'Andrew', profileImage: '' },
    { name: 'Nizan', profileImage: '' },
    { name: 'David', profileImage: '' },
  ]);

  const goToNext = () => {
    router.push('/');
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
                <div className='w-full text-center mb-5'>
                  <h1 className='lg:text-5xl text-2xl fle text-bt-gray-900 font-tiemposHeadline'>
                    Start a Package Based on your <br /> Team Size
                  </h1>
                </div>
                <div className='w-full text-center'>
                  <h1 className='text-lg text-bt-gray-900 font-sans'>Based on 4 team members</h1>
                </div>
                <div className='mb-10 flex m-auto'>
                  <div className='m-auto flex items-stretch'>
                    {team.map((value) => {
                      return (
                        <img
                          src='https://qph.fs.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b'
                          alt=''
                          className='w-10 h-10 rounded-full mr-2'
                        />
                      );
                    })}
                  </div>
                </div>
                <div className='flex w-full'>
                  <div className='w-1/3 bg-onboard-card-bg h-auto mr-3'>
                    <div className='pt-10 pl-7 pr-7'>
                      <span className='text-3xl'>$39</span>{' '}
                      <span className='text-sm font-sans text-bt-daintree'>/month</span>
                      <div className='pt-5 bottom-5'>
                        <div className=''>
                          <p className='text-xl'>Basic</p>
                        </div>
                        <div className='text-sm text-bt-daintree mt-3'>
                          All the basics for businesses that are just getting started.
                        </div>
                        <div className='mt-5'>
                          <ul>
                            <li>
                              <div className='flex items-stretch mb-2'>
                                <TickMark /> <span className='ml-2 '>Join a Brand Project</span>
                              </div>
                            </li>
                            <li>
                              <div className='flex items-stretch mb-2'>
                                <TickMark /> <span className='ml-2 '>Basic dashboard</span>
                              </div>
                            </li>
                            <li>
                              <div className='flex items-stretch mb-2'>
                                <TickMark /> <span className='ml-2 '>All components included</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className='relative mt-20'>
                          <DarkButton buttonText='Choose' classes='px-8 w-full h-10' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/3 bg-onboard-card-bg h-auto/5 mr-3'>
                    <div className='h-10 text-white text-center p-2 bg-bt-cerulean'>
                      RECONMENDED
                    </div>
                    <div className='pt-10 pl-7 pr-7'>
                      <span className='text-3xl text-bt-cerulean'>$999</span>{' '}
                      <span className='text-sm font-sans text-bt-daintree'>/month</span>
                      <div className='pt-5 pb-5'>
                        <div className=''>
                          <p className='text-xl'>Standard</p>
                        </div>
                        <div className='text-sm text-bt-daintree mt-3'>
                          Better for growing businesses that want more customers.
                        </div>
                        <div className='mt-5'>
                          <ul>
                            <li>
                              <div className='flex items-stretch mb-2'>
                                <TickMark /> <span className='ml-2 '>Unlimited brands</span>
                              </div>
                            </li>
                            <li>
                              <div className='flex items-stretch mb-2'>
                                <TickMark /> <span className='ml-2 '>Advanced dashboard</span>
                              </div>
                            </li>
                            <li>
                              <div className='flex items-stretch mb-2'>
                                <TickMark /> <span className='ml-2 '>All components included</span>
                              </div>
                            </li>
                            <li>
                              <div className='flex items-stretch mb-2'>
                                <TickMark /> <span className='ml-2 '>Advanced insight</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className='mt-6'>
                          <Button
                            buttonText='Choose Reconmended'
                            classes='px-4 w-full'
                            height='h-10'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/3 bg-onboard-card-bg h-auto'>
                    <div className='pt-10 pl-7 pr-7'>
                      <span className='text-3xl'>$2999</span>{' '}
                      <span className='text-sm font-sans text-bt-daintree'>/month</span>
                      <div className='pt-5 pb-5'>
                        <div className=''>
                          <p className='text-xl'>Premium</p>
                        </div>
                        <div className='text-sm text-bt-daintree mt-3'>
                          Advanced features for pros who need more customization.
                        </div>
                        <div className='mt-5'>
                          <ul>
                            <li>
                              <div className='flex items-stretch mb-2'>
                                <TickMark /> <span className='ml-2 '>Unlimited brands</span>
                              </div>
                            </li>
                            <li>
                              <div className='flex items-stretch mb-2'>
                                <TickMark /> <span className='ml-2'>Advanced dashboard</span>
                              </div>
                            </li>
                            <li>
                              <div className='flex items-stretch mb-2'>
                                <TickMark /> <span className='ml-2'>Mutlivariate components</span>
                              </div>
                            </li>
                            <li>
                              <div className='flex items-stretch mb-2'>
                                <TickMark /> <span className='ml-2'>Phone Support</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className='mt-12'>
                          <DarkButton buttonText='Choose' classes='px-8 w-full h-10' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                  <Button
                    buttonText='Skip and go to the dashbaord'
                    onClick={goToNext}
                    classes='px-8 mt-6'
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </OnboardPageLayout>
  );
};

export default OnboardChoosePackage;
