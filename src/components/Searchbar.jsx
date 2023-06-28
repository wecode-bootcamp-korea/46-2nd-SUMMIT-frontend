import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ show }) => {
  return (
    <Searchbarsearching show={show}>
      <TextInput type="text" placeholder="검색" />

      <ClickButton type="button">
        <BsSearch />
      </ClickButton>
    </Searchbarsearching>
  );
};

export default SearchBar;

const Searchbarsearching = styled.div`
  padding: 10px;
  margin-left: 300px;
  display: flex;
  background-color: white;
  position: relative;
  width: 300px;
  height: 40px;
  border: 1px solid #bdc1c6;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
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
