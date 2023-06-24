import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Title,
  DropWrapper,
  DropItem,
  DropButton,
  DropMenu,
  Header,
  FilterWrap,
  CardListWrap,
} from './ShowList';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import CardList from '../../components/CardList/CardList.jsx';
import Search from '../../components/Search/Search.jsx';
import { useSearchParams } from 'react-router-dom';

const ShowList = () => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const [showList, setShowList] = useState([]);
  const [searchInput, setSearchInput] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  //TODO MOCK DATA용
  useEffect(() => {
    fetch('/data/showDataMock.json')
      .then(res => res.json())
      .then(data => setShowList(data));
  }, []);

  // useEffect((`http:10.58.52.97:5000/shows?`) => {
  //   fetch('/data/showData.json')
  //     .then(res => res.json())
  //     .then(data => setShowList(data));
  // }, []);

  const dropRef = useRef();
  const regionRef = useRef();
  const sortRef = useRef();
  useOnClickOutside(dropRef, () => setIsDropOpen(false));
  useOnClickOutside(regionRef, () => setIsRegionOpen(false));
  useOnClickOutside(sortRef, () => setIsSortOpen(false));
  const showSearch = e => {
    const { value } = e.target;
    setSearchInput(value);
  };

  const handleDropOnClick = () => {
    setIsDropOpen(prev => !prev);
  };

  const handleRegionOnClick = () => {
    setIsRegionOpen(prev => !prev);
  };

  const handleSortOnClick = () => {
    setIsSortOpen(prev => !prev);
  };

  const filteredItem = showList.filter(show =>
    show.title.includes(searchInput)
  );

  return (
    <Container>
      <Title>공연찾기</Title>
      <Header>
        <FilterWrap>
          <DropWrapper ref={dropRef}>
            <DropButton onClick={handleDropOnClick}>테마별</DropButton>
            <DropMenu isOpen={isDropOpen}>
              {THEME_LIST.map(el => (
                <DropItem key={el.id}>{el.value}</DropItem>
              ))}
            </DropMenu>
          </DropWrapper>
          <DropWrapper ref={regionRef}>
            <DropButton onClick={handleRegionOnClick}>지역별</DropButton>
            <DropMenu isOpen={isRegionOpen}>
              {REGION_LIST.map(el => (
                <DropItem key={el.id}>{el.value}</DropItem>
              ))}
            </DropMenu>
          </DropWrapper>
        </FilterWrap>
        <Search searchInput={searchInput} showSearch={showSearch} />
        <DropWrapper>
          <DropButton onClick={handleSortOnClick}>정렬</DropButton>
          <DropMenu isOpen={isSortOpen}>
            {SORT_LIST.map(el => (
              <DropItem key={el.id}>{el.value}</DropItem>
            ))}
          </DropMenu>
        </DropWrapper>
      </Header>
      <CardListWrap>
        <CardList showList={filteredItem} />
      </CardListWrap>
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
