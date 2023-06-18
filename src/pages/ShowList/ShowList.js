import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

export const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`;

export const DropWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const DropButton = styled.button`
  width: 150px;
  height: 30px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${lighten(0.1, '#dfdfdf')};
    cursor: pointer;
  }
  &:active {
    background: ${darken(0.1, '#dfdfdf')};
  }
`;

export const DropMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 150px;
  background-color: #ffffff;
  list-style: none;
  margin: 5px 0 0 0;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

export const DropItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${lighten(0.1, '#dfdfdf')};
  }
  &:active {
    background: ${darken(0.1, '#dfdfdf')};
  }
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;
  height: 30px;
  background-color: #dfdfdf;
`;

export const SearchBarImg = styled.img`
  width: 30px;
  height: 30px;
  background-image: url(${props => props.src});
`;

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 20px;
  text-align: center;
  outline: none;
  border: none;
  background-color: #dfdfdf;

  &:focus {
    outline: 1px solid #830f11;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ShowInfo = styled.div`
  font-size: 15px;
  text-align: center;
`;

export const ShowWrap = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
`;

export const FilterWrap = styled.div`
  display: flex;
`;
