import { get } from 'lodash';
import { Meteor } from 'meteor/meteor';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { history } from '../../startup/client/routes';
import { ACTION_TYPES, actions } from '../reducers/auth/auth';

// export const getAuthFromState = state => state.auth;

const getLogInForm = ({ form }) => get(form, ['login', 'values'])
  || ({
    email: null,
    password: null
  });

const loginPromise = (email, password) => (
  new Promise((resolve, reject) => {
    Meteor.loginWithPassword({ email }, password, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
        // const user = Meteor.user();
        // const { emails = [] } = user;
        // const emailVerifiedId = emails.findIndex(item => item.verified);
        // if (emailVerifiedId === -1) {
        //   reject(new Error('Please verify your email'));
        // } else {
        //   resolve(true);
        // }
      }
    });
  })
);

function* logInFunction() {
  const { email, password } = yield select(getLogInForm);
  if (Meteor.userId()) {
    // Already logged in
    yield ('Does nothing');
  } else {
    try {
      yield call(loginPromise, email, password);
      yield put(actions.logInSuccess());
      // go to home page
      history.push('/');
    } catch (error) {
      yield put(actions.logInFailure(error));
    }
  }
}

// export function* checkAuth() {
//   // If user isn't authenticated, we should navigate to the login page
//   const authData = yield select(getAuthFromState);
//
//   if (!authData.token || !authData.secret_key) {
//     const reset = NavigationActions.reset({
//       index: 0,
//       actions: [
//         NavigationActions.navigate({ routeName: 'LoginContainer' }),
//       ],
//     });
//     yield put(reset);
//   }
// }

export default function* authFlow() {
  yield takeEvery(ACTION_TYPES.LOGIN, logInFunction);
  // yield all([
  //   checkAuth()
  // ]);
}
