import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIS } from '../../../config.js';
import { LoginPage } from '../Login';

const Oauth = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/oauth';

  useEffect(() => {
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          fetch(APIS.login, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              Authorization: data.access_token,
            },
          })
            .then(res => res.json())
            .then(res => {
              if (res.token) {
                localStorage.setItem('token', res.token);
                navigate('/');
              }
            });
        }
      });
  }, []);

  return <LoginPage />;
};

export default Oauth;
