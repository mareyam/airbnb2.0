import React from "react";

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  IconButton,
  Image,
  Collapse,
  Button,
} from "@chakra-ui/react";
import ReserveSmallCard from "../reserve/ReserveSmallCard";

const DetailsInformation = () => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <HStack columns={{ base: 1, md: 2 }} mt='3'>
      <Box w={{ base: "100%", md: "60%" }}>
        <HStack w="100%" justify="space-between">
          <VStack mt="5" align="left">
            <Heading fontWeight="500" fontSize="25px">
              Entire villa hosted by Wayan
            </Heading>
            <Text fontSize="18px">4 guests 2 bedrooms 2 beds 2 baths</Text>
          </VStack>
          <Image src="/cabin.jpg" rounded="full" h="65px" w="65px" />
        </HStack>
        <Divider my="5" />
        <VStack spacing="2" align="left">
          <HStack>
            <IconButton
              bg="white"
              icon={
                <Box>
                  <Image src="/sketch.png" w="25px" h="25px" />
                </Box>
              }
            ></IconButton>
            <Text>Designed by Ibuku Bamboo Architecture and Design</Text>
          </HStack>
          <HStack>
            <IconButton
              bg="white"
              icon={
                <Box>
                  <Image src="/delivery-box.png" w="25px" h="25px" />
                </Box>
              }
            ></IconButton>
            <Text>Featured in Condé Nast Traveler, October 2019</Text>
          </HStack>
          <HStack>
            <IconButton
              bg="white"
              icon={
                <Box>
                  <Image src="/calendar.png" w="25px" h="25px" />
                </Box>
              }
            ></IconButton>
            <Text>
              Home Crux, August 2019. Free cancellation before Dec 10.
            </Text>
          </HStack>
        </VStack>
        <Divider my="5" />

        <Collapse startingHeight={20} isOpen={show}>
          Aura house is a beautiful & unique eco bamboo house built on the west
          bank of the River Ayung facing east to catch sunrise. Aura House is
          situated 25min away from Ubud, and 35min away from Canggu. IF WE ARE
          FULLY BOOKED, PLEASE CHECK OUR AIRBNB PROFILE (CLICK ON OUR PROFILE
          PICTURE) TO FIND 10 MORE BEAUTIFUL BAMBOO HOUSES, ALL BASED IN THE
        </Collapse>
        <Button
          bgColor="white"
          textDecoration="underline"
          size="sm"
          onClick={handleToggle}
          mt="1rem"
        >
          Show {show ? "Less" : "More"}
        </Button>
        <Divider my="5" />
      </Box>
      <Box w={{ base: "100%", md: "35%" }} marginLeft={{ base: 0, md: "15%" }}>
        <ReserveSmallCard />
      </Box>      
    </HStack>
  );
};

export default DetailsInformation;
