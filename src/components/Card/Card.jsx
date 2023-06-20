import React from 'react';
import {
  CardWrapper,
  CardImg,
  CardLike,
  CardReservation,
  LikeImg,
  ShowInfo,
} from './Card';
import likeSrc from '../../assets/heart.png';
import { Link } from 'react-router-dom';

const Card = ({ show }) => {
  const { image_url, id, title, detail_address, start_at, end_at } = show;
  return (
    <CardWrapper>
      <CardImg src={image_url} />
      <CardLike>
        <LikeImg src={likeSrc} />
      </CardLike>
      <Link key={id} to={`/showDetail/${id}`}>
        <CardReservation>예매</CardReservation>
      </Link>
      <ShowInfo>
        {title}
        <br />
        {detail_address}
        <br />
        {start_at}~{end_at}
      </ShowInfo>
    </CardWrapper>
  );
};

export default Card;
