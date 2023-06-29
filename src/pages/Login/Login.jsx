import React from 'react';

import { LoginPage, LoginContainer, MainTitle, Description } from './Login';

const Login = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/oauth';
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <LoginPage>
      <LoginContainer>
        <MainTitle>로그인</MainTitle>
        <Description>
          Search Ur Musical <br />
        </Description>
        <a href={KAKAO_AUTH_URI}>
          <img src="image/KakaoBtn.png" alt="KakaoLoginBtn" />
        </a>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;
