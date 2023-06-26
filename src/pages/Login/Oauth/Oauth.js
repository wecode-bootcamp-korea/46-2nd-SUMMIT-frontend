import styled from 'styled-components';

export const OauthPage = styled.div`
  height: 100vh;
  background-color: black;
  text-align: center;
  background: url(image/theatre.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    background: linear-gradient(to top, black, transparent);
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

export const LoadingMessage = styled.div`
  color: white;
  margin: 20px 0;
  font-size: 1rem;
`;
