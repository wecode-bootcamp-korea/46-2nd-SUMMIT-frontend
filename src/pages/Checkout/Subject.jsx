import React from 'react';
import * as S from './Checkout';
import { useRecoilState } from 'recoil';
import checkoutInfoState from '../../atom.js';
import { ReservationAtom } from '../../Recoil/ReservationAtom.jsx';

export const Subject = () => {
  const checkoutInfo = useRecoilState(checkoutInfoState);
  const reservationData = useRecoilState(ReservationAtom);

  const SUBJECT = [
    { title: '공연명', content: checkoutInfo[0].title },
    { title: '예매날짜', content: reservationData[0].date },
    { title: '예매시간', content: reservationData[0].time },
    {
      title: '예매좌석',
      content: `VIP석 ${
        checkoutInfo[0].grade === 'VIP석'
          ? `${checkoutInfo[0].selectedTicket}석`
          : '0석'
      } R석 ${
        checkoutInfo[0].grade === 'R석'
          ? `${checkoutInfo[0].selectedTicket}석`
          : '0석'
      } S석 ${
        checkoutInfo[0].grade === 'S석'
          ? `${checkoutInfo[0].selectedTicket}석`
          : '0석'
      }`,
    },

    {
      title: '좌석가격',
      content:
        checkoutInfo[0].totalPrice !== undefined
          ? `${checkoutInfo[0].totalPrice.toLocaleString()}원`
          : '0원',
    },
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
