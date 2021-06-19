import React from 'react';
import Button from '../Global/Button';
import LeftArrow from '../icons/left-arrow';
import { useRouter } from 'next/router';

type Props = {
  step: number;
};

const OnboardFooter: React.FC<Props> = ({ step }) => {
  const router = useRouter();

  const goToDash = () => {
    console.log({ step });
    step = step - 1;
    navigate(step);
  };

  const goToNext = () => {
    step = step + 1;
    navigate(step);
  };

  const navigate = (step) => {
    console.log({ step });
    if (step === 1) {
      router.push('/onboard-welcome');
    } else if (step === 2) {
      router.push('/onboard-launch');
    } else if (step === 3) {
      router.push('/onboard-goal');
    }
    // else if (step === 4) {
    //   router.push('/onboard-statement');
    // }
    else if (step === 4) {
      router.push('/onboard-factor');
    } else if (step === 5) {
      router.push('/onboard-factor-invite');
    } else if (step === 6) {
      router.push('/onboard-explaining');
    } else if (step === 7) {
      router.push('/onboard-driver-invite');
    } else if (step === 8) {
      router.push('/onboard-setting-up');
    } else {
      return;
    }
  };

  return (
    <>
      <div className='lg:w-2/3 w-full flex justify-between bg-white items-center h-20 fixed left-0 bottom-0 px-5 z-50'>
        <button
          className='flex items-center text-sm bg-transparent outline-none focus:outline-none text-bt-daintree opacity-40'
          onClick={goToDash}>
          <LeftArrow />
          <span className='ml-3'>Back</span>
        </button>

        <Button buttonText='Continue & Start to Define' classes='px-8' onClick={goToNext} />
      </div>
    </>
  );
};

export default OnboardFooter;
