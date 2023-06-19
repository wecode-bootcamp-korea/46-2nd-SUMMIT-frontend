import React, { useEffect } from 'react';
import { useState } from 'react';
import likeSrc from '../../assets/like.png';
import {
  Container,
  MainWrap,
  ShowImg,
  AsideWrap,
  ShowTitle,
  ShowInfo,
  ShowSales,
  ShowReview,
  ShowInfoWrap,
  ShowContents,
  ShowContentsWrap,
  LikeImg,
  LikeBtn,
  ReservationBtn,
} from './ShowDetail';
import SeatBox from '../../components/ShowDetail/SeatBox.jsx';

const ShowDetail = () => {
  const [showDetail, setShowDetail] = useState([]);
  const [seatInfo, setSeatInfo] = useState([]);
  const [isShowInfoOpen, setIsShowInfoOpen] = useState(true);

  useEffect(() => {
    fetch('/data/showData.json')
      .then(res => res.json())
      .then(data => setShowDetail(data));
  }, []);

  useEffect(() => {
    fetch('/data/seatData.json')
      .then(res => res.json())
      .then(data => setSeatInfo(data));
  }, []);

  if (showDetail.length === 0) {
    return null;
  }

  if (seatInfo.length === 0) {
    return null;
  }

  const handleShowInfoOnclick = () => {
    setIsShowInfoOpen(prev => !prev);
  };

  return (
    <Container>
      <MainWrap>
        <ShowImg src={showDetail[0].url} />
        <ShowInfoWrap>
          <ShowInfo onClick={handleShowInfoOnclick}>공연정보</ShowInfo>
          <ShowSales>판매정보</ShowSales>
          <ShowReview>공연리뷰</ShowReview>
        </ShowInfoWrap>
        <ShowContentsWrap>
          <ShowContents isOpen={isShowInfoOpen}>
            {showDetail[0].content}
          </ShowContents>
        </ShowContentsWrap>
      </MainWrap>
      <AsideWrap>
        <ShowTitle>{showDetail[0].title}</ShowTitle>
        {seatInfo.map(el => (
          <SeatBox key={el.id} grade={el.seat_grade} price={el.price} />
        ))}
        {console.log(seatInfo, seatInfo[0])}
        <LikeBtn>
          <LikeImg src={likeSrc} />
        </LikeBtn>
        <ReservationBtn>예매하기</ReservationBtn>
      </AsideWrap>
    </Container>
  );
};

export default ShowDetail;
