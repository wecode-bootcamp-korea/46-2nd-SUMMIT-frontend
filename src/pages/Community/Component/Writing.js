import styled from 'styled-components';
import { Rate } from 'antd';

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Select = styled.select`
  margin: 20px 0;
  width: 100px;
  border: none;
  outline: none;
  font-size: 19px;
`;

export const Click = styled.button`
  margin: 20px 0;
  border: none;
  background: none;
  color: gray;
  font-size: 19px;
`;

export const Input = styled.input`
  padding: 20px 10px 10px 0;
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
  font-size: 19px;
`;

export const Text = styled.textarea`
  border: none;
  padding: 20px 10px 10px 0;
  width: 100%;
  height: 20em;
  outline: none;
  resize: none;
`;

export const CustomRate = styled(Rate)`
  padding: 20px 10px 10px 0;
  border-bottom: 1px solid lightgray;
`;
