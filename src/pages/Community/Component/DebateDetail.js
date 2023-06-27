import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styled, { css } from 'styled-components';

export const AgreeButton = styled(Button)`
  border: 1px solid green;
  color: green;
  margin: 10px 10px 30px 0;
  &:hover {
    background-color: green;
    color: white;
  }
  ${props =>
    props.variant &&
    css`
      background-color: green;
      color: white;
    `}
`;

export const DisAgreeButton = styled(Button)`
  border: 1px solid red;
  color: red;
  margin: 10px 10px 30px 0;
  &:hover {
    background-color: red;
    color: white;
  }
  ${props =>
    props.variant === false &&
    css`
      background-color: red;
      color: white;
    `}
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
  color: ${props => props.title === 'time' && 'gray'};
`;

export const Agree = styled.div`
  margin-right: 10px;
  ${props =>
    props.title
      ? css`
          border: 1px solid green;
          background-color: green;
          color: white;
        `
      : css`
          border: 1px solid red;
          background-color: red;
          color: white;
        `}
`;
