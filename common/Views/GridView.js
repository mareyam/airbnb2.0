import React from "react";
import {
  HStack,
  Image,
  Flex,
  VStack,
  Text,
  Heading,
  Box,
  Container,
  SimpleGrid,
  Stack,
  isChakraTheme,
} from "@chakra-ui/react";
import { usePlaces } from "@/hooks/usePlaces";

const GridView = () => {
  const { data, isLoading, isError } = usePlaces();
  console.log("data in Places.js is");
  console.log({ data });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <Heading fontSize="25px">Stays in London</Heading>
      <SimpleGrid mt="5" columns={{ base: 1, md: 4 }} spacing="5">
        {data?.map((item) => (
          <VStack w="100%">
            <Box
              bgImage={item.image}
              bgSize="cover"
              bgPosition="center"
              boxSize="300px"
              borderRadius="5%"
              w="100%"
            />
            <Flex w="100%" justifyContent="space-between">
              <Box>
                <Heading fontSize="15px">
                  {item.city},{item.country}
                </Heading>

                <Text color="gray.500">
                  Stay with {item.host} . {item.career}{" "}
                </Text>
                <Text color="gray.500">Sep 14-19</Text>
                <Text>
                  <Box as="span" fontWeight="600">
                    ${item.price_per_night}
                  </Box>
                  night
                </Text>
              </Box>
              <Box display="flex">
                <Text>&#9733;</Text>
                <Text>4.87</Text>
              </Box>
            </Flex>
          </VStack>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GridView;
