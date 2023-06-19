import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/Button';

const CardWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 220px;
  height: 300px;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: 3px 3px 3px gray;
`;

const CardFunction = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CardLike = styled.div`
  display: flex;
  align-items: center;
`;

const LikeImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  filter: ${({ clicked }) => (clicked ? 'brightness(0) invert(1)' : 'none')};
`;

const ShowCard = ({ src, name, onClick, onLike }) => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleLike = () => {
    setIsClicked(prev => !prev);
    onLike(name, isClicked);
  };

  const handleReserve = () => {
    navigate('/showDetail');
  };

  return (
    <CardWrapper onClick={onClick}>
      <CardImg src={src} />
      <CardFunction>
        <CardLike>
          <LikeImg
            src="/like.svg"
            alt="Like"
            clicked={isClicked}
            onClick={handleLike}
          />
          {name}
        </CardLike>
        <Button size="showcard" text="예매" onClick={handleReserve} />
      </CardFunction>
    </CardWrapper>
  );
};

export default ShowCard;
