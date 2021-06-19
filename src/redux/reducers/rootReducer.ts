import { combineReducers } from 'redux';
import main from './main';
import onboarding from './onboarding';

const rootReducer = combineReducers({
  store: main,
  onboarding,
});

export default rootReducer;
