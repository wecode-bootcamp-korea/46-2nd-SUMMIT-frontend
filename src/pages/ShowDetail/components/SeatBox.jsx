import React, { useState } from 'react';
import {
  SeatBoxsWrap,
  SeatsWrap,
  SeatInfoWrap,
  SeatGradeWrap,
  SeatGrade,
  SeatInfo,
  CheckImg,
  CheckedImg,
  InfoWrap,
  DropWrapper,
  DropButton,
  DropMenu,
  DropItem,
  ArrowDownImg,
  TotalPrice,
} from './SeatBox';
import { useRecoilState } from 'recoil';
import checkoutInfoState from '../../../atom';

const SeatBox = ({ seat, title, showId, seatsDetail }) => {
  const [isSeatOpen, setIsSeatOpen] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [option, setOption] = useState('');
  const [checkoutInfo, setCheckoutInfo] = useRecoilState(checkoutInfoState);

  const { price, theater, grade, ticket } = seat;
  const totalPrice = price * option;

  const handleSeatOnclick = () => {
    setIsSeatOpen(prev => !prev);
  };

  const addCheckoutInfo = (key, value) => {
    setCheckoutInfo(prevCheckoutInfo => ({
      ...prevCheckoutInfo,
      [key]: value,
    }));
  };

  const handleSelectOnclick = () => {
    setIsSelectOpen(prev => !prev);
  };

  const handleTicketOnClick = e => {
    const selectedTicket = e.target.value;
    setIsSelectOpen(prev => !prev);
    setOption(selectedTicket);
    addCheckoutInfo('grade', grade);
    addCheckoutInfo('title', title);
    addCheckoutInfo('price', price);
    addCheckoutInfo('theater', theater);
    addCheckoutInfo('selectedTicket', selectedTicket);
    addCheckoutInfo('ticket', ticket);
    addCheckoutInfo('showId', showId);
    addCheckoutInfo('seatsDetail', seatsDetail);
    addCheckoutInfo('totalPrice', price * selectedTicket);
  };
  return (
    <SeatBoxsWrap>
      <SeatsWrap>
        <SeatInfoWrap>
          <SeatGradeWrap onClick={handleSeatOnclick}>
            {isSeatOpen ? <CheckImg /> : <CheckedImg />}
            <SeatGrade>{grade}</SeatGrade>
          </SeatGradeWrap>
          <InfoWrap>
            <SeatInfo isOpen={isSeatOpen}>{`가격: ${parseInt(
              price
            ).toLocaleString()}원`}</SeatInfo>
            {isSeatOpen && (
              <DropWrapper>
                <DropButton onClick={handleSelectOnclick}>
                  {isSelectOpen ? `매수선택` : `${option}매`}
                  <ArrowDownImg />
                </DropButton>
                <DropMenu isOpen={isSelectOpen}>
                  {COUNT_LIST.map(el => (
                    <DropItem
                      key={el.id}
                      value={el.count}
                      onClick={handleTicketOnClick}
                    >
                      {`${el.count}매`}
                    </DropItem>
                  ))}
                </DropMenu>
                <TotalPrice>{`총합: ${totalPrice.toLocaleString()}원`}</TotalPrice>
              </DropWrapper>
            )}
          </InfoWrap>
        </SeatInfoWrap>
      </SeatsWrap>
    </SeatBoxsWrap>
  );
};

export default SeatBox;

const COUNT_LIST = [
  {
    id: 1,
    count: 1,
  },
  {
    id: 2,
    count: 2,
  },
  {
    id: 3,
    count: 3,
  },
  {
    id: 4,
    count: 4,
  },
  {
    id: 5,
    count: 5,
  },
  {
    id: 6,
    count: 6,
  },
  {
    id: 7,
    count: 7,
  },
  {
    id: 8,
    count: 8,
  },
  {
    id: 9,
    count: 9,
  },
];
