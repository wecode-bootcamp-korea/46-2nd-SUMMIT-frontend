import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

export const MainWrap = styled.div`
  width: 60%;
  height: 100%;
`;

export const ShowImgWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ShowImg = styled.img`
  width: 400px;
  height: 400px;
  background-image: url(${props => props.src});
`;

export const ShowInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
`;

export const ShowInfo = styled.div`
  width: 90px;
  height: 30px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const ShowSales = styled.div`
  width: 90px;
  margin-right: 10px;
  height: 30px;
  &:hover {
    cursor: pointer;
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
`;

export const ShowContents = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  white-space: pre-wrap;
`;

// 여기서부터 Aside Seats div****************************************************************
export const AsideWrap = styled.div`
  width: 40%;
  height: 100%;
  overflow-y: auto;
`;

export const SeatBoxsWrap = styled.div`
  width: 100%;
  height: 55%;
  position: fixed;
  overflow: scroll;
`;

export const LikeBtn = styled.button`
  width: 20%;
  height: 100px;
  background-color: red;
  border: none;
`;

export const LikeImg = styled.img`
  width: 20px;
  height: 20px;
  background-image: ${props => props.src};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReservationBtn = styled.button`
  width: 20%;
  background-color: purple;
  height: 100px;
  border: none;
`;

export const ShowTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const ShowSalesContents = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
`;

export const ShowReviewContents = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
`;
