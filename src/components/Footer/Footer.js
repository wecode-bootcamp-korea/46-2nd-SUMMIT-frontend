import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  min-height: 100%;
  height: auto;
`;

export const FooterWrap = styled.div`
  padding: 30px;
  min-width: 100%;
  height: 320px;
  background-color: #efefef;
  position: relative;
`;

export const Info = styled.div`
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  min-width: 95px;
  text-align: center;
  vertical-align: top;
  line-height: 2em;
`;

export const Description = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  font-size: 11px;
  font-weight: 400;
  color: black;
  line-height: 16px;
`;

export const PhoneNumber = styled.div`
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 400;
  color: rgb(32, 192, 165);
`;

export const Wrapall = styled.div`
  box-sizing: border-box;
  font-size: 13px;
  font-weight: 400;
  color: black;
  line-height: 16px;
`;

export const LeftContainer = styled.div`
  float: left;
  bottom: 0px;
  padding-top: 32px;
  width: 700px;
  height: 170px;
  flex-direction: row;
  line-height: 2em;
`;

export const RightContainer = styled.div`
  display: flex;
  float: right;
  justify-content: flex-end;
  bottom: 0px;
  padding-top: 32px;

  height: 170px;
  flex-direction: row;
  line-height: 2em;
`;

export const ImageButtons = styled.img`
  display: grid;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  float: right;
  margin-left: 15px;
`;

export const LinkButton = styled.div`
  display: flex;
  position: absolute;
  right: 7px;
  bottom: 40px;
  flex-direction: row;
  height: 60px;
  width: 200px;
`;
