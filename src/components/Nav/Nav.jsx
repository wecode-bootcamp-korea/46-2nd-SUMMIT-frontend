import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Navbar,
  ImgLogo,
  NavLinks,
  NavLinkItem,
  NavLinkItemRight,
  MypageButton,
  NavLink,
  LinkText,
  UserModal,
  SecondModal,
  ModalClose,
  ChangeMaker,
  LogoutButton,
  ContentsWriter,
  UnderLines,
} from './Nav';
import Logo from '../../assets/Logodmo.png';
import SearchBar from '../Searchbar';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isCreator, setIsCreator] = useState(false);
  const [userId, setUserId] = useState('');

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
    setIsCreator(true);
  };

  const isCommunityPage = location.pathname === '/community';
  const isShowListPage = location.pathname === '/showList';

  return (
    <Navbar>
      <Link to="/">
        <ImgLogo src={Logo} />
      </Link>
      <NavLinks>
        <NavLinkItem>
          <Link to="/showList">
            <NavLink>공연찾기</NavLink>
          </Link>
        </NavLinkItem>
        <NavLinkItem>
          <Link to="/community/total">
            <NavLink>커뮤니티</NavLink>
          </Link>
        </NavLinkItem>
      </NavLinks>
      {isCommunityPage || isShowListPage ? null : <SearchBar />}
      {isLoggedIn ? (
        <NavLinkItemRight>
          <MypageButton>
            {isCreator ? (
              <ContentsWriter href="##">공연등록</ContentsWriter>
            ) : (
              <AiOutlineHeart onClick={handleSecondModalClick} />
            )}
            <BsFillPersonFill onClick={handleUserClick} />
          </MypageButton>
        </NavLinkItemRight>
      ) : (
        <Link to="/login">
          <LinkText>로그인</LinkText>
        </Link>
      )}
      {showModal && (
        <UserModal>
          <ChangeMaker href="##" onClick={handleCreatorMode}>
            제작자 전환
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
          <ModalClose onClick={closeSecondModal} />
        </SecondModal>
      )}
    </Navbar>
  );
};

export default Nav;
