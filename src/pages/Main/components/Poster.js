import styled from 'styled-components';

export const PosterWrapper = styled.div`
  width: 100%;
  position: relative;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const PosterImg = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  background-image: ${props => `url(${props.src})`};
`;

export const ShowInfo = styled.div`
  font-size: 15px;
  text-align: center;
`;
