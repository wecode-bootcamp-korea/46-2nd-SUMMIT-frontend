import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 100px 200px;
  background-color: #333333;
  color: white;
`;

export const MainWrap = styled.div`
  width: 60%;
  height: 100%;
  flex-grow: 1;
`;

export const ShowImgWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ShowImg = styled.img`
  height: 660px;
  background-image: url(${props => props.src});
`;

export const ShowInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 50px;
  margin-top: 70px;
  position: sticky;
  top: 0;
  background-color: #333333;
  border-bottom: 1px solid white;
  text-align: center;
`;

export const ShowInfo = styled.div`
  width: 90px;
  height: 30px;
  margin-right: 10px;
  padding-bottom: 40px;
  border-bottom: ${props => (props.isOpen ? '2px solid white' : '')};

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid black;
  }
  &:active {
    border-bottom: 3px solid black;
  }
`;

export const ShowSales = styled.div`
  width: 90px;
  margin-left: 10px;
  height: 30px;
  padding-bottom: 40px;
  border-bottom: ${props => (props.isOpen ? '2px solid white' : '')};

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid black;
  }
`;

export const ShowReview = styled.div`
  width: 90px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const ShowContentsWrap = styled.div`
  width: 100%;
  height: 100%;
  line-height: 2;
`;

export const ShowContents = styled.div`
  font-size: 17px;
  width: 100%;
  height: 100%;
  white-space: pre-wrap;
  margin-bottom: 100px;
`;

// 여기서부터 Aside Seats div****************************************************************
export const AsideWrap = styled.div`
  width: 40%;
  height: 100%;
  position: sticky;
  top: 0;
  padding-left: 50px;
`;

export const SeatBoxsWrap = styled.div`
  width: 100%;
  height: 55%;
`;

export const LikeBtn = styled.div`
  width: 50%;
  height: 100px;
  border: none;
  background-color: #333333;
  border: 1px solid white;
  border-radius: 10px;
`;

export const ReservationBtn = styled.button`
  width: 100%;
  background-color: #881010;
  height: 100px;
  border: none;
  color: white;
  border-radius: 10px;
`;

export const ShowTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const ShowSalesContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ShowReviewContents = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
`;

export const SalesTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 30px;
`;

export const SalesTable = styled.table`
  width: 100%;
  height: 400px;
  font-size: 20px;
`;

export const Tr = styled.tr`
  border: 1px solid white;
  height: 10px;
`;
export const Td = styled.td`
  padding: 5px;
  border: 1px solid white;
  text-align: center;

  &:nth-child(odd) {
    width: 120px;
    background-color: darkgray;
  }
`;
export const Th = styled.tr`
  border: 1px solid white;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;

export const LinkBox = styled(Link)`
  width: 100%;
  height: 100%;
  margin-left: 30px;
`;

export const WishImg = styled.div`
  width: 32px;
  height: 32px;
  border: none;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: no-repeat;
  background-image: ${props =>
    props.clicked
      ? `url("/image/clickedHeart.png")`
      : `url("/image/unclickedHeart.png")`};
`;
