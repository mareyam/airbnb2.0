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
  // console.log(title);
  return (
    <Container maxW="container.xl" zIndex="90" mt={{ base: "20%", md: "5%" }}>
      <VStack align="left">
        {/* <ChakraTabs /> */}
        <HStack w="100%" position="sticky" top="20" right="0">
          <Box w={{ base: "50%", md: "85%" }} overflow="hidden">
            <AccomadationType />
          </Box>
          <Box
            h="100%"
            w={{ base: "50%", md: "15%" }}
            top="0"
            position="sticky"
          >
            <Filters />
          </Box>
        </HStack>

        <VStack>
          <Center
            w={{ base: "100%", md: "50%" }}
            border="1px solid #CBD5E0"
            p="5"
            borderRadius="10px"
          >
            <HStack w="100%" spacing="15" justifyContent="space-between">
              <Box display={{ base: "block", md: "flex" }}>
                <Text fontWeight="600">Display total price | </Text>
                <Text color="gray.500" pl={{ base: "0", md: "2" }}>
                  {" "}
                  Includes all fees, before taxes
                </Text>
              </Box>
              <Box>
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="end"
                >
                  <Switch id="email-alerts" size="lg" />
                </FormControl>
              </Box>
            </HStack>
          </Center>
        </VStack>
      </VStack>
      <GridView/>
    </Container>
  );
};

export default Places;

{
  /* <VStack>
<Center w="50%" justifyContent="space-between">
  <HStack
  
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
