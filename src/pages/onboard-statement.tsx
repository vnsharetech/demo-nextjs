import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import OnboardPageLayout from '../layouts/onboard-page-layout';
import BrainIcon from '../components/icons/brain';
import InputField from '../components/Global/input-field';
import OnboardFooter from '../components/onboard-components/onboard-footer';
import StatementWord from '../components/onboard-components/statement-word';
import Completed from '../components/icons/onboarding/completed';
import Inprogress from '../components/icons/onboarding/inprogress';
import CommingDark from '../components/icons/onboarding/coming-dark';
import CommingLight from '../components/icons/onboarding/coming-light';
import AddCircleBtn from '../components/icons/onboarding/add-circle-btn';

const OnboardStatement: React.FC = () => {
  let [statement, setStatement] = useState<string>('');
  let [statementValid, setStatementValid] = useState<boolean>(false);
  const [statementWords, setStatementWords] = useState([
    {
      name: 'Our brand is powerful',
      selected: true,
    },
    {
      name: 'Our brand is powerful and sophisticated',
      selected: true,
    },
    {
      name: 'Our brand Is creative & magical',
      selected: true,
    },
    {
      name: 'Our brand has a mascot',
      selected: false,
    },
    {
      name: 'Our Brand Is Playful',
      selected: false,
    },
    {
      name: 'Our brand apeals to teens',
      selected: false,
    },
    {
      name: 'Our brand is cool',
      selected: false,
    },
    {
      name: 'Our brand has volicity and synergy',
      selected: false,
    },
    {
      name: 'Our brand has a mascot',
      selected: false,
    },
    {
      name: 'Our Brand Is Playful',
      selected: false,
    },
    {
      name: 'Our brand apeals to teens',
      selected: false,
    },
    {
      name: 'Our brand is cool',
      selected: false,
    },
  ]);

  const changeStatement = (e: any) => {
    setStatement((statement = e.target.value));
  };

  const addNewStatement = () => {
    if (statement) {
      setStatementWords([...statementWords, { name: statement, selected: false }]);
      setStatement('');
    }
  };

  return (
    <OnboardPageLayout>
      <div className='min-h-screen'>
        <OnboardFooter step={4} />

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
                    Let’s create your Choice Statements
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
                    1 - Launch - Choice Statement
                  </button>

                  <div
                    className='lg:w-video-card-width w-full p-8 flex flex-wrap mx-auto'
                    style={{ background: '#D8E0ED' }}>
                    <div className='w-full'>
                      <BrainIcon />
                    </div>
                    <div className='w-full my-2'>
                      <p className='text-lg font-tiemposHeadline text-bt-daintree'>
                        Lastly we will define your choice statements today. Let’s get started.
                      </p>
                    </div>
                    <div className='w-full'>
                      <p className='text-sm font-sans text-bt-daintree'>
                        Choice Statements are an easy way to talk through your mission statements
                        and what is important to you as a company. We will go through this activitiy
                        by pressing on statements that you like!
                      </p>
                    </div>
                  </div>
                  <div
                    className='lg:w-video-card-width w-full px-10 pt-5 mx-auto flex flex-wrap'
                    style={{ background: '#E5EBF5' }}>
                    <div className='w-full mb-4'>
                      <h1 className='text-xl text-bt-daintree font-tiemposHeadline'>
                        Choose the best words that speak to your company.
                      </h1>
                    </div>
                    <div className='w-full'>
                      <div className='w-full flex flex-wrap items-center'>
                        <div className='lg:w-1/2 w-full mb-5'>
                          <p className='font-sans font-semibold text-xs mb-2'>
                            Add another Statement
                          </p>
                        </div>
                        <div className='flex  md:inline-flex w-full'>
                          <div className='flex-1 md:inline-flex mb-5'>
                            <InputField
                              label='Want to add a word or statement? Add here:'
                              inputType='text'
                              placeHolder='Use 80 Characters or less'
                              onChange={changeStatement}
                              value={statement}
                              isValueValid={statementValid}
                            />
                            <div className='flex-1 mt-7 ml-3'>
                              <button onClick={addNewStatement}>
                                <AddCircleBtn />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className='lg:w-1/2 w-full mb-5'>
                          <p className='font-sans font-semibold text-xs mb-2 '>
                            Choose up to 10 words
                          </p>
                        </div>
                        <div className='flex flex-wrap pb-5'>
                          {statementWords.map((value) => {
                            return (
                              <>
                                <StatementWord word={value} />
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
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
                        <Inprogress />
                      </div>{' '}
                      <div className='text-bt-cerulean mt-2 ml-4'>Goals</div>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-stretch'>
                      <div className='ml-3 mt-2'>
                        <Inprogress />
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

export default OnboardStatement;
