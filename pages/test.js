import React, { useState } from "react";
import Test from "@/test/Test";
import Test2 from "@/test/Test2";
import Datepicker from "react-tailwindcss-datepicker";
import {
  Popover,
  Image,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Text,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  SimpleGrid,
  VStack,
  Input,
  HStack,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";

const test = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const [selectedRegion, setSelectedRegion] = useState("");
  const handleRegionSelect = (regionName) => {
    setSelectedRegion(regionName);
    onClose();
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      align="center"
      placement="center"
      justifyContent="center"
    >
      <Button onClick={onToggle}>Trigger</Button>
      <Popover
        w={{ base: "100%", md: "700px" }}
        border="2px solid"
        isOpen={isOpen}
        onClose={onClose}
        closeOnBlur={false}
        mt="5"
        align="center"
        placement="center"
        justifyContent="center"
      >
        <PopoverContent
          border="none"
          w={{ base: "100%", md: "700px" }}
          align="center"
          placement="center"
          justifyContent="center"
        >
          <PopoverArrow />
          <PopoverBody
            align="center"
            placement="center"
            justifyContent="center"
          >
            <Tabs variant="soft-rounded" colorScheme="green" w="100%">
              <TabList align="left">
                <Tab textAlign="left" display="block" w="800px">
                  <Heading fontSize="13px"> Where</Heading>
                  <Text fontSize="10px">Search destinations</Text>
                  {/* {selectedRegion ? (
                    <Text>{selectedRegion}</Text>
                  ) : (
                    <Text>Search destinations</Text>
                  )} */}
                </Tab>
                <Tab textAlign="left" display="block" w="800px">
                  <Heading fontSize="13px"> Check in</Heading>
                  <Text fontSize="10px">Add dates</Text>
                </Tab>
                <Tab textAlign="left" display="block" w="800px">
                  <Heading fontSize="13px"> Check out</Heading>
                  <Text fontSize="10px">Add dates</Text>
                </Tab>
                <Tab textAlign="left" display="block" w="800px">
                  <Heading fontSize="13px"> Who</Heading>
                  <Text fontSize="10px">Add guests</Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel
                  p="5"
                  mt="5"
                  w="75%"
                  border="1px solid #E2E8F0"
                  borderRadius="5%"
                  align="center"
                >
                  <VStack align="left">
                    <Text>Search by region</Text>
                    <SimpleGrid mt="1" columns={{ base: 2, md: 3 }} spacing="2">
                      {Region.map((item) => (
                        <VStack
                          key={item.id}
                          display="block"
                          border="0"
                          role="group"
                          onClick={() => handleRegionSelect(item.name)}
                        >
                          <Image
                            src={item.img}
                            w="100px"
                            h="100px"
                            borderRadius="10%"
                            // border="1px solid #E2E8F0"
                            _groupHover={{ border: "1px solid black" }}
                            transition="all 0.5s ease"
                          />
                          <Text>{item.name}</Text>
                        </VStack>
                      ))}
                    </SimpleGrid>
                  </VStack>
                </TabPanel>

                <TabPanel>
                  <Datepicker
                    isOpen={true}
                    onClose={false}
                    value={value}
                    onChange={(e) => console.log({ e })}
                  />
                </TabPanel>
                <TabPanel>
                  <Datepicker value={value} onChange={handleValueChange} />
                </TabPanel>
                <TabPanel
                  p="5"
                  mt="5"
                  w="75%"
                  border="1px solid #E2E8F0"
                  borderRadius="5%"
                  align="center"
                >
                  <VStack align="left">
                    <Quantity type="Adults" description="Ages 13 or above" />
                    <Divider space="2" />
                    <Quantity type="Children" description="Ages 2-12" />
                    <Divider space="2" />
                    <Quantity type="Infants" description="Under 2" />
                    <Divider space="2" />
                    <Quantity type="Pets" description="Service animal" />
                    <Divider space="2" />
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default test;

const Region = [
  {
    img: "/map.jpg",
    name: "im flexible",
  },
  {
    img: "/m1.jpg",
    name: "europe",
  },
  {
    img: "/m2.jpg",
    name: "asia",
  },
  {
    img: "/m3.jpg",
    name: "east",
  },
  {
    img: "/m4.jpg",
    name: "turkey",
  },
  {
    img: "/m5.jpg",
    name: "usa",
  },
];

const Quantity = ({ type, description }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <HStack textAlign="left" w="100%" justifyContent="space-between">
      <VStack align="left">
        <Heading fontSize="15px">{type}</Heading>
        <Text>{description}</Text>
      </VStack>
      <HStack>
        <Button
          w="auto"
          isRound={true}
          borderRadius="100%"
          onClick={incrementQuantity}
        >
          +
        </Button>
        <Text>{quantity}</Text>
        {/* <Button isRound={true} borderRadius="100%" onClick={decrementQuantity}>
          -
        </Button> */}

        <Button
          isRound={true}
          borderRadius="100%"
          onClick={decrementQuantity}
          bg={quantity === 0 ? "gray.300" : undefined}
        >
          -
        </Button>
      </HStack>
    </HStack>
  );
};
