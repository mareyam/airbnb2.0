import {
  Box,
  HStack,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  VStack,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useRef } from "react";

const Offers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack align="left" w="100%">
      <Heading
        textAlign={{ base: "center", md: "left" }}
        w="100%"
        fontSize="25px"
      >
        What this place offers
      </Heading>
      <SimpleGrid mt="5" columns={{ base: 1, md: 2 }} spacing="5">
        {offerList.slice(0, 10).map((item) => (
          <HStack w="auto">
            <Image src={item.image} w="30px" h="30px" />
            <Text fontSize="15px">{item.name}</Text>
          </HStack>
        ))}
      </SimpleGrid>
      <Button
        w={{ base: "60%", md: "30%" }}
        bgColor="white"
        border="1px solid"
        p="5"
        mt="5"
        onClick={onOpen}
      >
        Show all {offerList.length} amenities
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} h="300px">
        <ModalOverlay />
        <ModalContent h="500px">
          <ModalHeader>Amenities Available</ModalHeader>
          <ModalCloseButton />
          <ModalBody h="300px" overflowY="scroll">
            <SimpleGrid mt="5" columns={{ base: 2, md: 2 }} spacing="5">
              {offerList.map((item) => (
                <HStack w="auto">
                  <Image src={item.image} w="30px" h="30px" />
                  <Text fontSize="15px">{item.name}</Text>
                </HStack>
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
      <Divider my="5" />
    </VStack>
  );
};

export default Offers;

const offerList = [
  {
    image: "/crib.png",
    name: "Crib",
  },
  {
    image: "/cutlery.png",
    name: "Cutlery",
  },
  {
    image: "/desk.png",
    name: "Desk",
  },
  {
    image: "/parking-area.png",
    name: "Parking area",
  },
  {
    image: "/privacy.png",
    name: "Privacy",
  },
  {
    image: "/crib.png",
    name: "Crib",
  },
  {
    image: "/cutlery.png",
    name: "Cutlery",
  },
  {
    image: "/desk.png",
    name: "Desk",
  },
  {
    image: "/parking-area.png",
    name: "Parking are",
  },
  {
    image: "/privacy.png",
    name: "Privacy",
  },
  {
    image: "/crib.png",
    name: "Crib",
  },
  {
    image: "/cutlery.png",
    name: "Cutlery",
  },
  {
    image: "/desk.png",
    name: "Desk",
  },
  {
    image: "/parking-area.png",
    name: "Parking area",
  },
  {
    image: "/privacy.png",
    name: "Privacy",
  },
  {
    image: "/crib.png",
    name: "Crib",
  },
  {
    image: "/cutlery.png",
    name: "Cutlery",
  },
  {
    image: "/desk.png",
    name: "Desk",
  },
  {
    image: "/parking-area.png",
    name: "Parking are",
  },
  {
    image: "/privacy.png",
    name: "Privacy",
  },
];
