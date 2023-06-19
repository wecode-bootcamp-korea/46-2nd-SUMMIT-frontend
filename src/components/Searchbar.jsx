import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <Searching>
      <TextInput type="text" placeholder="검색" />
      <ClickButton type="button">
        <BsSearch />
      </ClickButton>
    </Searching>
  );
};

export default SearchBar;

const Searching = styled.div`
  padding: 10px;
  margin-left: 200px;
  display: flex;
  background-color: white;
  position: relative;
  width: 300px;
  height: 40px;
  margin: 20px auto;
  border: 1px solid #bdc1c6;
`;

const TextInput = styled.input`
  width: 90%;
  height: 100%;
  border-color: white;
  border: 0px;
  font-size: 16px;
  outline: none;
`;

const ClickButton = styled.button`
  width: 20%;
  height: 100%;
  color: black;
  border: 0px;
  font-size: 16px;
  outline: none;
`;
