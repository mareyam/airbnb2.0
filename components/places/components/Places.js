import {
  Box,
  Container,
  Image,
  Button,
  Text,
  Heading,
  HStack,
  VStack,
  Input,
  Switch,
  FormControl,
  FormLabel,
  Flex,
  Center,
} from "@chakra-ui/react";
import React from "react";
import ChakraTabs from "@/common/ChakraTabs";
import AccomadationType from "@/common/AccomadationType";
import GridView from "@/common/Views/GridView";
import Filters from "@/common/Filters";

const Places = () => {
  return (
    <Container maxW="container.xl" zIndex="90">
      <VStack align="left">
        {/* <ChakraTabs /> */}
        <HStack w="100%" position="sticky" top="0">
          <AccomadationType />
          <Filters />
        </HStack>

        <VStack>
          <Center w="50%" border="1px solid gray">
            <HStack w="100%" p="3" spacing="15">
              <Text w="100%">Display total price | </Text>
              <Text w="150%" color="gray.300">
                Includes all fees, before taxes
              </Text>
              <FormControl w="100%" display="flexs" alignItems="center">
                <Switch id="email-alerts" />
              </FormControl>
            </HStack>
          </Center>
        </VStack>
      </VStack>
      <GridView />
    </Container>
  );
};

export default Places;

{
  /* <VStack>
<Center w="50%" border="2px solid" justifyContent="space-between">
  <HStack
    border="2px solid"
    w="100%"
    p="3"
    justifyContent="space-between"
    align="center"
    spacing="5"
  >
    <Text w="100%">Display total price | </Text>
    <Text w="150%" color="gray.300">
      Includes all fees, before taxes
    </Text>
    <FormControl w="100%" display="flexs" alignItems="center">
      <Switch id="email-alerts" />
    </FormControl>
  </HStack>
</Center>
</VStack> */
}
