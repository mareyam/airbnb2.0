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

const details = ({ title, stars, reviews, career, location }) => {

  return (
    <Box mt="10%">
      <Heading
        fontSize="25px"
        fontWeight="600"
        textAlign={{ base: "center", md: "left" }}
      >
        {title}
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
          <Text>{stars}</Text>
        </Box>
        <Text>· {reviews} reviews</Text>
        <Text>· {career} </Text>
        <Text fontWeight="700">· {location}</Text>
       
      </SimpleGrid>
    </Box>
  );
};

export default details;
