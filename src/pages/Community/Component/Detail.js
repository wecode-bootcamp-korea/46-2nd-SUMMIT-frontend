import styled, { css } from 'styled-components';

export const Category = styled.div`
  color: black;
  margin: 10px 3px;
  ${props =>
    props.title === 'subject' &&
    css`
      font-size: 25px;
      margin: 40px 0;
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
  margin: 40px 0 30px 0;
`;
