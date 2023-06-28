import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIS } from '../../config';
import {
  CardWrapper,
  CardImg,
  CardLike,
  LikeImg,
  ShowInfo,
  CardFunction,
} from './Card';
import Button from '../Button/Button.jsx';

const Card = ({ show, rerender }) => {
  const { wishId, imageUrl, showId, title, theaterNames, startDate, endDate } =
    show;
  const wished = wishId === null;
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(!wished);
  const [isWished, setIsWished] = useState(wished);
  const token = localStorage.getItem('token');

  const newStartDate = startDate.substring(0, 10).replaceAll('-', '.');
  const newEndDate = endDate.substring(0, 10).replaceAll('-', '.');

  const handleLike = id => {
    setIsClicked(prev => !prev);
    isClicked
      ? fetch(`${APIS.wish}?wishId=${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: token,
          },
        }).then(res => {
          if (res.status === 204) {
            rerender();
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
          rerender();
        });
  };

  return (
    <CardWrapper>
      <CardImg src={imageUrl} />
      <CardFunction>
        <CardLike>
          <LikeImg
            wishId={!isWished}
            clicked={isClicked}
            onClick={() => handleLike(wishId)}
          />
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
        {newStartDate}~{newEndDate}
      </ShowInfo>
    </CardWrapper>
  );
};

export default Card;
