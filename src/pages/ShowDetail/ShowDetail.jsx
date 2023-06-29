import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {
  Container,
  MainWrap,
  ShowImg,
  AsideWrap,
  ShowInfo,
  ShowSales,
  ShowInfoWrap,
  ShowContents,
  ShowContentsWrap,
  LikeBtn,
  ReservationBtn,
  ShowImgWrap,
  SeatBoxsWrap,
  ShowTitle,
  ShowSalesContents,
  SalesTitle,
  SalesTable,
  Tr,
  Td,
  Img,
  BtnWrap,
  LinkBox,
  WishImg,
} from './ShowDetail';
import SeatBox from './components/SeatBox.jsx';
import { WishListAtom } from '../../Recoil/WishListAtom';
import { ShowDetailAtom } from '../../Recoil/ShowDetailAtom.jsx';
import { useRecoilState } from 'recoil';
import { APIS } from '../../config';

const ShowDetail = () => {
  const [showDetail, setShowDetail] = useRecoilState(ShowDetailAtom);
  const [currentInfo, setCurrentInfo] = useState('공연정보');
  const { showId } = useParams();
  const token = localStorage.getItem('token');
  const [wishListData, setWishListData] = useRecoilState(WishListAtom);
  const [isClicked, setIsClicked] = useState(true);

  const renderShowDetail = () => {
    fetch(`${APIS.showList}/${showId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setShowDetail(data.showDetail[0]));
  };

  useEffect(() => {
    renderShowDetail();
  }, []);

  const handleLike = id => {
    setIsClicked(prev => !prev);
    !isClicked
      ? fetch(`${APIS.wish}?wishId=${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: token,
          },
        }).then(res => {
          if (res.status === 204) {
            fetch(`${APIS.wish}`, {
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: token,
              },
            })
              .then(res => res.json())
              .then(data => {
                if (data.wishData !== undefined) {
                  setWishListData(data.wishData.result);
                }
              });
          }
        })
      : fetch(`${APIS.wish}/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: token,
          },
          body: JSON.stringify({ showId: showId }),
        }).then(res => {
          res.json();
          renderShowDetail();
          fetch(`${APIS.wish}`, {
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              Authorization: token,
            },
          })
            .then(res => res.json())
            .then(data => {
              if (data.wishData !== undefined) {
                setWishListData(data.wishData.result);
              }
            });
        });
  };
  const isData = Object.keys(showDetail).length !== 0;
  if (!isData) {
    return null;
  }

  const changeInfo = info => {
    setCurrentInfo(info);
  };

  const genreMap = {
    1: '로맨스',
    2: '코미디',
    3: '공포',
    4: '드라마',
  };

  const genreValue = genreMap[showDetail.genre];

  const { startDate, endDate } = showDetail;
  const newStartDate = startDate.substring(0, 10).replaceAll('-', '.');
  const newEndDate = endDate.substring(0, 10).replaceAll('-', '.');

  return (
    <Container>
      <MainWrap>
        <ShowImgWrap>
          <ShowImg src={showDetail.imageUrl} />
        </ShowImgWrap>
        <ShowInfoWrap>
          <ShowInfo
            onClick={() => changeInfo('공연정보')}
            isOpen={currentInfo === '공연정보'}
          >
            공연정보
          </ShowInfo>
          <ShowSales
            onClick={() => changeInfo('판매정보')}
            isOpen={currentInfo === '판매정보'}
          >
            판매정보
          </ShowSales>
        </ShowInfoWrap>
        <ShowContentsWrap>
          {currentInfo === '공연정보' ? (
            <>
              <ShowContents>
                {`뮤지컬 <${showDetail.title}>`}
                <br />
                <br />
                {`공연내용: ${showDetail.showDetail}`}
                <br />
                <br />
                {`러닝타임: ${showDetail.runningTime}`}
                <br />
                <br />
                {`장르: ${genreValue}`}
                <br />
                <br />
                {`공연기간: ${newStartDate} ~ ${newEndDate}`}
                <br />
              </ShowContents>
              <Img src="https://ticketimage.interpark.com/Play/image/etc/23/23000548-29.jpg" />
            </>
          ) : (
            <ShowSalesContents>
              {showDetail.title === '빨래' && (
                <>
                  <SalesTitle>상품관련 정보</SalesTitle>
                  <SalesTable>
                    <Tr>
                      <Td>주최/기획</Td>
                      <Td>주식회사 씨에이치수박</Td>
                      <Td>고객문의</Td>
                      <Td>02-1234-1234</Td>
                    </Tr>
                    <Tr>
                      <Td>공연시간</Td>
                      <Td>{showDetail.runningTime}(인터미션:15분)</Td>
                      <Td>관람등급</Td>
                      <Td>02-1234-1234</Td>
                    </Tr>
                    <Tr>
                      <Td>주연</Td>
                      <Td>
                        강연정, 박은미, 장혜민,
                        <br /> 조상웅, 문남권, 강기헌,
                        <br /> 최정화, 진미사, 조영임,
                        <br /> 양미경, 백지예
                      </Td>
                      <Td>공연장소</Td>
                      <Td>{showDetail.theaterNames}</Td>
                    </Tr>
                    <Tr>
                      <Td>예매수수료</Td>
                      <Td>장당 1,000원</Td>
                      <Td>배송료</Td>
                      <Td>현장수령 무료 (배송불가)</Td>
                    </Tr>
                  </SalesTable>
                </>
              )}
            </ShowSalesContents>
          )}
        </ShowContentsWrap>
      </MainWrap>
      <AsideWrap>
        <SeatBoxsWrap>
          <ShowTitle>{`뮤지컬 <${showDetail.title}>`}</ShowTitle>
          {showDetail.seatsDetail.slice(0, 4).map(seat => (
            <SeatBox
              key={seat.id}
              seat={seat}
              title={showDetail.title}
              showId={showId}
              seatsDetail={showDetail.seatsDetail}
            />
          ))}
          <BtnWrap>
            <LikeBtn>
              <WishImg
                clicked={!isClicked}
                onClick={() => {
                  handleLike(showDetail.wishId);
                }}
              />
            </LikeBtn>
            <LinkBox to="/reservation">
              <ReservationBtn>예매하기</ReservationBtn>
            </LinkBox>
          </BtnWrap>
        </SeatBoxsWrap>
      </AsideWrap>
    </Container>
  );
};

export default ShowDetail;

const SALES_INFO = {
  content: '판매정보입니다.',
};
