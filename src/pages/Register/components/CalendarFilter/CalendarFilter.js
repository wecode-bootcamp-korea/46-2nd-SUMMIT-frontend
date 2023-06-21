import styled from 'styled-components';

export const CalendarFilterContainer = styled.div`
  display: flex;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container.input {
    width: 100%;
  }

  .react-datepicker__input-container.span {
    display: none;
  }

  .react-datepicker {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    display: inline-block;
    border: 1px solid #881010;
    overflow: hidden;
  }

  .react-datepicker__header {
    text-align: center;
    margin-bottom: 10px;
    background-color: transparent;
    border-bottom: none;

    .react-datepicker__month {
      height: 100%;
      padding: 20px 0;
    }

    .react-datepicker__current-month {
      margin: 10px;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 500;
      font-size: 1rem;
      color: #881010;
    }
  }

  .react-datepicker__navigation {
    top: 15px;
  }

  .react-datepicker__day--selected {
    border: 1px solid rgb(136, 16, 16);
    background-color: rgba(136, 16, 16, 0.8);
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: transparent;
  }
`;
