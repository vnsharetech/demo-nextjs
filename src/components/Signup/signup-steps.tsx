import React, { useState } from 'react';
import { connect } from 'react-redux';
import LeftArrow from '../icons/left-arrow';
import Button from '../global/button';
import cn from 'classnames';
import { useRouter } from 'next/router';
import InputField from '../global/input-field';
import CheckInput from '../global/check-input';
import * as actions from '../../redux/actions/main';

interface CPFromRedux {
  store: {
    signupSteps: number;
    signupInfo: {
      firstName: string;
      firstNameValid: boolean;
      lastName: string;
      lastNameValid: boolean;
      email: string;
      emailValid: boolean;
      password: string;
      passwordValid: boolean;
      companyName: string;
      companyNameValid: boolean;
      companyWebsite: string;
      companyWebsiteValid: boolean;
      creditCardOption: boolean;
      paypalOption: boolean;
      cardNumber: string;
      cardNumberValid: boolean;
      cardExpiry: string;
      cardExpiryValid: boolean;
      cardCVC: string;
      cardCVCValid: boolean;
    };
  };
}

type Props = {
  step: number;
  firstName: string;
  firstNameValid: boolean;
  lastName: string;
  lastNameValid: boolean;
  email: string;
  emailValid: boolean;
  password: string;
  passwordValid: boolean;
  companyName: string;
  companyNameValid: boolean;
  companyWebsite: string;
  companyWebsiteValid: boolean;
  creditCardOption: boolean;
  paypalOption: boolean;
  cardNumber: string;
  cardNumberValid: boolean;
  cardExpiry: string;
  cardExpiryValid: boolean;
  cardCVC: string;
  cardCVCValid: boolean;
  changeStep: (step: number) => void;
  changeFirstName: (firstName: string) => void;
  changeFirstnameValid: (validation: boolean) => void;
  changeLastName: (lastName: string) => void;
  changeLastNameValid: (validation: boolean) => void;
  changeEmail: (email: string) => void;
  changeEmailValid: (validation: boolean) => void;
  changePassword: (password: string) => void;
  changePasswordValid: (validation: boolean) => void;
  changeCompanyName: (name: string) => void;
  changeCompanyNameValid: (validation: boolean) => void;
  changeCompanyWebsite: (website: string) => void;
  changeCompanyWebsiteValid: (validation: boolean) => void;
  changeCreditCard: (isSelected: boolean) => void;
  changePaypal: (isSelected: boolean) => void;
  changeCardNumber: (number: string) => void;
  changeCardNumberValid: (validation: boolean) => void;
  changeCardExpiry: (expiry: string) => void;
  changeCardExpiryValid: (validation: boolean) => void;
  changeCardCVC: (cvc: string) => void;
  changeCardCVCValid: (validation: boolean) => void;
};

const SignupSteps: React.FC<Props> = ({
  step,
  firstName,
  firstNameValid,
  lastName,
  lastNameValid,
  email,
  emailValid,
  password,
  passwordValid,
  companyName,
  companyNameValid,
  companyWebsite,
  creditCardOption,
  paypalOption,
  cardNumber,
  cardNumberValid,
  cardExpiry,
  cardExpiryValid,
  cardCVC,
  cardCVCValid,
  changeStep,
  changeCompanyWebsiteValid,
  changeCompanyName,
  changeCompanyNameValid,
  changeCompanyWebsite,
  companyWebsiteValid,
  changeFirstName,
  changeFirstnameValid,
  changeLastName,
  changeLastNameValid,
  changeEmail,
  changeEmailValid,
  changePassword,
  changePasswordValid,
  changeCreditCard,
  changePaypal,
  changeCardNumber,
  changeCardExpiry,
  changeCardCVC,
  changeCardNumberValid,
  changeCardExpiryValid,
  changeCardCVCValid,
}) => {
  const app = useRouter();

  const increaseStep = () => {
    let stepToIncrease = step;
    changeStep(stepToIncrease + 1);
  };

  const decreaseStep = () => {
    let stepToDecrease = step;
    if (step === 1) {
      app.push('/');
    } else {
      changeStep(stepToDecrease - 1);
    }
  };

  const alterFirstName = (e: any) => {
    changeFirstName(e.target.value);

    if (e.target.value === '') {
      changeFirstnameValid(false);
    } else {
      changeFirstnameValid(true);
    }
  };

  const alterLastName = (e: any) => {
    changeLastName(e.target.value);

    if (e.target.value === '') {
      changeLastNameValid(false);
    } else {
      changeLastNameValid(true);
    }
  };

  const alterEmail = (e: any) => {
    changeEmail(e.target.value);

    if (e.target.value === '') {
      changeEmailValid(false);
    } else {
      changeEmailValid(true);
    }
  };

  const alterPassword = (e: any) => {
    changePassword(e.target.value);

    if (e.target.value === '') {
      changePasswordValid(false);
    } else {
      changePasswordValid(true);
    }
  };

  const alterCompanyName = (e: any) => {
    changeCompanyName(e.target.value);

    if (e.target.value === '') {
      changeCompanyNameValid(false);
    } else {
      changeCompanyNameValid(true);
    }
  };

  const alterCompanyWebsite = (e: any) => {
    changeCompanyWebsite(e.target.value);

    if (e.target.value === '') {
      changeCompanyWebsiteValid(false);
    } else {
      changeCompanyWebsiteValid(true);
    }
  };

  const alterCard = (e: any) => {
    changeCardNumber(e.target.valud);

    if (e.target.value === '') {
      changeCardNumberValid(false);
    } else {
      changeCardNumberValid(true);
    }
  };

  const changeExpiry = (e: any) => {
    changeCardExpiry(e.target.value);

    if (e.target.value === '') {
      changeCardExpiryValid(false);
    } else {
      changeCardExpiryValid(true);
    }
  };

  const changeCVC = (e: any) => {
    changeCardCVC(e.target.value);

    if (e.target.value === '') {
      changeCardCVCValid(false);
    } else {
      changeCardCVCValid(true);
    }
  };

  const checkCreditCard = () => {
    changeCreditCard(true);
    changePaypal(false);
  };

  const checkPaypal = () => {
    changePaypal(true);
    changeCreditCard(false);
  };

  const renderSteps = () => {
    if (step === 1) {
      return (
        <div
          className={cn({
            hidden: step > 1,
            'flex flex-wrap': step <= 1,
          })}>
          <div className='w-full mb-5 md:w-1/2 md:pr-3 md:mb-0'>
            <InputField
              label='First Name'
              placeHolder='First Name'
              onChange={alterFirstName}
              isValueValid={firstNameValid}
              value={firstName}
              inputType='text'
            />
          </div>
          <div className='w-full md:w-1/2 md:pl-3'>
            <InputField
              label='Last Name'
              placeHolder='Last Name'
              onChange={alterLastName}
              isValueValid={lastNameValid}
              value={lastName}
              inputType='text'
            />
          </div>
          <div className='w-full my-5'>
            <InputField
              label='Your Email'
              placeHolder='Email'
              onChange={alterEmail}
              isValueValid={emailValid}
              value={email}
              inputType='email'
            />
          </div>
          <div className='w-full mb-5'>
            <InputField
              label='Set a Password'
              placeHolder='Set a Password'
              onChange={alterPassword}
              isValueValid={passwordValid}
              value={password}
              inputType='password'
            />
          </div>
        </div>
      );
    } else if (step === 2) {
      return (
        <div
          className={cn({
            hidden: step > 2,
            'flex flex-wrap': step > 1 && step < 3,
          })}>
          <div className='w-full mb-5'>
            <InputField
              label='Company Name'
              placeHolder='Company Name'
              onChange={alterCompanyName}
              isValueValid={companyNameValid}
              value={companyName}
              inputType='text'
            />
          </div>
          <div className='w-full'>
            <InputField
              label='Company Website'
              placeHolder='Company Website'
              onChange={alterCompanyWebsite}
              isValueValid={companyWebsiteValid}
              value={companyWebsite}
              inputType='text'
            />
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={cn({
            hidden: step < 3,
            'flex flex-wrap': step >= 3,
          })}>
          <div className='w-full'>
            <CheckInput
              title='Credit card'
              subtitle='MasterCard or Vise'
              checked={creditCardOption}
              onCheck={checkCreditCard}>
              <img src='/img/icons/creditcard-icon.svg' alt='' />
            </CheckInput>
          </div>
          <div className='w-full mt-5'>
            <CheckInput
              title='Paypal'
              subtitle='Online payment'
              checked={paypalOption}
              onCheck={checkPaypal}>
              <img src='/img/icons/paypal-icon.svg' alt='' />
            </CheckInput>
          </div>
          <div className='w-full h-px my-10 bg-line'></div>
          <div className='w-full mb-5'>
            <InputField
              label='Card number'
              onChange={alterCard}
              isValueValid={cardNumberValid}
              value={cardNumber}
              inputType='text'
            />
          </div>
          <div className='w-full my-5 md:w-1/2 md:pr-3 md:my-0'>
            <InputField
              label='Expiration date'
              onChange={changeExpiry}
              isValueValid={cardExpiryValid}
              value={cardExpiry}
              inputType='text'
            />
          </div>
          <div className='w-full md:w-1/2 md:pl-3'>
            <InputField
              label='CVC/CVV'
              onChange={changeCVC}
              isValueValid={cardCVCValid}
              value={cardCVC}
              inputType='text'
            />
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className='flex flex-wrap'>
        {/* Steps Header */}
        <div className='relative w-full h-2 mb-4 rounded-md bg-grayLight'>
          <div
            className={cn('bg-bt-cerulean h-full rounded-md cool-transition', {
              'w-1/3': step === 1,
              'w-2/3': step === 2,
              'w-full': step >= 3,
            })}></div>
        </div>
        <div className='flex justify-between w-full'>
          <p className='font-sans text-xs text-bt-cerulean cool-transition md:text-base'>
            1) Create Account
          </p>
          <p
            className={cn('font-sans cool-transition md:text-base text-xs', {
              'text-bt-daintree opacity-40': step < 2,
              'text-bt-cerulean': step >= 2,
            })}>
            2) Company Details
          </p>
          <p
            className={cn('font-sans cool-transition md:text-base text-xs', {
              'text-bt-daintree opacity-40': step < 3,
              'text-bt-cerulean': step >= 3,
            })}>
            3) Billing
          </p>
        </div>
        {/* Steps Header ends */}

        {/* Steps body */}
        <div className='relative flex flex-wrap w-full my-8 cool-transition'>{renderSteps()}</div>
        {/* Steps body ends */}

        {/* Steps Footer */}
        <div className='flex items-center justify-between w-full'>
          <button
            className='flex items-center text-sm bg-transparent outline-none focus:outline-none text-bt-daintree opacity-40'
            onClick={decreaseStep}>
            <LeftArrow />
            <span className='ml-3'>Back</span>
          </button>

          <Button buttonText='Continue' classes='px-8' onClick={increaseStep} />
        </div>
        {/* Steps Footer ends */}
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  step: state.store.signupSteps,
  firstName: state.store.signupInfo.firstName,
  firstNameValid: state.store.signupInfo.firstNameValid,
  lastName: state.store.signupInfo.lastName,
  lastNameValid: state.store.signupInfo.lastNameValid,
  email: state.store.signupInfo.email,
  emailValid: state.store.signupInfo.emailValid,
  password: state.store.signupInfo.password,
  passwordValid: state.store.signupInfo.passwordValid,
  companyName: state.store.signupInfo.companyName,
  companyNameValid: state.store.signupInfo.companyNameValid,
  companyWebsite: state.store.signupInfo.companyWebsite,
  companyWebsiteValid: state.store.signupInfo.companyWebsiteValid,
  creditCardOption: state.store.signupInfo.creditCardOption,
  paypalOption: state.store.signupInfo.paypalOption,
  cardNumber: state.store.signupInfo.cardNumber,
  cardNumberValid: state.store.signupInfo.cardNumberValid,
  cardExpiry: state.store.signupInfo.cardExpiry,
  cardExpiryValid: state.store.signupInfo.cardExpiryValid,
  cardCVC: state.store.signupInfo.cardCVC,
  cardCVCValid: state.store.signupInfo.cardCVCValid,
});

const mapDispatchToProps = {
  changeStep: actions.updateSignupSteps,
  changeFirstName: actions.updateSignupFirstname,
  changeFirstnameValid: actions.updateFirstNameValidation,
  changeLastName: actions.updateSignupLastname,
  changeLastNameValid: actions.updateLastNameValidation,
  changeEmail: actions.updateSignupEmail,
  changeEmailValid: actions.updateEmailValidation,
  changePassword: actions.updateSignupPassword,
  changePasswordValid: actions.updatePasswordValidation,
  changeCompanyName: actions.updateSignupCompanyName,
  changeCompanyNameValid: actions.updateCompanyNameValidation,
  changeCompanyWebsite: actions.updateSignupCompanyWebsite,
  changeCompanyWebsiteValid: actions.updateCompanyWebsiteValidation,
  changeCreditCard: actions.updateCreditCardOption,
  changePaypal: actions.updatePaypalOption,
  changeCardNumber: actions.updateSignupCardNumber,
  changeCardNumberValid: actions.updateSignupCardNumberValidation,
  changeCardExpiry: actions.updateSignupCardExpiry,
  changeCardExpiryValid: actions.updateSignupCardExpiryValidation,
  changeCardCVC: actions.updateSignupCardCvc,
  changeCardCVCValid: actions.updateSignupCardCvcValidation,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSteps);
