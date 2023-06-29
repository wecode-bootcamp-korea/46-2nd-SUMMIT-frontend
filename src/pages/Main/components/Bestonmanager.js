import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { APIS } from '../../../config';
import Poster from './Poster.jsx';

const BestOnManager = () => {
  const navigate = useNavigate();

  const handleImageClick = id => {
    navigate(`/showDetail/${id}`);
  };

  const [bestOnManager, setBestOnManager] = useState([]);

  useEffect(() => {
    fetch(`${APIS.showList}/?orderBy=endDesc`)
      .then(res => res.json())
      .then(data => setBestOnManager(data.shows));
  }, []);

  const LimitBestonManager = bestOnManager.slice(0, 5);

  return (
    <Container>
      <SectionTitle>이거보면 진짜 후회 안할껄??!!</SectionTitle>
      <MusicalCardContainer>
        <CardListWrap>
          {LimitBestonManager.map(show => (
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

export default BestOnManager;

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
