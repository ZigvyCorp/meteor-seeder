import { Map } from 'immutable';

export const LOGIN = 'user/LOGIN';
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'user/LOGIN_FAILURE';
export const LOGOUT = 'user/LOGOUT';

export const ACTION_TYPES = {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
};

const login = () => ({
  type: LOGIN
});

const logInSuccess = () => ({
  type: LOGIN_SUCCESS
});

const logInFailure = error => ({
  type: LOGIN_FAILURE,
  error
});

const initialState = new Map({
  isLogIning: false,
  isLoggedIn: false,
  logInError: null
});

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return state
        .set('isLogIning', true)
        .set('logInError', null);
    case ACTION_TYPES.LOGIN_SUCCESS:
      return state
        .set('isLogIning', false)
        .set('isLoggedIn', true);
    case ACTION_TYPES.LOGIN_FAILURE:
      return state
        .set('isLogIning', false)
        .set('isLoggedIn', false)
        .set('logInError', action.error);
    default:
      return state;
  }
};

export const actions = {
  login,
  logInSuccess,
  logInFailure
};

export default AuthReducer;
