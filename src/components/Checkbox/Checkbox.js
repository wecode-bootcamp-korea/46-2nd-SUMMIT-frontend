import styled, { css } from 'styled-components';

const reservation = css`
  width: 400px;
`;

const componentTable = {
  reservation,
};

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: ${props =>
    props.clicked ? `1px solid white` : `1px solid ${props.theme.mainColor}`};
  ${props => componentTable[props.type]};
  border-radius: 4px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  background-color: ${props =>
    props.clicked ? props.theme.mainColor : 'white'};
  padding: 10px 0;
`;

export const CheckboxRadio = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  display: inline-block;
  width: 28px;
  height: 28px;
  background-image: ${props =>
    props.clicked ? `url("image/unchecked.png")` : `url("image/checked.png")`};
  background-size: cover;
  margin-top: 0;
`;

export const CheckboxLabel = styled.label`
  color: ${props => (props.clicked ? 'white' : 'black')};
  font-weight: 400;
  text-align: center;
  margin-left: 10px;
  font-size: 20px;
`;

export const CheckboxDetail = styled.div`
  display: ${props => (props.clicked ? 'block' : 'none')};
  height: 20px;
  font-weight: 300;
  margin: 5px 0px 5px 30px;
  background-color: transparent;
  font-size: 20px;
`;
