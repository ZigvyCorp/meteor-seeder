import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormError, FormInput } from '../Elements';
import { ElementFormSignInStyled, SignInActionStyled, SignInGeneralStyled } from './styles';

class Login extends React.PureComponent { // eslint-disable-line

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    logInError: PropTypes.objectOf(PropTypes.any),
    // history: PropTypes.objectOf(PropTypes.any).isRequired,
    isLogIning: PropTypes.bool
  };

  static defaultProps = {
    isLogIning: false,
    logInError: null
  };

  checkUserLogin = (user) => {
    if (!user) return false;
    const emailVerifiedId = user.emails.findIndex(item => item.verified);
    return emailVerifiedId !== -1;
  };

  submit = () => {
    // print the form values to the console
    const { login } = this.props;
    if (login) {
      login();
    }
  };

  render() {
    const { handleSubmit, isLogIning, logInError } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <SignInGeneralStyled>
          <ElementFormSignInStyled>
            <FormInput
              name="email"
              type="text"
              placeholder="Email..."
              inputSize={{ large: true }}
            />
          </ElementFormSignInStyled>
          <ElementFormSignInStyled>
            <FormInput
              name="password"
              placeholder="Password..."
              type="password"
            />
          </ElementFormSignInStyled>
          {logInError && (
            <FormError
              style={{
                'margin-bottom': '10px'
              }}
            >
              {logInError.message}
            </FormError>
          )}
          <SignInActionStyled>
            {isLogIning
              ? <span>Loading...</span>
              : <span>Log me in</span>}
          </SignInActionStyled>
          <Link to="/signup">Forgot your password?</Link>
        </SignInGeneralStyled>
      </form>
    );
  }
}

export default Login;
