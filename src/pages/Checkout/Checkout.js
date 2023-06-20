import styled, { css } from 'styled-components';

export const Page = styled.div`
  max-width: ${props => props.title === 'checkout' && '37.5rem'};
  width: ${props => props.title === 'commun' && '60.625rem'};
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: ${props => (props.size === 'big' ? '30px' : '20px')};
  padding: ${props =>
    props.size === 'big' ? '40px 0 20px 0' : '60px 0 20px 0'};
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 20px;
`;

export const AgreeBtn = styled.button`
  ${props =>
    props.type === 'point' &&
    css`
      margin: 0 10px;
    `};
  border: none;
  background-color: white;
`;

export const PointInput = styled.input.attrs({ type: 'text' })`
  width: 100px;
  height: 25px;
  margin: 7px 0 0 -46px;
  outline: none;
  text-align: right;
`;

export const InfBox = styled.div`
  justify-content: ${props => props.type === 'btn' && 'space-between'};
  display: flex;
`;

export const InfTitle = styled.div`
  ${props =>
    props.title === 'first' &&
    css`
      min-width: 5rem;
      margin-right: 1.25rem;
      color: ${props => props.theme.lightGrey};
    `}
  padding: 10px 0;
`;

export const TicketCheck = styled.div`
  padding-right: 40px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

export const Textarea = styled.textarea`
  width: 596px;
  height: 122px;
  resize: none;
  margin: 10px 0;
`;
