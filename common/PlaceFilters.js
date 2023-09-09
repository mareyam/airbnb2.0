import React from "react";
import { Image, HStack, Box, VStack } from "@chakra-ui/react";

const PlaceFilters = () => {
  return (
    <HStack spacing="10" w="100%" overflowX="auto">
      {list.map((item) => (
        <VStack>
          <Image src={item.image} h="25px" w="25px" />
          <p>{item.name}</p>
        </VStack>
      ))}
    </HStack>
  );
};

export default PlaceFilters;

const list = [
  { name: "Cottage", image: "/img1.png" },
  { name: "Villa", image: "/img1.png" },
  { name: "Castle", image: "/img1.png" },
  { name: "Treehouse", image: "/img1.png" },
  { name: "Bungalow", image: "/img1.png" },
  { name: "Cabin", image: "/img1.png" },
  { name: "Cave", image: "/img1.png" },
  { name: "small house", image: "/img1.png" },
  { name: "Loft", image: "/img1.png" },
  { name: "Cottage", image: "/img1.png" },
  { name: "Villa", image: "/img1.png" },
  { name: "Castle", image: "/img1.png" },
  { name: "Treehouse", image: "/img1.png" },
  { name: "Bungalow", image: "/img1.png" },
  { name: "Cabin", image: "/img1.png" },
  { name: "Cave", image: "/img1.png" },
  { name: "small house", image: "/img1.png" },
  { name: "Loft", image: "/img1.png" },
];
