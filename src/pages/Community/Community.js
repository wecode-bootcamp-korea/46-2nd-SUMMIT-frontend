import styled, { css } from 'styled-components';

export const Flex = styled.div`
  display: flex;
  margin-bottom: 40px;
  ${props =>
    props.title === 'subject' &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.title === 'article' &&
    css`
      flex-direction: column;
      margin-left: 85px;
      width: 600px;
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
  width: 970px;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: 40px;
  margin: 40px 0 60px 0;
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
  margin: 40px 85px 60px 0px;
`;

export const Click = styled.button`
  border: none;
  background-color: rgb(244, 244, 244);
`;
