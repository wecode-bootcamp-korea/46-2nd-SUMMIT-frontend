import React from 'react';
import {
  LoginPage,
  LoginContainer,
  MainTitle,
  Description,
  LoginLinkBtn,
} from './Login';

const Login = () => {
  return (
    <LoginPage>
      <LoginContainer>
        <MainTitle>로그인</MainTitle>
        <Description>Search Ur Musical in SUM</Description>
        <LoginLinkBtn>카카오톡 간편 로그인</LoginLinkBtn>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;
