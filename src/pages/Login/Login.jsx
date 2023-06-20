import React from 'react';

import {
  LoginPage,
  LoginContainer,
  MainTitle,
  Description,
  LoginLinkBtn,
} from './Login';

const Login = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/oauth';
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <LoginPage>
      <LoginContainer>
        <MainTitle>로그인</MainTitle>
        <Description>Search Ur Musical in SUM</Description>
        <a href={KAKAO_AUTH_URI}>
          <LoginLinkBtn>카카오톡 간편 로그인</LoginLinkBtn>
        </a>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;
