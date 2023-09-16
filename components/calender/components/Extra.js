import {
  Box,
  Input,
  Image,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
  Center,
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useCalender } from "@/context/CalenderContext";

const Extra = () => {
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

  return (
    <Box w={{ base: "50%", md: "100%" }}>
      <Center justifyContent="center" flexDirection="column" w="100%">
        {inputData && (
          <Box className="m-3 flex flex-col col-span-3">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD586I"]}
              onChange={handleSelect}
            />
            <HStack w="auto" justifyContent="space-between">
              <Text fontWeight="600" fontSize="18px">
                Number of guests
              </Text>
              <HStack>
                <IconButton
                  rounded="full"
                  bg="white"
                  icon={
                    <Box>
                      <Image
                        src={
                          guestCount === 1
                            ? "/user-removebg-preview.png"
                            : guestCount === 2
                            ? "/people-removebg-preview.png"
                            : "/group-removebg-preview.png"
                        }
                        h="20px"
                        w="20px"
                      />
                    </Box>
                  }
                ></IconButton>

                <NumberInput
                  w="75px"
                  onChange={handleGuestCount}
                  value={guestCount}
                  defaultValue={1}
                  min={1}
                  max={100}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <p>{guestCount}</p>
              </HStack>
            </HStack>

            <HStack justifyContent="space-between" mt="2">
              <Button rounded="full" bg="gray.100" onClick={handleReset}>
                Reset
              </Button>
              <Button rounded="full" bg="gray.100" color="orange">
                Search
              </Button>
            </HStack>
          </Box>
        )}
      </Center>
    </Box>
  );
};

export default Extra;
