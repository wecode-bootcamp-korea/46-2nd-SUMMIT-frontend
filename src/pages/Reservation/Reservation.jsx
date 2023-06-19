import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ReservationContainer,
  MainTitle,
  SubCategory,
  Category,
  CategoryTitle,
  CategoryItem,
  ButtontoCheckout,
  CategoryKey,
  CategoryValue,
} from './Reservation';
import Button from '../../components/Button/Button.jsx';
import Calendar from './Component/Calendar/Calendar.jsx';
import Checkbox from '../../components/Checkbox/Checkbox.jsx';
import { CheckboxSection } from './Reservation';

const Reservation = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const handleCheck = text => {
    setSelectedCheckbox(text);
  };
  return (
    <ReservationContainer>
      <MainTitle>일정 예약</MainTitle>
      <SubCategory>예매자 정보</SubCategory>
      <Category>
        <CategoryTitle>예매자명: </CategoryTitle>
        <CategoryItem>김개발</CategoryItem>
      </Category>
      <Category>
        <CategoryTitle>이메일 주소: </CategoryTitle>
        <CategoryItem>musicalFan@musical.com</CategoryItem>
      </Category>
      <SubCategory>예약 공연</SubCategory>
      <Category>
        <CategoryTitle>공연명: </CategoryTitle>
        <CategoryItem>뮤지컬 &#10094;오페라의 유령&#10095;</CategoryItem>
      </Category>
      <Category>
        <CategoryTitle>예매 좌석:</CategoryTitle>
        <CategoryKey>VIP석</CategoryKey>
        <CategoryValue>2석</CategoryValue>
        <CategoryKey>R석</CategoryKey>
        <CategoryValue>0석</CategoryValue>
        <CategoryKey>S석</CategoryKey>
        <CategoryValue>0석</CategoryValue>
      </Category>
      <Category>
        <CategoryTitle>좌석 가격:</CategoryTitle>
        <CategoryItem>{(190000 * 2).toLocaleString()}원</CategoryItem>
      </Category>
      <Calendar />
      <CheckboxSection>
        <Checkbox
          selectedCheckbox={selectedCheckbox}
          handleCheck={handleCheck}
          text="1회 14:00"
          type="reservation"
          detail="잔여 좌석 수: 100석"
        />
        <Checkbox
          selectedCheckbox={selectedCheckbox}
          handleCheck={handleCheck}
          text="2회 19:00"
          type="reservation"
          detail="잔여 좌석 수: 50석"
        />
      </CheckboxSection>
      <ButtontoCheckout>
        <Link to="/checkout">
          <Button size="large" text="예매하기" />
        </Link>
      </ButtontoCheckout>
    </ReservationContainer>
  );
};

export default Reservation;
