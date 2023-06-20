import React from 'react';
import { SearchBarWrap, SearchImg, SearchBarInput } from './Search';

const Search = ({ searchInput, showSearch }) => {
  return (
    <SearchBarWrap>
      <SearchImg />
      <SearchBarInput
        type="text"
        placeholder="공연 검색"
        value={searchInput}
        onChange={showSearch}
      />
    </SearchBarWrap>
  );
};

export default Search;
