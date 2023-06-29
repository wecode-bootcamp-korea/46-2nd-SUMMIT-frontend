import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  position: relative;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &:hover {
    cursor: pointer;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  background-image: ${props => `url(${props.src})`};
`;

export const CardFunction = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
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
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  width: 32px;
  height: 32px;
  border: none;
  background: no-repeat;
  background-image: ${props =>
    props.wishId || props.clicked
      ? `url("image/clickedHeart.png")`
      : `url("image/unclickedHeart.png")`};
`;

export const ShowInfo = styled.div`
  font-size: 15px;
  text-align: center;
`;
