import styled from 'styled-components';

export const LoginPage = styled.div`
  height: 100vh;
  background-color: black;
  text-align: center;
  background: url(image/theatre.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &:before {
    content: '';
    background: linear-gradient(to top, black, transparent);
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

export const LoginContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 450px;
  top: 50%;
  left: 50%;
  height: 400px;
  transform: translate(-50%, -50%);
  margin: auto;
  padding: 10px;
  border-radius: 10px;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: white;
`;

export const Description = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 20px;
  color: white;
`;

export const LoginLinkBtn = styled.button`
  background-color: #fee500;
  color: #000000 85%;
  height: 45px;
  width: 140px;
  border: none;
  border-radius: 4px;
`;
