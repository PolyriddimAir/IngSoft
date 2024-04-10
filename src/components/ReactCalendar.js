import React from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from 'dayjs';

function ReactCalendar() {

  const localizer = dayjsLocalizer(dayjs)

  return (
    <Calendar
      localizer={localizer}
    />
  );
}

export default ReactCalendar;