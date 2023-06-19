import styled from 'styled-components';

export const Navbar = styled.nav`
  position: relative;
  background-image: linear-gradient(to right, black, #41474b);
  display: flex;
  justify-content: space-between;
  min-width: 1300px;
  width: 100%;
  align-items: center;
`;

export const ImgLogo = styled.img`
  width: 140px;
  justify-content: flex-start;
`;

export const NavLinks = styled.div`
  min-width: 700px;
  position: absolute;
  left: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NavLinkItemRight = styled.div`
  position: relative;
  display: flex;
  margin-left: 40px;
  margin-right: 20px;
  width: 100px;
  height: 60px;
  justify-content: flex-end;
  font-size: 40px;
  align-items: center;
  width: 200px;
`;

export const MypageButton = styled.div`
  display: flex;
  margin-left: 70px;
  margin-right: 20px;
  width: 100px;
  height: 60px;
  justify-content: flex-end;
  font-size: 40px;
  align-items: center;
  width: 200px;
  color: white;
`;

export const NavLink = styled.span`
  font-size: 16px;
  color: white;
  text-decoration: none;
  margin-right: 50px;
  display: flex;

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
  height: 48%;
  bottom: 0;
  color: gray;
`;

export const UserModal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 81px;
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
  justify-content: center;
  align-items: center;
  top: 81px;
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
  margin-right: 60px;
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
