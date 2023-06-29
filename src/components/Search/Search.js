import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBarWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 30px;
  background-color: #dfdfdf;
  margin-left: 250px;
  margin-right: 250px;
  border-radius: 18px;
  &:focus {
    outline: 1px solid #830f11;
  }
`;

export const SearchImg = styled(AiOutlineSearch)`
  width: 30px;
  height: 30px;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 20px;
  text-align: center;
  outline: none;
  border: none;
  background-color: #dfdfdf;
  border-radius: 18px;
`;
