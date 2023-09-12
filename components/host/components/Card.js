import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Container,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import React from "react";
import Map from "./Map";

const Card = () => {
  return (
    <Container maxW="container.xl">
      <Center w="100%">
        <SimpleGrid columns={{ base: 1, md: 2 }} w="100%">
          <VStack textAlign="center" justifyContent="center">
            <Heading
              fontWeight="500"
              fontSize={{ base: "40px", md: "50px" }}
              color="red.300"
            >
              Airbnb it.
            </Heading>
            <Heading fontSize="40px" fontWeight="500">
              You could earn
            </Heading>
            <Heading fontSize="60px">$217</Heading>
            <Text fontSize="16px">
              <Box as="span" textDecoration="underline" fontWeight="700">
                7 nights
              </Box>{" "}
              at an estimated $31 a night
            </Text>
            <Text>scroller</Text>
          </VStack>
          <Box>
            <Map />
          </Box>
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default Card;
