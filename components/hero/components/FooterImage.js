import React from "react";
import { Container, Box, Image } from "@chakra-ui/react";
import FooterCard from "./FooterCard";

const FooterImage = () => {
  return (
    <Container maxW="container.xl" position="relative">
      <Image src="/heroimage.jpg" h="300px" w="100%" />
      <Box
        m="5"
        top="0"
        position="absolute"
        w="200px"
        h="150px"
      >
        <FooterCard />
      </Box>
    </Container>
  );
};

export default FooterImage;
