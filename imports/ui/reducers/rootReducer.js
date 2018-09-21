import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth/auth';

const rootReducer = combineReducers({
  form,
  auth
});

export default rootReducer;
