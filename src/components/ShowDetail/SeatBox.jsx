import React, { useEffect, useState } from 'react';
import {
  SeatBoxsWrap,
  SeatsWrap,
  SeatInfoWrap,
  SeatGradeWrap,
  SeatGrade,
  SeatInfo,
  DropButton,
  DropItem,
  DropMenu,
  DropWrapper,
  CheckImg,
  CheckedImg,
} from './SeatBox';

const SeatBox = ({ grade, price }) => {
  const [isSeatOpen, setIsSeatOpen] = useState(false);
  const [isCountOpen, setIsCountOpen] = useState(false);

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
          <SeatInfo isOpen={isSeatOpen}>
            {price}
            <br />
            <DropWrapper>
              <DropButton onClick={handleCountOnClick}>매수</DropButton>
              <DropMenu isOpen={isCountOpen}>
                {COUNT_LIST.map(el => (
                  <DropItem key={el.id}>{el.count}</DropItem>
                ))}
              </DropMenu>
            </DropWrapper>
          </SeatInfo>
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
