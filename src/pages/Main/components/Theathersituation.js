import React from 'react';
import styled from 'styled-components';

const Theathersituation = () => {
  return (
    <Container>
      <Theatherstatus>우리 집 근처에서는 어떤 공연이 있을까?</Theatherstatus>
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
  border-top: 1px solid #404040;
  border-bottom: 1px solid #404040;
`;

const Button = styled.a`
  background-color: white;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  text-decoration: none;
  height: 46px;
`;

const Theatherstatus = styled.h1`
  text-align: center;
  margin-bottom: 60px;
  font-size: 24px;
  color: #d4d4d6;
`;

const SmallContainer = styled.div`
  width: 100%;
  max-width: 900px;
  position: absolute;
  display: flex;
  bottom: 60px;
  font-size: 24px;
  justify-content: space-between;
`;
