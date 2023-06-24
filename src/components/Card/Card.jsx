import React from 'react';
import {
  CardWrapper,
  CardImg,
  CardLike,
  LikeImg,
  ShowInfo,
  CardFunction,
} from './Card';
import likeSrc from '../../assets/heart.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../components/Button/Button.jsx';

const Card = ({ show }) => {
  const { imageUrl, showId, title, theaterNames, startDate, endDate } = show;

  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const token = localStorage.getItem('token');

  function handleLike() {
    setIsClicked(prev => !prev);
    !isClicked &&
      fetch('http://10.58.52.53:8080/wishs/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
        body: JSON.stringify({ showId: 4 }),
      }).then(res => res.json());
  }
  return (
    <CardWrapper>
      <CardImg src={imageUrl} />
      <CardFunction>
        <CardLike>
          <LikeImg src={likeSrc} onClick={handleLike} />
        </CardLike>
        <Button
          size="showcard"
          text="예매"
          onClick={() => {
            navigate(`/showDetail/${showId}`);
          }}
        />
      </CardFunction>
      <ShowInfo>
        {title}
        <br />
        {theaterNames}
        <br />
        {startDate}~{endDate}
      </ShowInfo>
    </CardWrapper>
  );
};

export default Card;
