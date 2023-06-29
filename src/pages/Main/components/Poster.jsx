import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PosterWrapper, PosterImg, ShowInfo, ShowText } from './Poster';

const Poster = ({ show, onClick }) => {
  const { wishId, imageUrl, showId, title, theaterNames, startDate, endDate } =
    show;
  const navigate = useNavigate();

  const newStartDate = startDate.substring(0, 10).replaceAll('-', '.');
  const newEndDate = endDate.substring(0, 10).replaceAll('-', '.');

  return (
    <PosterWrapper>
      <PosterImg src={imageUrl} onClick={onClick} />
      <ShowInfo>
        <ShowText>{title}</ShowText>
        <br />
        {theaterNames}
        <br />
        {newStartDate}~{newEndDate}
      </ShowInfo>
    </PosterWrapper>
  );
};

export default Poster;
