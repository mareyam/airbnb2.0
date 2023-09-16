import React from "react";
import { Image, HStack, Box, VStack } from "@chakra-ui/react";

const AccomadationType = () => {
  return (
    <HStack
      m="5"
      spacing="10"
      w="100%"
      overflowX="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "24px",
        },
      }}
    >
      {list.map((item) => (
        <Box role="group">
          <VStack
            _groupHover={{
              transform: "scale(1.05)",
              textDecoration: "underline",
              fontWeight: "600",
            }}
          >
            <Image src={item.image} h="25px" w="25px" />
            <p mb="3">{item.name}</p>
          </VStack>
        </Box>
      ))}
    </HStack>
  );
};

export default AccomadationType;

const list = [
  { name: "Cottage", image: "/wooden-house.png" },
  { name: "Villa", image: "/house.png" },
  { name: "Castle", image: "/castle.png" },
  { name: "Treehouse", image: "/tree-house.png" },
  { name: "Bungalow", image: "/bungalow.png" },
  { name: "Cabin", image: "/cabin.png" },
  { name: "Cave", image: "/cave.png" },
  { name: "House", image: "/house.png" },
  { name: "Loft", image: "/home.png" },
  { name: "Cottage", image: "/cabin (1).png" },
  { name: "Villa", image: "/house.png" },
  { name: "Cottage", image: "/wooden-house.png" },
  { name: "Villa", image: "/house.png" },
  { name: "Castle", image: "/castle.png" },
  { name: "Treehouse", image: "/tree-house.png" },
  { name: "Bungalow", image: "/bungalow.png" },
  { name: "Cabin", image: "/cabin.png" },
  { name: "Cave", image: "/cave.png" },
];
