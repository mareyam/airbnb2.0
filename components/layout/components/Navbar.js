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
} from "@chakra-ui/react";
import { DragHandleIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { BsGlobe } from "react-icons/bs";

const Navbar = () => {
  const [toggleHam, setToggleHam] = useState(false);
  return (
    <Container
      bg="gray.100"
      minW="100vw"
      position="sticky"
      top="0"
      zIndex="105"
    >
      <Flex
        align="center"
        p={{ base: "2", md: "2" }}
        justifyContent="space-between"
      >
        <Link as={NextLink} href="/">
          <Image src="/airbnblogo.png" h={{base:'auto', md:'60px'}} w={{base:'auto', md:'100px'}} />
        </Link>
        <Box className="flex items-center border-2 rounded-full">
          <Input rounded="full" w="auto" placeholder="Start your search" />
          <IconButton
            className="hidden md:inline-flex bg-red-400 text-white p-2"
            transition="all 0.3s ease-out"
            w="auto"
            transform={toggleHam ? "rotate(0deg)" : "rotate(90deg)"}
            fontSize={{ base: "8px", md: "20px" }}
            rounded="full"
            bg="gray.200"
            icon={<Box>{<Search2Icon />}</Box>}
          ></IconButton>
        </Box>

        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            transition="all 0.3s ease-out"
            w="50px"
            transform={toggleHam ? "rotate(0deg)" : "rotate(90deg)"}
            fontSize={{ base: "xl", md: "2xl" }}
            icon={
              <Box>
                <DragHandleIcon />
              </Box>
            }
            onClick={() => setToggleHam(!toggleHam)}
          ></IconButton>
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <HStack
            position="relative"
            display={{ base: "block", md: "flex" }}
            justifyContent="space-around"
            gap="3"
          >
            <Box display="flex">
              <Box className="flex items-center border-2 rounded-full">
                <Button
                  className="flex items-center border-2 rounded-full"
                  borderRadius="full"
                  bg="gray.200"
                >
                  Become a host
                </Button>

                <IconButton
                  className="hidden md:inline-flex bg-red-400 text-white p-2"
                  transition="all 0.3s ease-out"
                  w="auto"
                  transform={toggleHam ? "rotate(0deg)" : "rotate(90deg)"}
                  fontSize={{ base: "8px", md: "20px" }}
                  rounded="full"
                  bg="gray.200"
                  icon={<Box>{<BsGlobe />}</Box>}
                ></IconButton>
              </Box>

              <Box className="flex items-center border-2 rounded-full">
                <Button
                  className="flex items-center border-2 rounded-full"
                  borderRadius="full"
                  bg="gray.200"
                  justifyContent="space-between"
                  flexDirection="row"
                  display="flex"
                >
                  <IconButton
                    w="auto"
                    isRound={true}
                    backgroundColor="gray.100"
                    icon={
                      <Box>
                        <Image src={"/menu.png"} h="18px" w="18px" />
                      </Box>
                    }
                  ></IconButton>
                  <IconButton
                    w="auto"
                    isRound={true}
                    backgroundColor="gray.100"
                    icon={
                      <Box>
                        <Image src={"/user.png"} h="18px" w="18px" />
                      </Box>
                    }
                  ></IconButton>
                </Button>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Flex>

      {toggleHam && (
        <Box
          bottom="-20"
          display={{ base: "block", md: "none" }}
          right="0"
          bg="white"
          zIndex="105"
          position="absolute"
          h="auto"
          w="auto"
        >
          <Stack spacing={{ base: "0", md: "5" }}>
            <Button>Become a host</Button>
            <Button>
              <IconButton
                w="100%"
                isRound={{ base: false, md: true }}
                backgroundColor="gray.100"
                icon={<Box>&#128722;</Box>}
              ></IconButton>
              <IconButton
                w="100%"
                isRound={{ base: false, md: true }}
                backgroundColor="gray.100"
                icon={<Box>&#128722;</Box>}
              ></IconButton>
            </Button>
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default Navbar;
