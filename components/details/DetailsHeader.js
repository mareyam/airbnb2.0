import { Box, Container, HStack, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const details = () => {
  return (
    <Box mt='5'>
      <Heading fontSize="25px" fontWeight="600">
        Aura House 2bds Eco Bamboo House, Pool, River View
      </Heading>
      <HStack marginTop="3" spacing="5">
        <Box display="flex">
          <Text>&#9733;</Text>
          <Text>4.87</Text>
        </Box>
        <Text>· 238 reviews </Text>
        <Text>· Superhost </Text>
        <Text fontWeight="700">· Abiansemal, Bali, Indonesia </Text>
      </HStack>
    </Box>
  );
};

export default details;
