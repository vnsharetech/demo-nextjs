import * as t from '../types';

export const updateSignupSteps = (step: number) => ({
  type: t.UPDATE_SIGNUP_STEPS,
  payload: step,
});

export const updateSignupFirstname = (firstName: string) => ({
  type: t.CHANGE_SIGNUP_FIRSTNAME,
  payload: firstName,
});

export const updateFirstNameValidation = (validation: boolean) => ({
  type: t.CHANGE_SIGNUP_FIRSTNAME_VALIDATION,
  payload: validation,
});

export const updateSignupLastname = (lastName: string) => ({
  type: t.CHANGE_SIGNUP_LASTNAME,
  payload: lastName,
});

export const updateLastNameValidation = (validation: boolean) => ({
  type: t.CHANGE_SIGNUP_LASTNAME_VALIDATION,
  payload: validation,
});

export const updateSignupEmail = (email: string) => ({
  type: t.CHANGE_SIGNUP_EMAIL,
  payload: email,
});

export const updateEmailValidation = (validation: boolean) => ({
  type: t.CHANGE_SIGNUP_EMAIL_VALIDATION,
  payload: validation,
});

export const updateSignupPassword = (password: string) => ({
  type: t.CHANGE_SIGNUP_PASSWORD,
  payload: password,
});

export const updatePasswordValidation = (validation: boolean) => ({
  type: t.CHANAGE_SIGNUP_PASSWORD_VALIDATION,
  payload: validation,
});

export const updateSignupCompanyName = (name: string) => ({
  type: t.CHANGE_SIGNUP_COMPANYNAME,
  payload: name,
});

export const updateCompanyNameValidation = (validation: boolean) => ({
  type: t.CHANGE_SIGNUP_COMPANYNAME_VALIDATION,
  payload: validation,
});

export const updateSignupCompanyWebsite = (website: string) => ({
  type: t.CHANGE_SIGNUP_COMPANYWEBSITE,
  payload: website,
});

export const updateCompanyWebsiteValidation = (validation: boolean) => ({
  type: t.CHANGE_SIGNUP_COMPANYWEBSITE_VALIDATION,
  payload: validation,
});

export const updateCreditCardOption = (isSelected: boolean) => ({
  type: t.CHANGE_SIGNUP_CREDITCARD_OPTION,
  payload: isSelected,
});

export const updatePaypalOption = (isSelected: boolean) => ({
  type: t.CHANGE_SIGNUP_PAYPAL_OPTION,
  payload: isSelected,
});

export const updateSignupCardNumber = (number: string) => ({
  type: t.CHANGE_SIGNUP_CARDNUMBER,
  payload: number,
});

export const updateSignupCardNumberValidation = (validation: boolean) => ({
  type: t.CHANGE_SIGNUP_CARDNUMBER_VALIDATION,
  payload: validation,
});

export const updateSignupCardExpiry = (expiry: string) => ({
  type: t.CHANGE_SIGNUP_CARDEXPIRY,
  payload: expiry,
});

export const updateSignupCardExpiryValidation = (validation: boolean) => ({
  type: t.CHANGE_SIGNUP_CARDEXPIRY_VALIDATION,
  payload: validation,
});

export const updateSignupCardCvc = (cvc: string) => ({
  type: t.CHANGE_SIGNUP_CARDCVC,
  payload: cvc,
});

export const updateSignupCardCvcValidation = (validation: boolean) => ({
  type: t.CHANGE_SIGNUP_CARDCVC_VALIDATION,
  payload: validation,
});
