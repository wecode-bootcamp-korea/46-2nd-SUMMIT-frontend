import React from 'react';
import { ButtonStyle } from './Button';

const Button = ({ size, text, onClick }) => {
  return (
    <ButtonStyle size={size} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
};

export default Button;
