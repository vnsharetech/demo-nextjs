import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import OnboardPageLayout from '../layouts/onboard-page-layout';
import BrainIcon from '../components/icons/brain';
import InputField from '../components/Global/input-field';
import OnboardFooter from '../components/onboard-components/onboard-footer';
import Completed from '../components/icons/onboarding/completed';
import Inprogress from '../components/icons/onboarding/inprogress';
import Comming from '../components/icons/onboarding/coming';
import CommingDark from '../components/icons/onboarding/coming-dark';
import CommingLight from '../components/icons/onboarding/coming-light';
import DarkButton from '../components/Global/DarkButton';
import CrossIcon from '../components/icons/cross-icon';
import UploadIcon from '../components/icons/upload-icon';

const OnboardDriverInvite: React.FC = () => {
  const [name, setName] = useState<string>('');
  let [nameValid, setNameValid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  let [emailValid, setEmailValid] = useState<boolean>(false);
  const [profile, setProfile] = useState<string>('');

  const [participants, setParticipants] = useState<any>([]);

  const changeName = (e: any) => {
    setName(e.target.value);
    if (e.target.value) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const changeEmail = (e: any) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const changeProfile = (e: any) => {};

  const addParticipant = () => {
    if (email && email) {
      let participant = {
        name,
        email,
      };
      setParticipants([...participants, participant]);
      setName('');
      setEmail('');
      setEmailValid(false);
      setNameValid(false);
    }
  };

  const deletePeople = (email: string) => {
    let filtered = participants.filter((item) => {
      return item.email !== email;
    });
    setParticipants(filtered);
  };

  return (
    <OnboardPageLayout>
      <div className='min-h-screen'>
        <OnboardFooter step={7} />

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
                    Invite People to take the Driver Survey
                  </h1>
                </div>
                <div className='w-full'>
                  <button
                    className='h-11 flex items-center lg:w-video-card-width w-full mx-auto outline-none focus:outline-none font-thin text-white bg-bt-red px-6 font-sans uppercase text-sm'
                    style={{ letterSpacing: '.2em' }}>
                    3 - Invite others
                  </button>
                  <div
                    className='lg:w-video-card-width w-full p-8 flex flex-wrap mx-auto'
                    style={{ background: '#D8E0ED' }}>
                    <div className='w-full'>
                      <BrainIcon />
                    </div>
                    <div className='w-full my-2'>
                      <p className='text-lg font-tiemposHeadline text-bt-daintree'>
                        Inviting others for the Driver Survery
                      </p>
                    </div>
                    <div className='w-full'>
                      <p className='text-sm font-sans text-bt-daintree'>
                        The driver survey is a 200 question survey that goes through five factors,
                        Openness, Extroversion, Nepotism, Psycological Buckets. and Factors that
                        others will take about the brand
                      </p>
                    </div>
                  </div>

                  <div
                    className='lg:w-video-card-width w-full px-10 pt-5 mx-auto flex flex-wrap'
                    style={{ background: '#E5EBF5' }}>
                    <div className='w-1/2 mb-4'>
                      <h1 className='text-xl text-bt-daintree font-tiemposHeadline'>
                        Your Current Settings
                      </h1>
                    </div>
                    <div className='w-1/2 mb-4'>
                      <h1 className='text-xl text-bt-daintree font-tiemposHeadline'>
                        Invite another user to take the Sriver Survey
                      </h1>
                    </div>
                    <div className='w-full'>
                      <div className='w-full flex flex-wrap '>
                        <div className='lg:w-1/2 w-full'>
                          <p className='font-sans font-semibold text-xs mb-2'>
                            Number of Users Invited
                          </p>
                          {participants.map((value) => {
                            return (
                              <>
                                <div className='lg:w-1/1 w-full mb-4 flex items-stretch'>
                                  <div className='w-1/5'>
                                    <img
                                      src='https://qph.fs.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b'
                                      alt=''
                                      className='w-10 h-10 rounded-full'
                                    />
                                  </div>
                                  <div className='w-4/5'>
                                    <p className='font-sans font-light text-bt-daintree flex items-stretch'>
                                      {value.name}
                                      <button onClick={() => deletePeople(value.email)}>
                                        <span
                                          style={{ fontSize: '8px' }}
                                          className='ml-2 mt-1 flex items-stretch'>
                                          <CrossIcon /> <span className='ml-1'>Delete</span>
                                        </span>
                                      </button>
                                    </p>
                                    <span className='font-sans font-light text-bt-daintree text-sm'>
                                      {value.email}
                                    </span>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </div>

                        <div className='lg:w-1/2 w-full mb-5'>
                          <div>
                            <InputField
                              label='Participant’s Name'
                              inputType='text'
                              onChange={changeName}
                              value={name}
                              isValueValid={nameValid}
                            />
                          </div>
                          <div className='mt-2'>
                            <InputField
                              label='Participant’s Email'
                              inputType='text'
                              onChange={changeEmail}
                              value={email}
                              isValueValid={emailValid}
                              placeHolder='Email'
                            />
                          </div>
                          <div className='mt-2'>
                            <InputField inputType='text' onChange={changeProfile} value={profile} />
                          </div>
                          <div className='mt-2'>
                            <DarkButton
                              buttonText='Add Participant'
                              onClick={addParticipant}
                              classes='px-8 w-full h-55'
                            />
                          </div>
                        </div>

                        <div className='w-3/5 mb-4'>
                          <h1 className='text-xl text-bt-daintree font-tiemposHeadline'>
                            Have more than 10 Team Members?
                          </h1>
                          <p className='font-sans font-semibold text-xs mb-2 mt-4'>
                            Upload Bulk CSV file.{' '}
                            <span className='underline text-bt-cerulean'>
                              Download CSV Template
                            </span>
                          </p>
                        </div>
                        <div className='w-2/5 mb-4'>
                          <DarkButton
                            buttonText='Upload your CSV File'
                            icon={<UploadIcon />}
                            classes='px-8 w-full h-55'
                          />
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

export default OnboardDriverInvite;
