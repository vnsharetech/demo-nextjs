import * as t from '../onboardingTypes';

interface ActionStructure {
  type: string | number;
  payload: any;
}

const onboarding = (
  state = {
    onboardSteps: 1,
  },
  action: ActionStructure
) => {
  switch (action.type) {
    case t.UPDATE_ONBOARD_STEPS:
      return {
        ...state,
        onboardSteps: action.payload,
      };

    default:
      return state;
  }
};

export default onboarding;
