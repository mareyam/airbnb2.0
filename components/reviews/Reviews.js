import {
  Box,
  Image,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";

const Reviews = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Heading fontWeight="500" fontSize="20px">
        {reviewList.length} reviews
      </Heading>
      <Text color="gray.500">Average rating will appear after 10 ratings</Text>
      <SimpleGrid mt="5" columns={{ base: 1, md: 2 }}>
        {reviewList.slice(0, 6).map((item) => (
          <>
            <VStack align="left" pb="5" pt="5">
              <HStack>
                <Image rounded="full" src={item.image} w="50px" h="50px" />
                <VStack spacing="0" align="left">
                  <Text fontWeight="500">{item.name}</Text>
                  <Text>{item.date}</Text>
                </VStack>
              </HStack>

              {item.review.length > 50 ? (
                <Text w={{ base: "100%", md: "75%" }}>
                  {item.review.slice(0, 150)}...
                </Text>
              ) : (
                <Text w={{ base: "100%", md: "75%" }}>{item.review}</Text>
              )}
            </VStack>
          </>
        ))}
      </SimpleGrid>
      <VStack align="left" spacing="5">
        <Text textAlign="left" bg="white" w="30%" textDecoration="underline">
          Show more
        </Text>
        <Button
          w={{ base: "60%", md: "30%" }}
          bg="white"
          p="6"
          border="1px solid"
          onClick={onOpen}
        >
          See all {reviewList.length} reviews
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} h="300px">
          <ModalOverlay />
          <ModalContent h="500px">
            <ModalHeader>Amenities Available</ModalHeader>
            <ModalCloseButton />
            <ModalBody h="300px" overflowY="scroll">
              <SimpleGrid mt="5" columns={{ base: 1, md: 2 }}>
                {reviewList.slice(0, 6).map((item) => (
                  <>
                    <VStack align="left" pb="5" pt="5">
                      <HStack>
                        <Image
                          rounded="full"
                          src={item.image}
                          w="50px"
                          h="50px"
                        />
                        <VStack spacing="0" align="left">
                          <Text fontWeight="500">{item.name}</Text>
                          <Text>{item.date}</Text>
                        </VStack>
                      </HStack>

                      {item.review.length > 50 ? (
                        <Text w={{ base: "100%", md: "75%" }}>
                          {item.review.slice(0, 150)}...
                        </Text>
                      ) : (
                        <Text w={{ base: "100%", md: "75%" }}>
                          {item.review}
                        </Text>
                      )}
                    </VStack>
                  </>
                ))}
              </SimpleGrid>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
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
