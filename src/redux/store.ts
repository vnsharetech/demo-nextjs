import { createStore, Store } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import rootReducer from './reducers/rootReducer';

export interface State {
  tick: string;
}

const store = createStore(rootReducer);
export default store;
