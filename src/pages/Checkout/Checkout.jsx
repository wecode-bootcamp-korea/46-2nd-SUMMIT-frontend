import React, { useState } from 'react';
import * as S from './Checkout';
import { Subject } from './Subject.jsx';
import { Payment } from './Payment.jsx';
import TermList from './TermList.jsx';
import Button from '../../components/Button/Button.jsx';

const Checkout = () => {
  const [checked, setChecked] = useState('');
  const [point, setPoint] = useState(0);
  const [isClickUseBtn, setIsClickUseBtn] = useState(false);
  const currentPoint = isClickUseBtn ? 100000 - point : 100000;

  const handleCheck = checkBoxNum => {
    setChecked(checkBoxNum);
  };

  return (
    <S.Page title="checkout">
      <S.Title size="big">결제하기</S.Title>
      <S.Title>예매정보</S.Title>
      <Subject />
      <S.Title>티켓수령방법</S.Title>
      <S.InfBox>
        <S.CheckBox
          checked={checked === 'checkBoxOne'}
          onChange={() => {
            handleCheck('checkBoxOne');
          }}
        />
        <S.TicketCheck>현장수령</S.TicketCheck>
        <S.CheckBox
          checked={checked === 'checkBoxTwo'}
          onChange={() => {
            handleCheck('checkBoxTwo');
          }}
        />
        <S.TicketCheck>Email</S.TicketCheck>
      </S.InfBox>
      <S.Title>결제수단</S.Title>
      <S.InfBox>
        <S.InfTitle title="first">포인트</S.InfTitle>
        <S.PointInput
          onChange={e => {
            setPoint(e.target.value);
            setIsClickUseBtn(false);
          }}
        />
        <S.AgreeBtn
          type="point"
          onClick={() => {
            setIsClickUseBtn(true);
          }}
        >
          사용
        </S.AgreeBtn>
        <S.InfTitle> (잔여포인트: {currentPoint}P)</S.InfTitle>
      </S.InfBox>
      <S.InfBox>
        <S.CheckBox />
        <S.InfTitle>카카오페이</S.InfTitle>
      </S.InfBox>
      <S.Title>결제금액</S.Title>
      <Payment point={point} isClickUseBtn={isClickUseBtn} />
      <S.Title>이용동의</S.Title>
      <TermList />
      <S.Flex>
        <Button size="medium" text="결제하기" />
      </S.Flex>
    </S.Page>
  );
};

export default Checkout;
