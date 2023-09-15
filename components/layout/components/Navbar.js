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
  NextLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import { DragHandleIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { BsGlobe } from "react-icons/bs";
import { useCalender } from "@/context/CalenderContext";
import Test from "@/test/Test";

const Navbar = () => {
  const src = useBreakpointValue({
    base: "/smallairbnb.png",
    md: "/airbnblogo.png",
  });
  const [toggleHam, setToggleHam] = useState(false);
  const { inputData, setInputData } = useCalender();

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  return (
    <Container
      minW="100vw"
      position="fixed"
      top="0"
      zIndex="1000"
      borderBottom="1px solid #E2E8F0"
      bgColor="white"
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
        <Box
          className="flex items-center rounded-full"
          w={{ base: "auto", md: "500px" }}
        >
          <Input
            rounded="full"
            placeholder="Start your search"
            onChange={handleInputChange}
          />

          {/* <Test /> */}
          <IconButton
            className="hidden md:inline-flex bg-red-400 text-white p-2"
            transition="all 0.3s ease-out"
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
            <Box display="flex" role="group">
              <Box className="flex items-center rounded-full">
                <Link as={NextLink} href="/host">
                  <Button
                    className="flex items-center rounded-full"
                    borderRadius="full"
                    bg="gray.200"
                    _groupHover={{ transform: "scale(1.05)" }}
                    transition="all 0.5s ease"
                  >
                    Become a host
                  </Button>
                </Link>

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

              <Box className="flex items-center rounded-full">
                <Button
                  className="flex items-center rounded-full"
                  borderRadius="full"
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
                        <Image
                          src={"/user-removebg-preview.png"}
                          h="18px"
                          w="18px"
                        />
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

{
  /* <Image
src="/smallairbnb.png" // Default image source
srcSet="/smallairbnb.png 320w, /airbnblogo.png 1280w" // Different sources for different screen widths
sizes="(max-width: 320px) 280px, (max-width: 1280px) 1200px, 1600px" // Define image sizes for different screen widths
alt="Airbnb Logo"
h={{ base: "auto", md: "50px", lg: "60px" }}
w={{ base: "auto", md: "130px", lg: "100px" }}
/> */
}
