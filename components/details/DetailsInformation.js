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
import React from "react";

const DetailsInformation = () => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <Box>
      <HStack w="50%" justify="space-between">
        <VStack mt="5" align="left">
          <Heading fontWeight="500">Entire villa hosted by Wayan</Heading>
          <Text fontSize="18px">4 guests 2 bedrooms 2 beds 2 baths</Text>
        </VStack>
        <Image src="/cabin.jpg" rounded="full" h="75px" w="75px" />
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
          <Text>Home Crux, August 2019. Free cancellation before Dec 10.</Text>
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
      <Button size="sm" onClick={handleToggle} mt="1rem">
        Show {show ? "Less" : "More"}
      </Button>
      <Divider my="5" />
    </Box>
  );
};

export default DetailsInformation;
