import {
  Box,
  HStack,
  VStack,
  Heading,
  Center,
  Text,
  Button,
  Input,
  Image,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ReserveSmallCard = ({ cost, reviews, stars }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  return (
    <>
      <Box border="1px solid gray" p="5" borderRadius="15px">
        <VStack w="100%">
          <HStack justifyContent="space-between" w="100%">
            <VStack align="left">
              <Heading fontSize="25px" fontWeight="500">
                ${cost}
              </Heading>
              <Text>Total before taxes</Text>
            </VStack>
            <HStack display={{ base: "block", lg: "flex" }}>
              <Text fontWeight="700">{stars}</Text>
              <Text textDecoration="underline" color="gray.600">
                {reviews} reviews
              </Text>
            </HStack>
          </HStack>
          <HStack w="100%" mt="3">
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              fontSize={{ base: "11px", md: "15px" }}
              value={checkInDate}
              onChange={handleCheckInChange}
            />
            <Input
              placeholder="Checkout"
              size="md"
              type="datetime-local"
              fontSize={{ base: "11px", md: "15px" }}
              value={checkOutDate}
              onChange={handleCheckOutChange}
            />
          </HStack>
          <Input fontSize={{ base: "12px", md: "15px" }} placeholder="guests" />
          <Button
            onClick={onOpen}
            mt="3"
            w="100%"
            bgColor="pink.500"
            color="white"
          >
            Reserve
          </Button>

          <Modal isOpen={isOpen} onClose={onClose} h="300px">
            <ModalOverlay />
            <ModalContent h="500px">
              <ModalHeader>Holiday dates</ModalHeader>
              <ModalCloseButton />
              <ModalBody h="300px" overflowY="scroll">
                <Box display="block">
                  <Center
                    display="block"
                    align="center"
                    justifyContent="center"
                  >
                    <Text> you will be charged for ${cost}</Text>
                    <Text>
                      {" "}
                      Selected Dates: {checkInDate}- {checkOutDate}
                    </Text>
                  </Center>
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Text>you won't be charged yet</Text>
        </VStack>
      </Box>
      <HStack mt="4" borderRadius="15px" p="5" border="1px solid gray">
        <Text>
          This is a rare find. Mega's place on Airbnb is usually fully booked.
        </Text>
        <Image src="/cave.png" w="50px" h="50px" />
      </HStack>
    </>
  );
};

export default ReserveSmallCard;
