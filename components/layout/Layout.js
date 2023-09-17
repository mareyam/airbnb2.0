import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    // <Box minW="container.2xl">
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
