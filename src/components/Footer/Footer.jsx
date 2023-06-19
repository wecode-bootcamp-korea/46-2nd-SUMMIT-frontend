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
              <p>회사소개</p>
            </a>
            <a href="##">
              <p>채용정보</p>
            </a>
            <a href="##">
              <p>팀블로그</p>
            </a>
          </Info>
          <Info>
            <a href="##">
              <p>고객안내</p>
            </a>
            <a href="##">
              <p>이용안내</p>
            </a>
            <a href="##">
              <p>질문FAQ</p>
            </a>
            <a href="##">
              <p>광고문의</p>
            </a>
          </Info>
          <Info>
            <a href="##">
              <p>고객센터</p>
            </a>
            <a href="##">
              <p>공지사항</p>
            </a>
          </Info>
        </RightContainer>
        <LinkButton>
          <ImageButtons
            href="https://www.instagram.com/yum_6579"
            src="https://user-images.githubusercontent.com/128045089/242558577-7ac98533-0a3a-4d0c-9726-121625ed1ade.jpg"
            alt="instagram_image"
          />
          <ImageButtons
            href="https://www.facebook.com"
            src="https://user-images.githubusercontent.com/128045089/242558576-67271c44-cbb5-4cba-a9cd-b96ea3190b8d.jpg"
            alt="facebook_image"
          />
        </LinkButton>
      </FooterWrap>
    </Container>
  );
};

export default Footer;
