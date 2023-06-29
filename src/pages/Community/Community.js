import styled, { css } from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  ${props =>
    props.title === 'subject' &&
    css`
      justify-content: space-around;
    `}

  ${props =>
    props.title === 'article' &&
    css`
      flex-direction: column;
      margin-left: 150px;
      width: 800px;
    `}
  ${props =>
    props.title === 'click' &&
    css`
      justify-content: end;
    `}
`;

export const ExtraFlex = styled.div`
  display: flex;
  ${props =>
    props.title === 'article' &&
    css`
      flex-direction: column;
    `}
`;

export const Page = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: 40px;
  margin-top: 50px;
`;

export const Input = styled.input`
  height: 100%;
  width: 92%;
  padding: 0px;
  outline: none;
  border: none;
  background: none;
  font-size: 16px;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 44px;
  margin: 20px 0;
  padding: 8px 16px;
  background-color: rgb(244, 244, 244);
`;

export const ButtonBox = styled.div`
  margin: 50px 0px 60px 500px;
`;

export const Click = styled.button`
  font-size: 17px;
  border: none;
  background-color: rgb(244, 244, 244);
`;
