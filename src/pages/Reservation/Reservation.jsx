import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
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
  ResetBtn,
  Input,
} from './Reservation';
import Button from '../../components/Button/Button.jsx';
import Calendar from './Component/Calendar/Calendar.jsx';
import Checkbox from '../../components/Checkbox/Checkbox.jsx';
import { CheckboxSection } from './Reservation';
import { ReservationAtom } from '../../Recoil/ReservationAtom.jsx';
import checkoutInfoState from '../../atom.js';

const Reservation = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const [reservationData, setReservationData] = useRecoilState(ReservationAtom);

  const checkoutInfo = useRecoilState(checkoutInfoState);

  const handleCheck = text => {
    setSelectedCheckbox(text);
  };

  const [inputValues, setInputValues] = useState({
    email: '',
    name: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
    setReservationData(prev => ({
      ...prev,
      name: inputValues.name,
      email: inputValues.email,
    }));
  };

  return (
    <ReservationContainer>
      <MainTitle>일정 예약</MainTitle>
      <SubCategory>예매자 정보</SubCategory>
      {isSubmitted ? (
        <>
          <Category>
            <CategoryTitle>예매자명: </CategoryTitle>
            <CategoryItem>{inputValues.name}</CategoryItem>
          </Category>
          <Category>
            <CategoryTitle>이메일 주소: </CategoryTitle>
            <CategoryItem>
              {inputValues.email}
              <ResetBtn
                onClick={() => {
                  setIsSubmitted(false);
                }}
              >
                수정하기
              </ResetBtn>
            </CategoryItem>
          </Category>
        </>
      ) : (
        <>
          <Category>
            <CategoryTitle>예매자명: </CategoryTitle>
            <CategoryItem>
              <Input
                type="text"
                name="name"
                placeholder="이름을 확인하세요"
                onChange={handleInput}
              />
            </CategoryItem>
          </Category>
          <Category>
            <CategoryTitle>이메일 주소: </CategoryTitle>
            <form>
              <Input
                type="text"
                name="email"
                placeholder="이메일을 입력하세요"
                onChange={handleInput}
              />
              <ResetBtn type="submit" onClick={handleSubmit}>
                제출하기
              </ResetBtn>
            </form>
          </Category>
        </>
      )}
      <SubCategory>예약 공연</SubCategory>
      <Category>
        <CategoryTitle>공연명: </CategoryTitle>
        <CategoryItem>
          뮤지컬 &#10094;{checkoutInfo[0].title}&#10095;
        </CategoryItem>
      </Category>
      <Category>
        <CategoryTitle>예매 좌석:</CategoryTitle>
        <CategoryKey>VIP석</CategoryKey>
        <CategoryValue>
          {checkoutInfo[0].grade === 'VIP석'
            ? `${checkoutInfo[0].selectedTicket}석`
            : '0석'}
        </CategoryValue>
        <CategoryKey>R석</CategoryKey>
        <CategoryValue>
          {checkoutInfo[0].grade === 'R석'
            ? `${checkoutInfo[0].selectedTicket}석`
            : '0석'}
        </CategoryValue>
        <CategoryKey>S석</CategoryKey>
        <CategoryValue>
          {checkoutInfo[0].grade === 'S석'
            ? `${checkoutInfo[0].selectedTicket}석`
            : '0석'}
        </CategoryValue>
        <ResetBtn
          onClick={() => {
            navigate(`/showDetail/${checkoutInfo[0].showId}`);
          }}
        >
          좌석 재선택
        </ResetBtn>
      </Category>
      <Category>
        <CategoryTitle>좌석 가격:</CategoryTitle>
        <CategoryItem>
          {checkoutInfo[0].totalPrice !== undefined
            ? `${checkoutInfo[0].totalPrice.toLocaleString()}`
            : 0}
          원
        </CategoryItem>
      </Category>
      <Calendar />
      <CheckboxSection>
        <Checkbox
          selectedCheckbox={selectedCheckbox}
          handleCheck={handleCheck}
          text="1회 14:00"
          type="reservation"
          detail={
            checkoutInfo[0].seatsDetail !== undefined
              ? `잔여 좌석 수: ${checkoutInfo[0].seatsDetail[0].ticket}석`
              : '잔여 좌석 수: 0석'
          }
        />
        <Checkbox
          selectedCheckbox={selectedCheckbox}
          handleCheck={handleCheck}
          text="2회 18:00"
          type="reservation"
          detail={
            checkoutInfo[0].seatsDetail !== undefined
              ? `잔여 좌석 수: ${checkoutInfo[0].seatsDetail[1].ticket}석`
              : '잔여 좌석 수: 0석'
          }
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
