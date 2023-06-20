import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import likeSrc from '../../assets/like.png';
import {
  Container,
  MainWrap,
  ShowImg,
  AsideWrap,
  ShowInfo,
  ShowSales,
  ShowReview,
  ShowInfoWrap,
  ShowContents,
  ShowContentsWrap,
  LikeImg,
  LikeBtn,
  ReservationBtn,
  ShowImgWrap,
  SeatBoxsWrap,
  ShowTitle,
  ShowSalesContents,
  ShowReviewContents,
} from './ShowDetail';
import SeatBox from './components/SeatBox.jsx';
import { APIS } from '../../config';

const ShowDetail = () => {
  const [showDetail, setShowDetail] = useState([]);
  const [isShowInfoOpen, setIsShowInfoOpen] = useState(true);
  const [isShowSalesOpen, setIsShowSalesOpen] = useState(false);
  const [isShowReviewOpen, setIsShowReviewOpen] = useState(false);
  // const params = useParams();
  // const showId = params.showId;
  const { showId } = useParams();
  const navigate = useNavigate();

  //TODO 공연정보 MOCK
  // useEffect(() => {
  //   fetch(`/data/showData.json`)
  //     .then(res => res.json())
  //     .then(data => setShowDetail(data));
  // }, [showId]);

  //TODO 좌석정보 MOCK
  // useEffect(() => {
  //   fetch(`/data/seatData.json`)
  //     .then(res => res.json())
  //     .then(data => setSeatInfo(data));
  // }, []);

  useEffect(() => {
    fetch(`${APIS.showList}/${showId}`)
      .then(res => res.json())
      .then(data => setShowDetail(data.showDetail[0]));
  }, []);

  if (showDetail.length === 0) {
    return null;
  }

  const handleShowInfoOnclick = () => {
    setIsShowInfoOpen(prev => !prev);
    setIsShowSalesOpen(false);
    setIsShowReviewOpen(false);
  };
  const handleShowSalesOnclick = () => {
    setIsShowSalesOpen(prev => !prev);
    setIsShowInfoOpen(false);
    setIsShowReviewOpen(false);
  };
  const handleShowReviewOnclick = () => {
    setIsShowReviewOpen(prev => !prev);
    setIsShowInfoOpen(false);
    setIsShowSalesOpen(false);
  };

  return (
    <Container>
      <MainWrap>
        <ShowImgWrap>
          <ShowImg src={showDetail.imageUrl} />
        </ShowImgWrap>
        <ShowInfoWrap>
          <ShowInfo onClick={handleShowInfoOnclick}>공연정보</ShowInfo>
          <ShowSales onClick={handleShowSalesOnclick}>판매정보</ShowSales>
          <ShowReview onClick={handleShowReviewOnclick}>공연리뷰</ShowReview>
        </ShowInfoWrap>
        <ShowContentsWrap>
          <ShowContents isOpen={isShowInfoOpen}>
            {`공연제목: ${showDetail.title}`}
            <br />
            {`공연내용: ${showDetail.showDetail}`}
            <br />
            {`러닝타임: ${showDetail.runningTime}`}
            <br />
            {`장르: ${showDetail.genre}`}
            <br />
            {`시작날짜: ${showDetail.startDate}`}
            <br />
            {`종료날짜: ${showDetail.endDate}`}
            <br />
          </ShowContents>
          <ShowSalesContents isOpen={isShowSalesOpen}>
            판매정보입니다.
          </ShowSalesContents>
          <ShowReviewContents isOpen={isShowReviewOpen}>
            리뷰컴포넌트입니다.
          </ShowReviewContents>
        </ShowContentsWrap>
      </MainWrap>
      <AsideWrap>
        <SeatBoxsWrap>
          <ShowTitle>{`공연제목: ${showDetail.title}`}</ShowTitle>
          {showDetail.seatsDetail.map(seat => (
            <SeatBox
              key={seat.id}
              seat={seat}
              title={showDetail.title}
              showId={showId}
              seatsDetail={showDetail.seatsDetail}
            />
          ))}
          <LikeBtn>
            <LikeImg src={likeSrc} />
          </LikeBtn>
          <Link to="/reservation">
            <ReservationBtn>예매하기</ReservationBtn>
          </Link>
        </SeatBoxsWrap>
      </AsideWrap>
    </Container>
  );
};
export default ShowDetail;

const SALES_INFO = {
  content: '판매정보입니다.',
};
