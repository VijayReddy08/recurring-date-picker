// src/app/context/DateContext.js
"use client"; // Add this line
import { createContext, useContext, useState } from "react";

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [startDate, setStartDate] = useState("");
  const [recurrence, setRecurrence] = useState("none");
  const [customValue, setCustomValue] = useState(1);

  return (
    <DateContext.Provider
      value={{
        startDate,
        setStartDate,
        recurrence,
        setRecurrence,
        customValue,
        setCustomValue,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = () => {
  return useContext(DateContext);
};
