import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { APIS } from '../../../config';
import Poster from './Poster.jsx';

const Bestonboard = () => {
  const navigate = useNavigate();

  const handleImageClick = id => {
    navigate(`/showDetail/${id}`);
  };

  const [Bestonboard, setBestonboard] = useState([]);

  useEffect(() => {
    fetch(`${APIS.showList}/?orderBy=startDesc`)
      .then(res => res.json())
      .then(data => setBestonboard(data.shows));
  }, []);

  const limitBestonboard = Bestonboard.slice(0, 5);

  return (
    <Container>
      <SectionTitle>뮤지컬 처음본다? 이건 꼭 보세요!</SectionTitle>
      <MusicalCardContainer>
        <CardListWrap>
          {limitBestonboard.map(show => (
            <Poster
              key={show.id}
              show={show}
              onClick={() => handleImageClick(show.showId)}
            />
          ))}
        </CardListWrap>
      </MusicalCardContainer>
    </Container>
  );
};

export default Bestonboard;

const Container = styled.div`
  min-width: 1600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;
  border-top: 1px solid #404040;
`;

const SectionTitle = styled.h1`
  padding-top: 30px;
  padding-bottom: 60px;
  font-size: 24px;
  z-index: 1;
  text-align: center;
  color: #d4d4d6;
`;

const MusicalCardContainer = styled.div`
  gap: 12px;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

const CardListWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: 300px;
  margin: 80px;
  max-width: 1440px;
  justify-content: center;
  gap: 10px 30px;
`;
