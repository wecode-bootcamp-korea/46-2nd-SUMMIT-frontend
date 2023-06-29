import styled from 'styled-components';
import { lighten, darken } from 'polished';
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #333333;
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 150px;
  margin-bottom: 100px;
`;

export const DropWrapper = styled.div`
  width: 90px;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  display: flex;
`;

export const DropButton = styled.div`
  width: 125px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  color: white;
  background-color: #252526;
  border: 1px solid white;

  &:hover {
    background: ${darken(0.1, '#333333')};
    cursor: pointer;
  }
  &:active {
    background: ${darken(0.1, '#333333')};
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
  justify-content: flex-start;
  font-size: 16px;
  color: white;
  background-color: #252526;
  &:hover {
    background: ${darken(0.1, '#333333')};
  }
  &:active {
    background: ${darken(0.1, '#333333')};
  }
`;

export const ShowWrap = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
`;

export const FilterWrap = styled.div`
  display: flex;
`;

export const CardListWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: 550px;
  margin: 0 auto;
  max-width: 1440px;
  justify-content: center;
  gap: 8px 12px;
  color: white;
  padding-bottom: 50px;
`;

export const ShowMoreBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: white;
  border: none;

  &:hover {
    background: ${darken(0.1, '#dfdfdf')};
  }
  &:focus {
    background: ${darken(0.1, '#dfdfdf')};
  }
`;
