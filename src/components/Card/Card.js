import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;

  position: relative;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 400px;
  background-image: ${props => `url(${props.src})`};
`;

export const CardFunction = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CardLike = styled.button`
  width: 150px;
  height: 75px;
  left: 0;
  background-color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const CardReservation = styled.button`
  width: 50%;
  height: 75px;
  background-color: purple;
  &:hover {
    cursor: pointer;
  }
`;

export const LikeImg = styled.div`
  background-color: white;
  width: 32px;
  height: 32px;
  border: none;
  background: no-repeat;
  background-image: ${props =>
    props.clicked
      ? `url("image/clickedHeart.ico")`
      : `url("image/unclickedHeart.ico")`};
`;

export const ShowInfo = styled.div`
  font-size: 15px;
  text-align: center;
`;
