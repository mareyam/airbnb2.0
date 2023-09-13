import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import React from "react";

const FooterCard = () => {
  return (
    <VStack
      spacing={4} // You can adjust the spacing value as needed
      align="left"
      justify="left"
      textAlign="left"
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <Heading fontWeight="500" fontSize="20px">
        The Greatest Outdoors
      </Heading>
      <Text fontSize="12px">Wishlists curated by Airbnb</Text>
      <Button bg="black" color="white">
        Get started
      </Button>
    </VStack>
  );
};

export default FooterCard;
