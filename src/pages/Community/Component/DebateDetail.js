import styled, { css } from 'styled-components';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

export const CustomButton = styled(Button)`
  margin: 10px 10px 30px 0;
`;

export const CustomBar = styled(ProgressBar)`
  height: 25px;
`;

export const Page = styled.div`
  width: 100%;
  margin: 20px 0 40px 0;
`;

export const Title = styled.div`
  font-size: 30px;
  margin: 30px 0;
`;

export const Img = styled.img`
  width: 100%;
  margin: 20px 0 40px 0;
`;

export const Comment = styled.div`
  margin: 20px 0;
`;

export const Input = styled.input`
  outline: none;
  width: 92%;
`;

export const Click = styled.button`
  border: none;
  background: none;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentFlex = styled.div`
  display: flex;
  ${props =>
    props.title === 'user' &&
    css`
      padding: 10px 0 30px 0;
      flex-direction: column;
      border-bottom: 1px solid lightgray;
    `}
  margin: 10px 0;
`;

export const CommentEl = styled.div`
  margin-right: 10px;
  ${props =>
    props.title === 'small' &&
    css`
      border: 1px solid green;
      background-color: green;
      color: white;
    `}
  color: ${props => props.title === 'time' && 'gray'}
`;
