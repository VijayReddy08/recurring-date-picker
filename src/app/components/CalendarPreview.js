"use client";

import '@/app/styles/globals.css'
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useDateContext } from "../context/DateContext";

export default function CalendarPreview() {
  const { recurrence, setStartDate } = useDateContext();
  const [highlightedDates, setHighlightedDates] = useState([]);

  const [currentDate, setCurrentDate] = useState(new Date()); // Initialize with today's date

  useEffect(() => {
    if (currentDate) {
      const generatedDates = generateDates(currentDate, recurrence);
      setHighlightedDates(generatedDates);
    }
  }, [currentDate, recurrence]);

  const generateDates = (start, recurrenceType) => {
    let dates = [];
    let currentDate = new Date(start);
    let endDate = new Date(start);
    endDate.setMonth(currentDate.getMonth() + 1); // Example: Limiting to 3 months ahead

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      incrementDate(currentDate, recurrenceType);
    }

    return dates;
  };

  const incrementDate = (date, recurrenceType) => {
    switch (recurrenceType) {
      case 'daily':
        setCurrentDate(date.setDate(date.getDate() + 1));
        break;
      case 'weekly':
        setCurrentDate(date.setDate(date.getDate() + 1));
        break;
      case 'monthly':
        setCurrentDate(date.setDate(date.getDate() + 1));
        break;
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      return highlightedDates.some(highlightedDate =>
        highlightedDate.toDateString() === date.toDateString()) ? 'highlight' : null;
    }
  };

  const onDateClick = (value, event) => {
    setCurrentDate(value);
    setStartDate(value); // Assuming this function updates context or parent state
  };

  return (
    <div className="mt-4">
      <h5>Recurring Dates Preview:</h5>
      <Calendar
        onChange={onDateClick}
        value={currentDate}
        tileClassName={tileClassName}
      />
      {/* <style jsx>{`
        .highlight {
          background-color: #ffcccb; // Adjust the highlight color if needed
          color: black;
        }
      `}</style> */}
    </div>
  );
}
