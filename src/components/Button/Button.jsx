import React from 'react';
import { ButtonStyle } from './Button';

const Button = ({ size, text }) => {
  return <ButtonStyle size={size}>{text}</ButtonStyle>;
};

export default Button;
