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
  Tooltip,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Map from "./Map";
import TypeWriter from "@/common/TypeWriter";

const Card = () => {
  const [sliderValue, setSliderValue] = useState(1);
  const [cost, setCost] = useState(25);

  const handlePrice = (value) => {
    console.log(value);
    setSliderValue(value);
    setCost(sliderValue * 25);
    if (sliderValue == 1) {
      setCost(25);
    }
    if (sliderValue == 30) {
      setCost(750);
    }
  };

  return (
    <Container maxW="container.xl" minH="100vh">
      <Center w="100%" h="100vh">
        <SimpleGrid columns={{ base: 1, md: 2 }} w="100%">
          <VStack textAlign="center" justifyContent="center">
            <Heading
              fontWeight="500"
              fontSize={{ base: "40px", md: "50px" }}
              color="red.300"
            >
              <TypeWriter text={"Airbnb it"} />
              {/* // Airbnb it. */}
            </Heading>
            <Heading fontSize="40px" fontWeight="500">
              <TypeWriter text={"You could earn"} />
            </Heading>
            <Heading fontSize="60px">
              {/* $<TypeWriter text={cost} /> */}${cost}
            </Heading>
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
              at an estimated $25 a night
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

const Locations = () => {
  return (
    <VStack spacing={6}>
      <HStack spacing={6}>
        <Tooltip label="Auto start" placement="auto-start">
          <Button>Auto-Start</Button>
        </Tooltip>

        <Tooltip label="Auto" placement="auto">
          <Button>Auto</Button>
        </Tooltip>

        <Tooltip label="Auto end" placement="auto-end">
          <Button>Auto-End</Button>
        </Tooltip>
      </HStack>

      <HStack spacing={6}>
        <Tooltip label="Top start" placement="top-start">
          <Button>Top-Start</Button>
        </Tooltip>

        <Tooltip label="Top" placement="top">
          <Button>Top</Button>
        </Tooltip>

        <Tooltip label="Top end" placement="top-end">
          <Button>Top-End</Button>
        </Tooltip>
      </HStack>

      <HStack spacing={6}>
        <Tooltip label="Right start" placement="right-start">
          <Button>Right-Start</Button>
        </Tooltip>

        <Tooltip label="Right" placement="right">
          <Button>Right</Button>
        </Tooltip>

        <Tooltip label="Right end" placement="right-end">
          <Button>Right-End</Button>
        </Tooltip>
      </HStack>

      <HStack spacing={6}>
        <Tooltip label="Bottom start" placement="bottom-start">
          <Button>Bottom Start</Button>
        </Tooltip>

        <Tooltip label="Bottom" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>

        <Tooltip label="Bottom end" placement="bottom-end">
          <Button>Bottom End</Button>
        </Tooltip>
      </HStack>

      <HStack spacing={6}>
        <Tooltip label="Left start" placement="left-start">
          <Button>Left-Start</Button>
        </Tooltip>

        <Tooltip label="Left" placement="left">
          <Button>Left</Button>
        </Tooltip>

        <Tooltip label="Left end" placement="left-end">
          <Button>Left-End</Button>
        </Tooltip>
      </HStack>
    </VStack>
  );
};
