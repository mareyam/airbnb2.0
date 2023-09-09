// DataContext.js
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [inputData, setInputData] = useState("");

  return (
    <DataContext.Provider value={{ inputData, setInputData }}>
      {children}
    </DataContext.Provider>
  );
};
