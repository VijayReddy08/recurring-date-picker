// src/app/components/DatePicker.js
"use client"; // Use "use client" if you're using client-side state

import { useDateContext } from "../context/DateContext";
import RecurrenceOptions from "./RecurrenceOptions";
import CalendarPreview from "./CalendarPreview";

export default function DatePicker() {
  const { startDate, setStartDate } = useDateContext();

  const handleDateChange = (e) => setStartDate(e.target.value);

  return (
    <div className="mb-4">
      <div className="form-group">
        <label htmlFor="startDate">Select Start Date:</label>
        <input
          type="date"
          id="startDate"
          className="form-control"
          value={startDate}
          onChange={handleDateChange}
        />
      </div>
      <RecurrenceOptions />
      <CalendarPreview />
    </div>
  );
}
