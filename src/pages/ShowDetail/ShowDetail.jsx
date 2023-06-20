import React, { useEffect } from 'react';
import { useState } from 'react';
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
import { useParams } from 'react-router-dom';

const ShowDetail = () => {
  const [showDetail, setShowDetail] = useState([]);
  const [seatInfo, setSeatInfo] = useState([]);
  const [isShowInfoOpen, setIsShowInfoOpen] = useState(true);
  const [isShowSalesOpen, setIsShowSalesOpen] = useState(false);
  const [isShowReviewOpen, setIsShowReviewOpen] = useState(false);
  const params = useParams();
  const showId = params.id; //api요청시 사용

  // 상세페이지에서는 api/users/[user의 ID]를 가져와야함.
  //이 api를 활용하기 위해서는 현재 상세페이지에서 보여줘야하는 user의 id를 알고있어야함
  // useParams 훅을 이용하여 path parameter값을 가져온다.

  // *****API요청할 때 1.useEffect 의존성 배열에 showId 포함시키기.
  //2.API URL에 showId포함시키기
  // 공연정보 MOCK
  // useEffect(() => {
  //   fetch(`/data/showData.json`)
  //     .then(res => res.json())
  //     .then(data => setShowDetail(data));
  // }, [showId]);

  // 좌석정보 MOCK
  // useEffect(() => {
  //   fetch(`/data/seatData.json`)
  //     .then(res => res.json())
  //     .then(data => setSeatInfo(data));
  // }, []);

  useEffect(() => {
    fetch(`http://10.58.52.53:8080/shows/${showId}`)
      .then(res => res.json())
      .then(data => setShowDetail(data.showDetail));
  }, [showId]);

  //좌석정보 통신
  // useEffect(() => {
  //   fetch(`http:10.58.52.97:5000/shows/${showId}`)
  //     .then(res => res.json())
  //     .then(data => setShowDetail(data));
  // },[showId]);

  if (showDetail.length === 0) {
    return null;
  }

  console.log(showDetail[0].seatsDetail);

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
          <ShowImg src={showDetail[0].imageUrl} />
        </ShowImgWrap>
        <ShowInfoWrap>
          <ShowInfo onClick={handleShowInfoOnclick}>공연정보</ShowInfo>
          <ShowSales onClick={handleShowSalesOnclick}>판매정보</ShowSales>
          <ShowReview onClick={handleShowReviewOnclick}>공연리뷰</ShowReview>
        </ShowInfoWrap>
        <ShowContentsWrap>
          <ShowContents isOpen={isShowInfoOpen}>
            {`공연제목: ${showDetail[0].title}`}
            <br />
            {`공연내용: ${showDetail[0].showDetail}`}
            <br />
            {`러닝타임: ${showDetail[0].runningTime}`}
            <br />
            {`장르: ${showDetail[0].genre}`}
            <br />
            {`시작날짜: ${showDetail[0].startDate}`}
            <br />
            {`종료날짜: ${showDetail[0].endDate}`}
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
          <ShowTitle>{`공연제목: ${showDetail[0].title}`}</ShowTitle>
          {showDetail[0].seatsDetail.map(seat => (
            <SeatBox key={seat.id} seat={seat} />
          ))}
          <LikeBtn>
            <LikeImg src={likeSrc} />
          </LikeBtn>
          <ReservationBtn>예매하기</ReservationBtn>
        </SeatBoxsWrap>
      </AsideWrap>
    </Container>
  );
};

export default ShowDetail;

const SALES_INFO = {
  content: 'ddddddasdfkjansdfklansdlfnalskdfn',
};
