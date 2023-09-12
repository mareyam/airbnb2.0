import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Container,
  SimpleGrid,
  Center,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Map from "./Map";

const Card = () => {
  const [sliderValue, setSliderValue] = useState(1);
  const [cost, setCost] = useState(30);

  const handlePrice = (value) => {
    console.log(value);
    setSliderValue(value);
    setCost(sliderValue * 30);
    if (sliderValue == 1) {
      setCost(30);
    }
  };

  return (
    <Container maxW="container.xl" minH="100vh" border="2px solid">
      <Center w="100%" h="100vh">
        <SimpleGrid columns={{ base: 1, md: 2 }} w="100%">
          <VStack textAlign="center" justifyContent="center">
            <Heading
              fontWeight="500"
              fontSize={{ base: "40px", md: "50px" }}
              color="red.300"
            >
              Airbnb it.
            </Heading>
            <Heading fontSize="40px" fontWeight="500">
              You could earn
            </Heading>
            <Heading fontSize="60px">${cost}</Heading>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={sliderValue}
              onChange={handlePrice}
              max={30}
              min={1}
              w="75%"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="16px">
              <Box as="span" textDecoration="underline" fontWeight="700">
                {sliderValue} nights{"   "}
              </Box>
              at an estimated $30 a night
            </Text>
          </VStack>
          <Box h="100vh">
            <Map />
          </Box>
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default Card;
