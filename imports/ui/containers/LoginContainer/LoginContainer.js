import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Login from '../../components/Login';
import { actions } from '../../reducers/auth/auth';

const validate = (values) => {
  const errors = {};
  if (!values.email || values.email === '') {
    errors.email = 'Required email';
  }
  if (!values.password) {
    errors.password = 'Required password';
  } else if (values.password.length < 6) {
    errors.password = 'Password length must greater than 6';
  }
  return errors;
};

const mapStateToProps = ({ auth }) => ({
  isLogIning: auth.get('isLogIning'),
  logInError: auth.get('logInError')
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(actions.login())
});


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  validate,
  form: 'login'
})(Login));

export default LoginContainer;
