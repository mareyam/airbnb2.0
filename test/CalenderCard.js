// CalendarCard.js
import React from "react";
import { useData } from "./DataContext";

const CalendarCard = () => {
  const { inputData } = useData();

  return (
    <div>
      <h2>CalendarCard Component</h2>
      {inputData && <p>Data from Navbar: {inputData}</p>}
    </div>
  );
};

export default CalendarCard;
