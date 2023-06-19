import React from 'react';
import romancepic from '../../../assets/romance.png';
import comedypic from '../../../assets/comedy.png';
import fearpic from '../../../assets/fear.png';
import dramapic from '../../../assets/drama.png';
import styled from 'styled-components';

const Categorytransfer = () => {
  return (
    <Container>
      <a href="/showList?genre=1">
        <Imagepic className="ui" src={romancepic} alt="romancepicture" />
        <Letter>로맨스</Letter>
      </a>
      <a href="/showList?genre=2">
        <Imagepic className="ui" src={comedypic} alt="comedypicture" />
        <Letter>코미디</Letter>
      </a>
      <a href="/showList?genre=3">
        <Imagepic className="ui" src={fearpic} alt="fearpicture" />
        <Letter>공포</Letter>
      </a>
      <a href="/showList?genre=4">
        <Imagepic className="ui" src={dramapic} alt="dramapicture" />
        <Letter>드라마</Letter>
      </a>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 100px;
  flex-direction: row;
  text-align: center;
  min-width: 1600px;
  width: 100%;
`;

const Imagepic = styled.img`
  position: relative;
  margin-top: 70px;
  margin-left: 100px;
  margin-right: 100px;
  width: 80px;
  align-items: center;
  filter: invert(94%) sepia(94%) saturate(0%) hue-rotate(162deg)
    brightness(105%) contrast(105%);
`;

const Letter = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  font-size: 20px;
  color: white;
`;

export default Categorytransfer;
