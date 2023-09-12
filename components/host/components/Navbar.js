import React, { useState } from "react";
import {
  Center,
  Icon,
  Input,
  CheckIcon,
  IconButton,
  Button,
  Container,
  SimpleGrid,
  Box,
  Image,
  HStack,
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { DragHandleIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { BsGlobe } from "react-icons/bs";

const Navbar = () => {
  const src = useBreakpointValue({
    base: "/smallairbnb.png",
    md: "/airbnblogo.png",
  });
  const [toggleHam, setToggleHam] = useState(false);

  return (
    <Container
      maxW="100vw"
      position="sticky"
      top="0"
      zIndex="1000"
      borderBottom="1px solid #E2E8F0"
      px="10"
    >
      <Flex
        align="center"
        p={{ base: "2", md: "2" }}
        justifyContent="space-between"
      >
        <Link as={NextLink} href="/">
          <Image
            // src="/airbnblogo.png"
            src={src}
            h={{ base: "25px", md: "50px", lg: "60px" }}
            w={{ base: "30px", md: "130px", lg: "100px" }}
          />
        </Link>

        <Box display={{ base: "none", md: "block" }}>
          <HStack
            position="relative"
            display={{ base: "block", md: "flex" }}
            justifyContent="space-around"
            gap="3"
          >
            <Box display="flex">
              <Box className="flex items-center rounded-full">
                <Text fontWeight="500" pr="5">
                  Ready to Airbnb it?
                </Text>
                <Button
                  p="7"
                  bgColor="red.300"
                  color="white"
                  className="flex items-center rounded-full"
                >
                  Become a host
                </Button>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
