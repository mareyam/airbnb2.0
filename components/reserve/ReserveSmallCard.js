import {
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  Input,
  Image,
} from "@chakra-ui/react";
import React from "react";

const ReserveSmallCard = () => {
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
          <Button mt="3" w="100%" bgColor="pink.500" color="white">
            Reserve
          </Button>
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
