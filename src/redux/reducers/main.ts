import * as t from '../types';

interface ActionStructure {
  type: string;
  payload: any;
}

const main = (
  state = {
    signupSteps: 1,
    signupInfo: {
      firstName: '',
      firstNameValid: false,
      lastName: '',
      lastNameValid: false,
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false,
      companyName: '',
      companyNameValid: false,
      companyWebsite: '',
      companyWebsiteValid: false,
      creditCardOption: true,
      paypalOption: false,
      cardNumber: '',
      cardNumberValid: false,
      cardExpiry: '',
      cardExpiryValid: false,
      cardCVC: '',
      cardCVCValid: false,
    },
  },
  action: ActionStructure
) => {
  switch (action.type) {
    case t.UPDATE_SIGNUP_STEPS:
      return {
        ...state,
        signupSteps: action.payload,
      };

    case t.CHANGE_SIGNUP_FIRSTNAME:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          firstName: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_FIRSTNAME_VALIDATION:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          firstNameValid: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_LASTNAME:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          lastName: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_LASTNAME_VALIDATION:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          lastNameValid: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_EMAIL:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          email: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_EMAIL_VALIDATION:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          emailValid: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_PASSWORD:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          password: action.payload,
        },
      };

    case t.CHANAGE_SIGNUP_PASSWORD_VALIDATION:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          passwordValid: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_COMPANYNAME:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          companyName: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_COMPANYNAME_VALIDATION:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          companyNameValid: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_COMPANYWEBSITE:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          companyWebsite: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_COMPANYWEBSITE_VALIDATION:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          companyWebsiteValid: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_CREDITCARD_OPTION:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          creditCardOption: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_PAYPAL_OPTION:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          paypalOption: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_CARDNUMBER:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          cardNumber: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_CARDNUMBER_VALIDATION:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          cardNumberValid: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_CARDEXPIRY:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          cardExpiry: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_CARDEXPIRY_VALIDATION:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          cardExpiryValid: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_CARDCVC:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          cardCVC: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_CARDCVC_VALIDATION:
      return {
        ...state,
        signupInfo: {
          ...state.signupInfo,
          cardCVCValid: action.payload,
        },
      };

    default:
      return state;
  }
};

export default main;
