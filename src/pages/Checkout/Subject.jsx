import React from 'react';
import * as S from './Checkout';

export const Subject = () => {
  const SUBJECT = [
    { title: '공연명', content: '레미제라블' },
    { title: '예매날짜', content: '2023-06-01' },
    { title: '예매시간', content: '17:00' },
    { title: '좌석등급', content: 'R석' },
    { title: '좌석가격', content: '80,000원' },
  ];
  return (
    <>
      {SUBJECT.map(({ title, content }) => {
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
