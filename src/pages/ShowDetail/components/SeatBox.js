import styled from 'styled-components';
import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiOutlineCaretDown,
} from 'react-icons/ai';
import { darken, lighten } from 'polished';

export const SeatBoxsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: none;
`;

export const SeatsWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: none;
  padding: 30px;
  border: 2px solid lightgray;
  border-radius: 10px;
  margin: 10px 0px;
`;

export const SeatGradeWrap = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const SeatGrade = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-left: 15px;
  font-size: 23px;
`;

export const SeatInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SeatInfo = styled.div`
  margin-left: 43px;
  font-size: 22px;
  font-weight: 900;
  width: 100%;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

export const DropWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const DropButton = styled.button`
  width: 150px;
  height: 30px;
  background: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
`;

export const DropMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 150px;
  background-color: #333333;
  list-style: none;
  margin: 5px 0 0 0;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  border: 1px solid #dfdfdf;
  max-height: 100px;
  overflow-y: scroll;
`;

export const TotalPrice = styled.span`
  width: 150px;
  display: flex;
  align-items: center;
`;

export const DropItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  padding: 6px 0px;

  &:hover {
    background: ${lighten(0.1, '#333333')};
    cursor: pointer;
  }
  &:active {
    background: ${lighten(0.1, '#333333')};
  }
`;

export const CheckImg = styled(AiFillCheckCircle)`
  width: 30px;
  height: 30px;
  color: #831010;
`;

export const CheckedImg = styled(AiOutlineCheckCircle)`
  width: 40px;
  height: 30px;
`;

export const SelectTicket = styled.select`
  width: 150px;
  height: 50px;
  border: none;
  text-align: center;

  &:focus {
    border: none;
  }
`;

export const OptionTicket = styled.option`
  width: 100px;
  height: 100px;
  text-align: center;
`;

export const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const ArrowDownImg = styled(AiOutlineCaretDown)`
  width: 20px;
  height: 20px;
`;
