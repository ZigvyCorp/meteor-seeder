import React from 'react';
import LoginContainer from '../../containers/LoginContainer';
import { LoginContentWrapper, TopBanner, TopBannerText } from './styles';

const LoginPage = () => (
  <LoginContentWrapper>
    <TopBanner>
      <TopBannerText>
        Login
      </TopBannerText>
    </TopBanner>
    <LoginContainer />
  </LoginContentWrapper>
);

export default LoginPage;
