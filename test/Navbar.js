// Navbar.js
import React from "react";
import { useData } from "./DataContext";

const Navbar = () => {
  const { inputData, setInputData } = useData();

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter data..."
        value={inputData}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Navbar;
