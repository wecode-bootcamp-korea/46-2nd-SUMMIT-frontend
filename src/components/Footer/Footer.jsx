import React from 'react';
import {
  Container,
  FooterWrap,
  Info,
  Description,
  PhoneNumber,
  RightContainer,
  ImageButtons,
  LinkButton,
  LeftContainer,
  Wrapall,
  Subject,
} from './Footer';

const Footer = () => {
  return (
    <Container>
      <FooterWrap>
        <LeftContainer>
          <PhoneNumber>1234-5678</PhoneNumber>
          <Wrapall>
            <div className="wrapalltop">
              평일 9:00 - 18:00 (토요일, 공휴일 휴무)
              <br />
              email : helloworld@gmail.com(단체예매 문의)
              <br />
              email : goodbyeworld@naver.com (마케팅 협찬 문의)
            </div>
            <div className="wrapallmid">
              주식회사 SUM <br />
              사업자등록번호 : 123-45-67890 <br />
              현장 수령 과정에서 문의 사항이 있으신 경우 위에 명시되어있는
              번호로 연락 주시기 바랍니다.
            </div>
          </Wrapall>
          <Description>
            주)써밋은 통신판매중개자로서 통신판매의 당사자가 아니며 개별판매자가
            제공하는 서비스 관련한 의무와 책임은 거래당사자에게 있습니다. <br />
            상호명:(주)써밋 · 대표이사:Jang geon woong ·
            개인정보책임관리자:조수진 <br />· 주소:서울특별시 강남구 백지율로
            287 이관용 · 사업자등록번호:123-45-67890 · 통신판매업신고증:제
            2023-옥준우-00551 호 <br />· 직업정보제공사업 신고번호:서울청
            제2023-김상우-21호 <br />
            Copyright ©SUMMIT Inc. All Rights Reserved.
          </Description>
        </LeftContainer>
        <RightContainer>
          <Info>
            <a href="##">
              <Subject>회사소개</Subject>
            </a>
            <a href="##">
              <Subject>채용정보</Subject>
            </a>
            <a href="##">
              <Subject>팀블로그</Subject>
            </a>
          </Info>
          <Info>
            <a href="##">
              <Subject>고객안내</Subject>
            </a>
            <a href="##">
              <Subject>이용안내</Subject>
            </a>
            <a href="##">
              <Subject>질문FAQ</Subject>
            </a>
            <a href="##">
              <Subject>광고문의</Subject>
            </a>
          </Info>
          <Info>
            <a href="##">
              <Subject>고객센터</Subject>
            </a>
            <a href="##">
              <Subject>공지사항</Subject>
            </a>
          </Info>
        </RightContainer>
      </FooterWrap>
    </Container>
  );
};

export default Footer;
