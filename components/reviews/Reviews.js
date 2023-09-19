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
                          objectFit="cover"
                          objectPosition="center"
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
    name: "John Doe",
    date: "2023-09-13",
    image: "/p1.jpg",
    review:
      "Our stay at the Cozy Apartment was delightful! The location was perfect, and the apartment was well-equipped and clean. We had a wonderful time exploring the city.",
    positive: true,
  },
  {
    name: "Jane Smith",
    date: "2023-09-14",
    image: "/p2.jpg",
    review:
      "The Seaside Villa in Toronto exceeded our expectations. The ocean views were breathtaking, and the villa was spacious and luxurious. A perfect getaway!",
    positive: true,
  },
  {
    name: "David Johnson",
    date: "2023-09-15",
    image: "/p3.jpg",
    review:
      "Our stay at the Rustic Cabin in Torino was a unique experience. Surrounded by nature, it was peaceful and charming. Ideal for a romantic escape.",
    positive: true,
  },
  {
    name: "Emily Wilson",
    date: "2023-09-16",
    image: "/p4.jpg",
    review:
      "The cute Apartment in Lyon was cozy and beautifully decorated. Its central location made it convenient for exploring the city.",
    positive: true,
  },
  {
    name: "Michael Brown",
    date: "2023-09-17",
    image: "/p5.avif",
    review:
      "Our stay at the Seaside Castle in Milan was a dream come true. The ocean views were mesmerizing, and the amenities were top-notch. Highly recommended!",
    positive: true,
  },
  {
    name: "Sarah Davis",
    date: "2023-09-18",
    image: "/p6.jpg",
    review:
      "Our stay at the Cozy Apartment in Paulo was disappointing. The apartment was not as stylish as advertised, and the city noise was unbearable.",
    positive: false,
  },
  {
    name: "Robert Lee",
    date: "2023-09-19",
    image: "/p1.jpg",
    review:
      "The Seaside Villa in Toronto was a letdown. The property was not well-maintained, and we encountered several issues during our stay.",
    positive: false,
  },
  {
    name: "Sophia White",
    date: "2023-09-20",
    image: "/p2.jpg",
    review:
      "The Rustic Cabin in Torino lacked basic amenities like Wi-Fi, making it inconvenient for travelers who need to stay connected.",
    positive: false,
  },
  {
    name: "William Taylor",
    date: "2023-09-21",
    image: "/p3.jpg",
    review:
      "The cute Apartment in Lyon was not as clean as expected. We found some issues with cleanliness and maintenance.",
    positive: false,
  },
  {
    name: "Olivia Hall",
    date: "2023-09-22",
    image: "/p4.jpg",
    review:
      "The Seaside Castle in Milan was overpriced for what it offered. While the views were stunning, the overall experience did not justify the cost.",
    positive: false,
  },
];
