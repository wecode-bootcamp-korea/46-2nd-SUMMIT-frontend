import React, { useState, useEffect } from 'react';
import {
  Container,
  Title,
  DropWrapper,
  DropItem,
  DropButton,
  DropMenu,
  Header,
  SearchBarInput,
  SearchBarWrapper,
  SearchBarImg,
  CardWrap,
  ShowInfo,
  ShowWrap,
  FilterWrap,
} from './ShowList';
import ShowCard from '../../components/ShowCard/ShowCard.jsx';
import searchSrc from '../../assets/search.png';

const ShowList = () => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [show, setShow] = useState([]);

  const handleDropOnClick = () => {
    setIsDropOpen(prev => !prev);
  };

  const handleRegionOnClick = () => {
    setIsRegionOpen(prev => !prev);
  };

  const handleSortOnClick = () => {
    setIsSortOpen(prev => !prev);
  };

  useEffect(() => {
    fetch('/data/showData.json')
      .then(res => res.json())
      .then(data => setShow(data));
  });

  return (
    <Container>
      <Title>공연찾기</Title>
      <Header>
        <FilterWrap>
          <DropWrapper>
            <DropButton onClick={handleDropOnClick}>테마별</DropButton>
            <DropMenu isOpen={isDropOpen}>
              {THEME_LIST.map(el => (
                <DropItem key={el.id}>{el.value}</DropItem>
              ))}
            </DropMenu>
          </DropWrapper>
          <DropWrapper>
            <DropButton onClick={handleRegionOnClick}>지역별</DropButton>
            <DropMenu isOpen={isRegionOpen}>
              {REGION_LIST.map(el => (
                <DropItem key={el.id}>{el.value}</DropItem>
              ))}
            </DropMenu>
          </DropWrapper>
        </FilterWrap>
        <SearchBarWrapper>
          <SearchBarImg src={searchSrc} />
          <SearchBarInput type="text" placeholder="공연 검색" />
        </SearchBarWrapper>
        <DropWrapper>
          <DropButton onClick={handleSortOnClick}>정렬</DropButton>
          <DropMenu isOpen={isSortOpen}>
            {SORT_LIST.map(el => (
              <DropItem key={el.id}>{el.value}</DropItem>
            ))}
          </DropMenu>
        </DropWrapper>
      </Header>
      <CardWrap>
        {show.map(el => (
          <ShowWrap key={el.id}>
            <ShowCard src={el.url} />
            <ShowInfo>
              {el.title}
              <br />
              {el.detail_address}
              <br />
              {el.start_at}~{el.end_at}
            </ShowInfo>
          </ShowWrap>
        ))}
      </CardWrap>
    </Container>
  );
};

export default ShowList;

const THEME_LIST = [
  { id: 1, value: '로맨스' },
  { id: 2, value: '코미디' },
  { id: 3, value: '공포' },
  { id: 4, value: '우정' },
];

const REGION_LIST = [
  { id: 1, value: '서울' },
  { id: 2, value: '경기' },
  { id: 3, value: '인천' },
  { id: 4, value: '강원' },
];

const SORT_LIST = [
  { id: 1, value: '인기순' },
  { id: 2, value: '최신순' },
  { id: 3, value: '종료임박순' },
  { id: 4, value: '리뷰많은순' },
];
