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
import React from "react";

const ReserveSmallCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box border="1px solid gray" p="5" borderRadius="15px">
        <VStack w="100%">
          <HStack justifyContent="space-between" w="100%">
            <VStack align="left">
              <Heading fontSize="25px" fontWeight="500">
                $661
              </Heading>
              <Text>Total before taxes</Text>
            </VStack>
            <HStack display={{ base: "block", lg: "flex" }}>
              <Text fontWeight="700">4.92</Text>
              <Text textDecoration="underline" color="gray.600">
                409 reviews
              </Text>
            </HStack>
          </HStack>
          <HStack w="100%" mt="3">
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              fontSize={{ base: "11px", md: "15px" }}
            />
            <Input
              placeholder="Checkout"
              size="md"
              type="datetime-local"
              fontSize={{ base: "11px", md: "15px" }}
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
                    <Text> you will be charged for $661</Text>
                    <Text> Selected Dates: 16 Sep 23 - 23 Sep 23</Text>
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
