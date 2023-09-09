import {
  Box,
  Container,
  Image,
  Button,
  Text,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ChakraTabs from "@/common/ChakraTabs";
import PlaceFilters from "@/common/PlaceFilters";
import GridView from "@/common/Views/GridView";

const Places = () => {
  return (
    <Container maxW="container.xl" zIndex="90">
      <VStack border="2px solid" align="left">
        {/* <ChakraTabs /> */}
        <Box w="100%" border="2px solid" position="sticky" top="0">
          <PlaceFilters />
        </Box>
        <Heading fontSize="25px">Stays in London</Heading>

        <HStack spacing="5">
          <Button>Cancellation facility</Button>
          <Button>Type of Place</Button>
          <Button>Price</Button>
          <Button>Rooms and Beds</Button>
        </HStack>
      </VStack>
      <GridView />
    </Container>
  );
};

export default Places;
