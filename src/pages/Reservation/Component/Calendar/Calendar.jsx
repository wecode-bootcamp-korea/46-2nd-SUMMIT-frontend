import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarContainer, SelectedDate } from './Calendar';
import { ko } from 'date-fns/esm/locale';

const Calendar = () => {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  const [defaultDate, setDefaultDate] = useState(today);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <>
      <CalendarContainer>
        <DatePicker
          locale={ko}
          selected={selectedDate}
          onChange={handleDateChange}
          defaultDate={defaultDate}
          selectedDate={selectedDate}
          minDate={new Date()}
          dateFormatCalendar="yyyy년 MMMM"
          inline
        />
      </CalendarContainer>
      <SelectedDate>
        {selectedDate.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
        })}
      </SelectedDate>
    </>
  );
};

export default Calendar;
