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
    <Container maxW="container.xl" border="2px solid">
      <Center h="100vh">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          justifyContent="space-between"
          align="center"
        >
          <VStack border="2px solid" h="100vh" justifyContent="center">
            <Heading fontSize='50px' color="red.300">Airbnb it.</Heading>
            <Heading fontSize='40px' fontWeight='500'>You could earn</Heading>
            <Heading fontSize='60px'>$217</Heading>
            <Text fontSize="16px">7 nights at an estimated $31 a night</Text>
            <Text>scroller</Text>
          </VStack>
          <Box border="2px solid">
            <Map />
          </Box>
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default Card;
