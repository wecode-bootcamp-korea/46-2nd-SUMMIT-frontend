import React from 'react';
import * as S from './Checkout';

export const Payment = ({ isClickUseBtn, point }) => {
  const charge = 1000;
  const ticketPrice = 80000;
  const totalPayment = ticketPrice - point + charge;
  const PAYMENT = [
    { title: '티켓금액', content: `${ticketPrice}원` },
    { title: '포인트사용', content: `- ${point}P` },
    { title: '수수료', content: `${charge}원` },
    { title: '총결제금액', content: `${totalPayment}원` },
  ];
  return (
    <>
      {PAYMENT.map(({ title, content }) => {
        return (
          <S.InfBox key={title}>
            <S.InfTitle title="first">{title}</S.InfTitle>
            {['티켓금액', '수수료'].includes(title) && (
              <S.InfTitle>{content}</S.InfTitle>
            )}

            {['포인트사용', '총결제금액'].includes(title) && (
              <S.InfTitle>{isClickUseBtn ? content : 0}</S.InfTitle>
            )}
          </S.InfBox>
        );
      })}
    </>
  );
};
