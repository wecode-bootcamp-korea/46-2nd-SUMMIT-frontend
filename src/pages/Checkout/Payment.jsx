import React from 'react';
import * as S from './Checkout';

export const Payment = () => {
  const PAYMENT = [
    { title: '티켓금액', content: '80,000원' },
    { title: '포인트', content: '-5,000P' },
    { title: '수수료', content: '17:00' },
    { title: '총결제금액', content: '75,000원' },
  ];
  return (
    <>
      {PAYMENT.map(({ title, content }) => {
        return (
          <S.InfBox key={title}>
            <S.InfTitle title="first">{title}</S.InfTitle>
            <S.InfTitle>{content}</S.InfTitle>
          </S.InfBox>
        );
      })}
    </>
  );
};
