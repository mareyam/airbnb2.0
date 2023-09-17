import {
  Box,
  Input,
  Image,
  Flex,
  Heading,
  Text,
  Button,
  Popover,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  IconButton,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Center,
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import Datepicker from "react-tailwindcss-datepicker";

import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useCalender } from "@/context/CalenderContext";
import getHelper from "@/lib/getHelper";

const CalenderCard = () => {
  console.log(getHelper());
  const { inputData } = useCalender();
  const [guestCount, setGuestCount] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleGuestCount = (guestCount) => {
    setGuestCount(guestCount);
  };

  const handleReset = () => {
    setGuestCount(0);
    setStartDate("");
    setEndDate("");
  };

  //extra
  console.log("input data in CDD" + inputData);

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
    // onClose();
  };

  return (
    <Box
      mt="100px"
      w="20vw"
      h="20vh"
      // align="center"
      // placement="center"
      // justifyContent="center"
      border="2px solid blue"
    >
      {/* {inputData && (
        <Box>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>

          <Text>hello</Text>
        </Box>
      )} */}

      {inputData && (
        <Popover
          w={{ base: "100%", md: "700px" }}
          border="2px solid"
          mt="5"
          align="center"
          placement="center"
          justifyContent="center"
        >
          <PopoverTrigger>
            <Button>Trigger</Button>
          </PopoverTrigger>
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
                      <SimpleGrid
                        mt="1"
                        columns={{ base: 2, md: 3 }}
                        spacing="2"
                      >
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
                      // isOpen={true}
                      // onClose={false}
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
      )}
    </Box>
  );
};

export default CalenderCard;

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

// <Box w={{ base: "50%", md: "100%" }}>
// <Center justifyContent="center" flexDirection="column" w="100%">
//   {inputData && (
//     <Box className="m-3 flex flex-col col-span-3">
//       <DateRangePicker
//         ranges={[selectionRange]}
//         minDate={new Date()}
//         rangeColors={["#FD586I"]}
//         onChange={handleSelect}
//       />
//       <HStack w="auto" justifyContent="space-between">
//         <Text fontWeight="600" fontSize="18px">
//           Number of guests
//         </Text>
//         <HStack>
//           <IconButton
//             rounded="full"
//             bg="white"
//             icon={
//               <Box>
//                 <Image
//                   src={
//                     guestCount === 1
//                       ? "/user-removebg-preview.png"
//                       : guestCount === 2
//                       ? "/people-removebg-preview.png"
//                       : "/group-removebg-preview.png"
//                   }
//                   h="20px"
//                   w="20px"
//                 />
//               </Box>
//             }
//           ></IconButton>

//           <NumberInput
//             w="75px"
//             onChange={handleGuestCount}
//             value={guestCount}
//             defaultValue={1}
//             min={1}
//             max={100}
//           >
//             <NumberInputField />
//             <NumberInputStepper>
//               <NumberIncrementStepper />
//               <NumberDecrementStepper />
//             </NumberInputStepper>
//           </NumberInput>
//           <p>{guestCount}</p>
//         </HStack>
//       </HStack>

//       <HStack justifyContent="space-between" mt="2">
//         <Button rounded="full" bg="gray.100" onClick={handleReset}>
//           Reset
//         </Button>
//         <Button rounded="full" bg="gray.100" color="orange">
//           Search
//         </Button>
//       </HStack>
//     </Box>
//   )}
// </Center>
// </Box>
