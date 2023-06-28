import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import CardList from '../../components/CardList/CardList.jsx';
import Search from '../../components/Search/Search.jsx';
import Drop from './Components/Drop.jsx';
import { APIS } from '../../config';
import {
  Container,
  Title,
  DropWrapper,
  DropButton,
  DropMenu,
  Header,
  FilterWrap,
  CardListWrap,
  DropItem,
  ShowMore,
} from './ShowList';

const ShowList = () => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const token = localStorage.getItem('token');
  const [showList, setShowList] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryString = location.search;
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  //TODO 공연정보 MOCK
  // useEffect(() => {
  //   fetch('/data/showData.json')
  //     .then(res => res.json())
  //     .then(data => setShowList(data));
  // }, []);

  // const getAllItems = () => {
  //   fetch(`${APIS.showList}`)
  //     .then(res => res.json())
  //     .then(data => setShowList(data.showMain));
  // };

  // const getFilteredItems = () => {
  //   fetch(`${APIS.showList}${queryString}`)
  //     .then(res => res.json())
  //     .then(data => setShowList(data.shows));
  // };

  // useEffect(() => {
  //   if (queryString) {
  //     getFilteredItems();
  //   } else {
  //     getAllItems();
  //   }
  // }, [queryString]);

  const renderShowList = () => {
    fetch(`${APIS.showList}${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setShowList(data.shows));
  };

  useEffect(() => {
    renderShowList();
  }, [queryString]);

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

  const handleGenreBoxOpen = () => {
    setIsDropOpen(prev => !prev);
  };
  const handleRegionBoxOpen = () => {
    setIsRegionOpen(prev => !prev);
  };
  const handleSortBoxOpen = () => {
    setIsSortOpen(prev => !prev);
  };

  const filteredItem = showList.filter(show =>
    show.title.includes(searchInput)
  );

  const appendPagination = () => {
    searchParams.set('offset', 0);
    searchParams.set('limit', Number(limit) + 4);
    setSearchParams(searchParams);
  };

  return (
    <Container>
      <Header>
        <FilterWrap>
          <DropWrapper ref={dropRef}>
            <DropButton onClick={handleGenreBoxOpen}>테마별</DropButton>
            <DropMenu isOpen={isDropOpen}>
              {GENRE_LIST.map(item => (
                <DropItem key={item.id}>
                  <Drop item={item} />
                </DropItem>
              ))}
            </DropMenu>
          </DropWrapper>
          <DropWrapper ref={regionRef}>
            <DropButton onClick={handleRegionBoxOpen}>지역별</DropButton>
            <DropMenu isOpen={isRegionOpen}>
              {REGION_LIST.map(item => (
                <DropItem key={item.id}>
                  <Drop item={item} />
                </DropItem>
              ))}
            </DropMenu>
          </DropWrapper>
        </FilterWrap>
        <Search searchInput={searchInput} showSearch={showSearch} />
        <DropWrapper ref={sortRef}>
          <DropButton onClick={handleSortBoxOpen}>정렬</DropButton>
          <DropMenu isOpen={isSortOpen}>
            {SORT_LIST.map(item => (
              <DropItem key={item.id}>
                <Drop item={item} />
              </DropItem>
            ))}
          </DropMenu>
        </DropWrapper>
      </Header>
      <CardListWrap>
        <CardList
          showList={filteredItem}
          rerender={() => {
            renderShowList();
          }}
        />
      </CardListWrap>
      <ShowMore onClick={appendPagination}>더보기</ShowMore>
    </Container>
  );
};

export default ShowList;

const GENRE_LIST = [
  { id: 1, list: '로맨스', filter: 'genreId' },
  { id: 2, list: '코미디', filter: 'genreId' },
  { id: 3, list: '공포', filter: 'genreId' },
  { id: 4, list: '드라마', filter: 'genreId' },
];

const REGION_LIST = [
  { id: '서울', list: '서울', filter: 'address' },
  { id: '경기', list: '경기', filter: 'address' },
  { id: '인천', list: '인천', filter: 'address' },
  { id: '강원', list: '강원', filter: 'address' },
];

const SORT_LIST = [
  { id: 'ratingDesc', list: '인기순', filter: 'orderBy' },
  { id: 'startDesc', list: '최신순', filter: 'orderBy' },
  { id: 'endDesc', list: '종료임박순', filter: 'orderBy' },
  { id: 'wishDesc', list: '리뷰많은순', filter: 'orderBy' },
];
