import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

* {
  ${reset}
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif ;
}

  body{
    font-family: 'Noto Sans KR', sans-serif ;
  }
  align-self: start;
  a{
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
