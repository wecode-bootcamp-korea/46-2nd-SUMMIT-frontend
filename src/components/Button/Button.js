import styled, { css } from 'styled-components';

const large = css`
  width: 160px;
  height: 40px;
`;

const medium = css`
  width: 140px;
  height: 40px;
`;

const showcard = css`
  width: 200px;
  height: 75px;
`;

const nav = css`
  width: 80px;
  height: 20px;
`;

const table = {
  large,
  medium,
  showcard,
  nav,
};

export const ButtonStyle = styled.button`
  background-color: #831010;
  ${props => table[props.size] || 'auto'};
  color: white;
  border: none;
  border-radius: 2px;
  transition: background-color 1s ease-in;

  &:hover {
    background-color: white;
    color: #831010;
    border: 1px solid #831010;
    opacity: 0.8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;
