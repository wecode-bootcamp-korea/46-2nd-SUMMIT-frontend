import React, { useEffect, useState } from 'react';
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
import { WishListAtom } from '../../Recoil/WishListAtom';
import { useRecoilState } from 'recoil';

const Card = ({ show, rerender }) => {
  const { wishId, imageUrl, showId, title, theaterNames, startDate, endDate } =
    show;
  const [isWished, setIsWished] = useState(true);

  useEffect(() => {
    setIsWished(wishId === null);
  }, [wishId]);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [wishListData, setWishListData] = useRecoilState(WishListAtom);

  const newStartDate = startDate.substring(0, 10).replaceAll('-', '.');
  const newEndDate = endDate.substring(0, 10).replaceAll('-', '.');

  const handleLike = id => {
    setIsWished(prev => !prev);
    !isWished
      ? fetch(`${APIS.wish}?wishId=${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: token,
          },
        }).then(res => {
          if (res.status === 204) {
            rerender();
            fetch(`${APIS.wish}`, {
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: token,
              },
            })
              .then(res => res.json())
              .then(data => {
                if (data.wishData !== undefined) {
                  setWishListData(data.wishData.result);
                }
              });
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
          fetch(`${APIS.wish}`, {
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              Authorization: token,
            },
          })
            .then(res => res.json())
            .then(data => {
              if (data.wishData !== undefined) {
                setWishListData(data.wishData.result);
              }
            });
        });
  };

  return (
    <CardWrapper>
      <CardFunction>
        <CardImg
          src={imageUrl}
          onClick={() => {
            navigate(`/showDetail/${showId}`);
          }}
        />
        <LikeImg wishId={!isWished} onClick={() => handleLike(wishId)} />
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
