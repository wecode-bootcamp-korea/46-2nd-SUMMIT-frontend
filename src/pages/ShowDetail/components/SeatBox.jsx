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
  SelectTicket,
  OptionTicket,
  InfoWrap,
} from './SeatBox';

const SeatBox = ({ seat }) => {
  const [isSeatOpen, setIsSeatOpen] = useState(false);
  const [isCountOpen, setIsCountOpen] = useState(false);

  const { id, age, grade, price, runningTime, seatStatus, theater, ticket } =
    seat;

  console.log(seat);

  // console.log(id, age, grade, price, runningTime, seatStatus, theater, ticket);

  const handleSeatOnclick = () => {
    setIsSeatOpen(prev => !prev);
  };

  const handleCountOnClick = () => {
    setIsCountOpen(prev => !prev);
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
              <SelectTicket onClick={handleCountOnClick}>
                {COUNT_LIST.map(item => (
                  <OptionTicket key={item.id} value={item.count}>
                    {`매수: ${item.count}매`}
                  </OptionTicket>
                ))}
              </SelectTicket>
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
