import React from 'react';
import styled from 'styled-components';

const Theathersituation = () => {
  return (
    <Container>
      <Theatherstatus>전국공연장 및 공연 현황</Theatherstatus>
      <SmallContainer>
        {THEATHER_INFO_LIST.map(info => (
          <Button key={(info.id, info.link)}>
            <a href={info.link}>{info.text}</a>
          </Button>
        ))}
      </SmallContainer>
    </Container>
  );
};

export default Theathersituation;

const THEATHER_INFO_LIST = [
  { id: 1, link: '/showList?address=서울', text: '서울' },
  { id: 2, link: '/showList?address=경기', text: '경기' },
  { id: 3, link: '/showList?address=인천', text: '인천' },
  { id: 4, link: '##', text: '부산' },
  { id: 5, link: '##', text: '대전' },
  { id: 6, link: '/showList?address=강원', text: '강원' },
  { id: 7, link: '##', text: '울산' },
  { id: 8, link: '##', text: '광주' },
];

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
