import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { APIS } from '../../config';
import {
  Navbar,
  ImgLogo,
  NavLinks,
  NavLinkItemRight,
  MypageButton,
  NavLink,
  UserModal,
  SecondModal,
  ModalClose,
  ChangeMaker,
  LogoutButton,
  ContentsWriter,
  UnderLines,
  WishItem,
  WishImg,
  WishListLength,
  WishListContainer,
} from './Nav';
import Logo from '../../assets/Logodemo.png';
import SearchBar from '../Searchbar';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { WishListAtom } from '../../Recoil/WishListAtom.jsx';
import { ShowListAtom } from '../../Recoil/ShowListAtom.jsx';
import { ShowDetailAtom } from '../../Recoil/ShowDetailAtom.jsx';
import Button from '../Button/Button.jsx';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = location.search;
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isCreator, setIsCreator] = useState(false);
  const [userId, setUserId] = useState('');
  const [wishListData, setWishListData] = useRecoilState(WishListAtom);
  const [showList, setShowList] = useRecoilState(ShowListAtom);
  const [showDetail, setShowDetail] = useRecoilState(ShowDetailAtom);
  const token = localStorage.getItem('token');

  const getWishItem = () => {
    fetch(`${APIS.wish}`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.wishData !== undefined) {
          setWishListData(data.wishData.result);
        }
      });
  };

  useEffect(() => {
    getWishItem();
  }, []);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    setIsLoggedIn(!!token);
    setUserId(token || '');
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserId('');
  };

  const handleUserClick = () => {
    if (showModal && !showSecondModal) {
      setShowModal(false);
    } else if (!showModal && showSecondModal) {
      setShowSecondModal(false);
    } else {
      setShowModal(true);
    }
  };

  const handleDelete = id => {
    fetch(`${APIS.wish}?wishId=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    }).then(res => {
      if (res.status === 204) {
        fetch(`${APIS.showList}${queryString}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: token,
          },
        })
          .then(res => res.json())
          .then(data => {
            getWishItem();
            setShowList(data.shows);
          });
      }
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSecondModalClick = () => {
    if (showSecondModal && !showModal) {
      setShowSecondModal(false);
    } else if (!showSecondModal && showModal) {
      setShowModal(false);
    } else {
      setShowSecondModal(true);
    }
  };

  const closeSecondModal = () => {
    setShowSecondModal(false);
  };

  const handleCreatorMode = () => {
    setIsCreator(!isCreator);
  };

  const isCommunityPage = location.pathname === '/community';
  const isShowListPage = location.pathname === '/showList';

  const shouldShowSearchBar = !(isCommunityPage || isShowListPage);

  const changeMakerText = isCreator ? '유저 전환' : '관리자 전환';

  return (
    <Navbar>
      <Link to="/">
        <ImgLogo src={Logo} />
      </Link>
      <NavLinks>
        <Link to="/showList">
          <NavLink>공연찾기</NavLink>
        </Link>
        <Link to="/community/total">
          <NavLink>커뮤니티</NavLink>
        </Link>
        <SearchBar show={shouldShowSearchBar} />
      </NavLinks>
      <NavLinkItemRight>
        {isLoggedIn ? (
          <MypageButton>
            {isCreator ? (
              <ContentsWriter href="/register">공연등록</ContentsWriter>
            ) : (
              <WishListContainer>
                <AiOutlineHeart onClick={handleSecondModalClick} />
                <WishListLength>{wishListData.length}</WishListLength>
              </WishListContainer>
            )}
            <BsFillPersonFill onClick={handleUserClick} />
          </MypageButton>
        ) : (
          <Link to="/login">
            <NavLink>로그인</NavLink>
          </Link>
        )}
      </NavLinkItemRight>
      {showModal && (
        <UserModal>
          <ChangeMaker href="##" onClick={handleCreatorMode}>
            {changeMakerText}
          </ChangeMaker>
          <UnderLines />
          <LogoutButton href="/" onClick={handleLogout}>
            로그아웃
          </LogoutButton>
          <ModalClose onClick={closeModal} />
        </UserModal>
      )}

      {showSecondModal && (
        <SecondModal>
          {wishListData.length !== 0 ? (
            wishListData.map(item => (
              <div key={item.id}>
                <WishItem>
                  <WishImg
                    src={item.image_url}
                    alt="wishListItemPoster"
                    onClick={() => {
                      navigate(`showDetail/${item.show_id}`);
                    }}
                  />
                  {item.title}
                  <Button
                    size="nav"
                    text="삭제하기"
                    onClick={() => {
                      handleDelete(item.wishId);
                      setShowSecondModal(false);
                    }}
                  />
                </WishItem>
              </div>
            ))
          ) : (
            <WishItem>아직 좋아요 누른 작품이 없습니다.</WishItem>
          )}
          <ModalClose onClick={closeSecondModal} />
        </SecondModal>
      )}
    </Navbar>
  );
};

export default Nav;
