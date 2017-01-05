import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import counter from './counter_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  counter
});

export default rootReducer;