// src/app/components/RecurrenceOptions.js
"use client"; // It's for future changes
import { useDateContext } from "../context/DateContext";

export default function RecurrenceOptions() {
  const { recurrence, setRecurrence, customValue, setCustomValue } = useDateContext();

  const handleRecurrenceChange = (e) => {
    setRecurrence(e.target.value);
  };

  return (
    <div className="mt-4">
      <label className="form-label">Select Recurrence:</label>
      <select className="form-select" value={recurrence} onChange={handleRecurrenceChange}>
        <option value="none">None</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      {recurrence !== "none" && (
        <div className="mt-2">
          <label htmlFor="customValue" className="form-label">
            Every
          </label>
          <input
            type="number"
            id="customValue"
            className="form-control"
            min="1"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
          />
          <span className="form-text">{recurrence}(s)</span>
        </div>
      )}
    </div>
  );
}
