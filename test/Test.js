// Test.js
import React from "react";
import Navbar from "./Navbar";
import CalenderCard from "./CalenderCard";
import { DataProvider } from "./DataContext";

function Test() {
  return (
    <DataProvider>
      <div className="Test">
        <Navbar />
        <CalenderCard />
      </div>
    </DataProvider>
  );
}

export default Test;
