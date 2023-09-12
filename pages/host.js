import React from "react";
import { Container } from "@chakra-ui/react";

import Navbar from "@/components/host/components/Navbar";
import Card from "@/components/host/components/Card";
import CardImage from "@/components/host/components/CardImage";

const host = () => {
  return (
    <Container maxW="container.2xl">
      <Navbar />
      <Card />
      <CardImage />
    </Container>
  );
};

export default host;
