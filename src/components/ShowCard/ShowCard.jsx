import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardWrapper,
  CardImg,
  CardLike,
  LikeImg,
  CardFunction,
} from './ShowCard';
import Button from '../Button/Button.jsx';

const ShowCard = ({ src }) => {
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
      <CardImg src={src} />
      <CardFunction>
        <CardLike>
          <LikeImg clicked={isClicked} onClick={handleLike} />
        </CardLike>
        <Button
          size="showcard"
          text="예매"
          onClick={() => {
            navigate('/showDetail');
          }}
        />
      </CardFunction>
    </CardWrapper>
  );
};

export default ShowCard;
