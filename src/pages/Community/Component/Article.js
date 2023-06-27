import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const LinkTo = styled(Link)`
  text-decoration: none;
`;

export const Category = styled.div`
  color: gray;
  ${props =>
    props.title === 'subject' &&
    css`
      color: black;
      font-size: 16px;
      margin-bottom: 20px;
    `}
  ${props =>
    props.title === 'flex' &&
    css`
      font-size: 12px;
      color: gray;
      margin-right: 10px;
    `}
`;

export const Grade = styled.div`
  color: #f04040;
  font-size: 14px;
`;

export const Flex = styled.div`
  color: ${props => props.theme.middleGrey};
  display: flex;
  margin: 15px 0;
  ${props =>
    props.title === 'comment' &&
    css`
      margin: 30px 0 15px 0;
      justify-content: space-between;
      color: gray;
      font-size: 12px;
    `}
`;

export const FlexBox = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid lightgrey;
`;
