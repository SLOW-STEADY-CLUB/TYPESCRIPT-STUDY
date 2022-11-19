import React from 'react'
import styled from 'styled-components';

import Calendar from 'react-calendar';
import "./Calendal.css"


const Calendars : React.FC =() => {
  return (
    <div>
        <Calendar/>
    </div>
  )
}

const CustomCalendar = styled(Calendar)`
  .react-calendar {
    border: none !important;
  }
  .react-calendar__tile--now {
    background: none;
  }
  .react-calendar__tile:disabled,
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus,
  .react-calendar__tile--hasActive,
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus,
  .react-calendar__tile--active,
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus,
  .react-calendar__tile--hover {
    background: none;
    abbr {
      display: block;
      width: 2.6rem;
      height: 2.6rem;
      line-height: 2.6rem;
      border-radius: 50%;
      background: red;
    }
  }
`;

const Highlight = styled.div`
  position: absolute;
  bottom: 0;

  width: 0.5rem;
  height: 0.5rem;

  border-radius: 50%;
  background-color: red;
`;

export default Calendars