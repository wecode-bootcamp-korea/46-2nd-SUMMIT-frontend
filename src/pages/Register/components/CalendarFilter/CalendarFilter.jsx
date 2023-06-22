import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarFilterContainer } from './CalendarFilter';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarFilter = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <CalendarFilterContainer>
      <DatePicker
        selected={startDate}
        onChange={date => {
          setStartDate(date);
        }}
        startDate={startDate}
        minDate={startDate}
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        endDate={endDate}
        minDate={startDate}
      />
    </CalendarFilterContainer>
  );
};

export default CalendarFilter;
