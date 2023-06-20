import styled, { css } from 'styled-components';

export const Category = styled.div`
  color: ${props => props.theme.middleGrey};
  ${props =>
    props.title === 'subject' &&
    css`
      font-size: 16px;
      margin: 10px 0;
    `}
  ${props =>
    props.title === 'flex' &&
    css`
      margin-right: 10px;
    `}
`;

export const Flex = styled.div`
  color: ${props => props.theme.middleGrey};
  display: flex;
  margin: 15px 0 30px 0;
  ${props =>
    props.title === 'comment' &&
    css`
      justify-content: space-between;
    `}
`;

export const FlexBox = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid ${props => props.theme.lightgray};
`;
