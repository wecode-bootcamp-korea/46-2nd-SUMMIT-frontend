import React from 'react';
import styled from 'styled-components';

const Theathersituation = () => {
  return (
    <Container>
      <Theatherstatus>전국공연장 및 공연 현황</Theatherstatus>
      <SmallContainer>
        <Button href="/showList?region=서울">서울</Button>
        <Button href="/showList?region=경기">경기</Button>
        <Button href="/showList?region=인천">인천</Button>
        <Button>부산</Button>
        <Button>대전</Button>
        <Button>울산</Button>
        <Button href="/showList?region=강원">강원</Button>
        <Button>광주</Button>
      </SmallContainer>
    </Container>
  );
};

export default Theathersituation;

const Container = styled.div`
  position: relative;
  min-width: 1600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  height: 300px;
  width: 100%;
  background-color: #881010;
`;

const Button = styled.a`
  background-color: #881010;
  color: #fff;
  padding: 10px 20px;
  border: 1px solid white;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  text-decoration: none;
`;

const Theatherstatus = styled.h1`
  text-align: center;
  margin-bottom: 60px;
  font-size: 24px;
  color: black;
`;

const SmallContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  position: absolute;
  display: flex;
  bottom: 60px;
  font-size: 24px;
  justify-content: space-between;
`;
