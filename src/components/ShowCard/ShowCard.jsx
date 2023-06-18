import React from 'react';
import {
  CardWrapper,
  CardImg,
  CardLike,
  CardReservation,
  LikeImg,
} from './ShowCard';
import likeSrc from '../../assets/heart.png';
const ShowCard = ({ src }) => {
  return (
    <CardWrapper>
      <CardImg src={src} />
      <CardLike>
        <LikeImg src={likeSrc} />
      </CardLike>
      <CardReservation>예매</CardReservation>
    </CardWrapper>
  );
};

export default ShowCard;
