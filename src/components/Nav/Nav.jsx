import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/Logodmo.png';
import SearchBar from '../Searchbar';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

const Nav = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleMypage = () => {
    setIsLoggedIn(false);
  };

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
          <Link to="/community">
            <NavLink>커뮤니티</NavLink>
          </Link>
        </NavLinkItem>
      </NavLinks>
      <SearchBar />
      {isLoggedIn ? (
        <NavLinkItemRight>
          <MypageButton onClick={handleMypage}>
            <AiOutlineHeart />
            <BsFillPersonFill />
          </MypageButton>
        </NavLinkItemRight>
      ) : (
        <Link to="/login">
          <LinkText>로그인 / 회원가입</LinkText>
        </Link>
      )}
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.nav`
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
`;

const ImgLogo = styled.img`
  width: 140px;
  justify-content: flex-start;
`;

const NavLinks = styled.div`
  display: flex;
  margin-left: 40px;
  align-items: center;
  margin-right: 40px;
  background-color: white;
`;

const NavLinkItem = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

const NavLinkItemRight = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

const MypageButton = styled.div`
  display: flex;
  margin-left: 40px;
  align-items: center;
  margin-right: 40px;
  background-color: white;
`;

const NavLink = styled.a`
  font-size: 16px;
  color: black;
  text-decoration: none;

  &:hover {
    color: #ff6b6b;
  }
`;

const LinkText = styled.p`
  color: black;
  text-decoration: none;
  margin-left: 30px;
  margin-right: 50px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out;
  }

  &:hover {
    color: #ff6b6b;
  }
`;
