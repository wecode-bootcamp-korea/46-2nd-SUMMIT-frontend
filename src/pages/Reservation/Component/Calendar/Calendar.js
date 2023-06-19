import styled from 'styled-components';

export const CalendarContainer = styled.div`
  margin: 40px auto 30px auto;
  width: 100%;
  position: relative;
  left: 40px;

  .react-datepicker {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    display: inline-block;
    width: 400px;
    border: 1px solid #881010;
    height: 350px;
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

  .react-datepicker__day {
    display: inline-block;
    text-align: center;
    margin: 0.2rem;
    border-radius: 0.3rem;
  }

  .react-datepicker__day-name {
    color: #881010;
    width: 40px;
    margin: 5px;
    height: 30px;
  }

  .react-datepicker__day {
    width: 40px;
    height: 40px;
    margin: 5px;
    position: relative;

    &:hover {
      background-color: rgba(136, 16, 16, 0.4);
      border-radius: 50%;
      transition: all 0.2s ease-out;
    }
  }

  .react-datepicker__day--today {
    color: #881010;

    &::before {
      content: 'TODAY';
      position: absolute;
      font-size: 0.5rem;
      top: 1rem;
      left: 50%;
      transform: translate(-50%);
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 300;
    }
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

  .react-datepicker__navigation-icon::before {
    border-color: #881010;
  }
`;

export const SelectedDate = styled.span`
  margin-left: 40px;
  margin-bottom: 50px;
`;
