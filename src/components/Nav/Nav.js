import styled from 'styled-components';

export const Navbar = styled.nav`
  position: relative;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 100%;
`;

export const ImgLogo = styled.img`
  width: 140px;
  justify-content: flex-start;
`;

export const NavLinks = styled.div`
  position: absolute;
  left: 300px;
  display: flex;
  margin-left: 40px;
  align-items: center;
  margin-right: 40px;
  background-color: white;
`;

export const NavLinkItem = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

export const NavLinkItemRight = styled.div`
  position: relative;

  height: 60px;
  right: 0;
`;

export const MypageButton = styled.div`
  display: flex;
  margin-left: 40px;
  margin-right: 20px;
  width: 100px;
  height: 60px;
  background-color: white;
  justify-content: space-between;
  font-size: 40px;
  align-items: center;
`;

export const NavLink = styled.span`
  font-size: 16px;
  color: black;
  text-decoration: none;

  &:hover {
    color: #ff6b6b;
  }
`;

export const LinkText = styled.p`
  color: black;
  text-decoration: none;
  margin-left: 30px;
  margin-right: 50px;
  position: relative;
  right: 100px;
  position: absolute;

  &::before {
    content: '';
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

export const ChangeMaker = styled.a`
  display: flex;
  color: black;
  text-decoration: none;
  align-items: center;
  font-size: 13px;
  position: absolute;
  justify-content: center;
  width: 100%;
  height: 50%;
  top: 0;
  background-color: white;
`;

export const LogoutButton = styled.a`
  display: flex;
  color: black;
  text-decoration: none;
  align-items: center;
  font-size: 13px;
  position: absolute;
  justify-content: center;
  width: 100%;
  height: 30%;
  bottom: 0;
  background-color: #f5f5f5;
  color: gray;
`;

export const UserModal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 90px;
  right: 30px;
  width: 220px;
  height: 120px;
  border: 1px solid lightgray;
  z-index: 1;
  background-color: white;
`;

export const SecondModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 90px;
  right: 30px;
  width: 300px;
  border: 1px solid lightgray;
  z-index: 1;
  background-color: white;
`;

export const WishItem = styled.div`
  width: 100%;
  margin: auto;
  padding: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const WishImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const ModalClose = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #888;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

export const ContentsWriter = styled.a`
  display: flex;
  position: absolute;
  margin-right: 40px;
  right: 200px;
  color: black;
  text-decoration: none;
  align-items: center;
  font-size: 13px;
  justify-content: center;
  width: 70px;
  height: 50%;
  background-color: lightgray;
  border-radius: 20px;
`;

export const UnderLines = styled.div`
  width: 90%;
  border-bottom: 1px solid lightgray;
  line-height: 1px;
  text-align: center;
  top: 40px;
`;

export const WishListLength = styled.div`
  width: 16px;
  height: 16px;
  font-size: 16px;
  align-self: flex-end;
`;

export const WishListContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
