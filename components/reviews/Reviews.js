import {
  Box,
  Image,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Reviews = () => {
  return (
    <Box>
      <Heading fontWeight="500" fontSize="20px">
        {reviewList.length} reviews
      </Heading>
      <Text color="gray.500">Average rating will appear after 5 ratings</Text>
      <SimpleGrid mt="5" columns={{ base: 1, md: 2 }}>
        {reviewList.slice(0, 6).map((item) => (
          <>
            <VStack align="left" pb="5" pt="5">
              <HStack>
                <Image rounded="full" src={item.image} w="50px" h="50px" />
                <VStack spacing="0">
                  <Text fontWeight="500">{item.name}</Text>
                  <Text>{item.date}</Text>
                </VStack>
              </HStack>
              <Text w={{ base: "100%", md: "75%" }}>
                {item.review.slice(50)}
              </Text>
            </VStack>
          </>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Reviews;

const reviewList = [
  {
    image: "/img1.png",
    name: "Raven",
    date: "August 2023",
    review: "Best vacations",
  },
  {
    image: "/img1.png",
    name: "Billy",
    date: "August 2023",
    review: "Amazing vacations",
  },
  {
    image: "/img1.png",
    name: "Raven",
    date: "August 2023",
    review:
      "The place was nice However, StayVista team tried to pull a fast one on us. While booking it was never mentioned that outside food would be",
  },
  {
    image: "/img1.png",
    name: "Raven",
    date: "August 2023",
    review: "Best vacations",
  },
  {
    image: "/img1.png",
    name: "Billy",
    date: "August 2023",
    review: "Amazing vacations",
  },
  {
    image: "/img1.png",
    name: "Raven",
    date: "August 2023",
    review:
      "The place was nice However, StayVista team tried to pull a fast one on us. While booking it was never mentioned that outside food would be",
  },
  {
    image: "/img1.png",
    name: "Raven",
    date: "August 2023",
    review: "Best vacations",
  },
  {
    image: "/img1.png",
    name: "Billy",
    date: "August 2023",
    review: "Amazing vacations",
  },
  {
    image: "/img1.png",
    name: "Raven",
    date: "August 2023",
    review:
      "The place was nice However, StayVista team tried to pull a fast one on us. While booking it was never mentioned that outside food would be",
  },
];
