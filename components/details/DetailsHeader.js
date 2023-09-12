import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const details = () => {
  return (
    <Box mt="5">
      <Heading
        fontSize="25px"
        fontWeight="600"
        textAlign={{ base: "center", md: "left" }}
      >
        Aura House 2bds Eco Bamboo House, Pool, River View
      </Heading>
      <SimpleGrid
        textAlign={{ base: "center", md: "left" }}
        display={{ base: "block", md: "flex" }}
        columns={{ base: 2, md: 1 }}
        marginTop="3"
        spacing="5"
      >
        <Box display="flex" justifyContent={{ base: "center", md: "left" }}>
          <Text>&#9733;</Text>
          <Text>4.87</Text>
        </Box>
        <Text>· 238 reviews </Text>
        <Text>· Superhost </Text>
        <Text fontWeight="700">· Abiansemal, Bali, Indonesia </Text>
      </SimpleGrid>
    </Box>
  );
};

export default details;
