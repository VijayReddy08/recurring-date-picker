// src/app/components/CalendarPreview.js
"use client"; // It's for future changes
import { useDateContext } from "../context/DateContext";

export default function CalendarPreview() {
  const { startDate, recurrence, customValue } = useDateContext();

  // A simple demonstration of how to use the recurrence.
  const generateDates = () => {
    if (!startDate || recurrence === "none") return [];

    const dates = [];
    const start = new Date(startDate);
    const daysInWeek = 7;

    for (let i = 0; i < 12; i++) {
      let newDate = new Date(start);
      if (recurrence === "daily") {
        newDate.setDate(start.getDate() + i * customValue);
      } else if (recurrence === "weekly") {
        newDate.setDate(start.getDate() + i * daysInWeek * customValue);
      } else if (recurrence === "monthly") {
        newDate.setMonth(start.getMonth() + i * customValue);
      } else if (recurrence === "yearly") {
        newDate.setFullYear(start.getFullYear() + i * customValue);
      }
      dates.push(newDate.toDateString());
    }
    return dates;
  };

  return (
    <div className="mt-4">
      <h5>Preview of Recurring Dates:</h5>
      <ul>
        {generateDates().map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
}
