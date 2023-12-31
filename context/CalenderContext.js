import React, { createContext, useContext, useState } from "react";

const CalenderContext = createContext();

export const useCalender = () => useContext(CalenderContext);

export const CalenderProvider = ({ children }) => {
  // const [inputData, setInputData] = useState("");
  const [inputData, setInputData] = useState(false);

  return (
    <CalenderContext.Provider value={{ inputData, setInputData }}>
      {children}
    </CalenderContext.Provider>
  );
};
