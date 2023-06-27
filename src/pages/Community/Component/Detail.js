import styled, { css } from 'styled-components';

export const Category = styled.div`
  color: gray;
  margin: 10px 5px 10px 0;
  font-size: 14px;
  ${props =>
    props.title === 'subject' &&
    css`
      color: black;
      font-size: 25px;
      margin: 20px 0;
    `}
`;

export const Flex = styled.div`
  display: flex;
  ${props =>
    props.title === 'user' &&
    css`
      justify-content: space-between;
      margin: 10px 0;
      padding-bottom: 20px;
      border-bottom: 1px solid ${props => props.theme.lightGrey};
    `}
`;

export const FlexBox = styled.div`
  margin: 20px 0;
`;

export const Content = styled.div`
  white-space: pre-wrap;
  margin: 60px 0 50px 0;
`;
