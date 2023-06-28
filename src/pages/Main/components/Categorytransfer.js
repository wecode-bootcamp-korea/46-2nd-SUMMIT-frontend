import React from 'react';
import romancepic from '../../../assets/romance.png';
import comedypic from '../../../assets/comedy.png';
import fearpic from '../../../assets/fear.png';
import dramapic from '../../../assets/drama.png';
import styled from 'styled-components';

const Categorytransfer = () => {
  return (
    <Container>
      {SHOWLIST_LINK_LIST.map(item => (
        <a key={item.id} href={item.link}>
          <ImagePic src={item.src} />
          <Letter>{item.text}</Letter>
        </a>
      ))}
    </Container>
  );
};

export default Categorytransfer;

const SHOWLIST_LINK_LIST = [
  { id: 1, src: romancepic, link: '/showList?genreId=1', text: '로맨스' },
  { id: 2, src: comedypic, link: '/showList?genreId=2', text: '코미디' },
  { id: 3, src: fearpic, link: '/showList?genreId=3', text: '공포' },
  { id: 4, src: dramapic, link: '/showList?genreId=4', text: '드라마' },
];

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

const ImagePic = styled.img`
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
