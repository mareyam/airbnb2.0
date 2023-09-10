import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box minW="container.2xl">
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
