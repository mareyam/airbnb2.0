import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import React from "react";

const FooterCard = () => {
  return (
    <VStack textAlign='left' justifyContent='left'>
      <Heading fontWeight='500' fontSize="20px">The Greatest Outdoors</Heading>
      <Text fontSize="12px">Wishlists curated by AirBnb</Text>
      <Button bg='black' color='white'>Get started</Button>
    </VStack>
  );
};

export default FooterCard;
