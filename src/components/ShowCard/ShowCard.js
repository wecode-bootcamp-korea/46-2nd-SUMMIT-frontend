import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  height: 400px;
  border: none;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 325px;
  background-image: ${props => `url(${props.src})`};
`;

export const CardLike = styled.button`
  width: 50%;
  height: 75px;
  background-color: red;

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

export const LikeImg = styled.img`
  width: 25px;
  height: 25px;
`;
