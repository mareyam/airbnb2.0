import {
  Box,
  HStack,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Offers = () => {
  return (
    <VStack align="left" w="50%">
      <Heading fontSize="25px">What this place offers</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="5">
        {offerList.map((item) => (
          <HStack border="2px solid" w="auto">
            <Image src={item.image} w="35px" h="35px" />
            <Text fontSize="18px">{item.name}</Text>
          </HStack>
        ))}
      </SimpleGrid>
      <Button w="30%" bgColor="white" border="1px solid">
        Show all 24 amenities
      </Button>
    </VStack>
  );
};

export default Offers;

const offerList = [
  {
    image: "/img1.png",
    name: "Mountain view",
  },
  {
    image: "/img1.png",
    name: "Mountain view",
  },
  {
    image: "/img1.png",
    name: "Mountain view",
  },
  {
    image: "/img1.png",
    name: "Mountain view",
  },
  {
    image: "/img1.png",
    name: "Mountain view",
  },
  {
    image: "/img1.png",
    name: "Mountain view",
  },
  {
    image: "/img1.png",
    name: "Mountain view",
  },
  {
    image: "/img1.png",
    name: "Mountain view",
  },
  {
    image: "/img1.png",
    name: "Mountain view",
  },
  {
    image: "/img1.png",
    name: "Mountain view",
  },
];
