import styled from 'styled-components';
import { lighten, darken } from 'polished';
export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 150px;
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
  justify-content: flex-start;
  padding-left: 20px;
  font-size: 21px;
  &:hover {
    background: ${lighten(0.1, '#dfdfdf')};
  }
  &:active {
    background: ${darken(0.1, '#dfdfdf')};
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
