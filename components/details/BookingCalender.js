import { Box, Text, Heading, Divider } from "@chakra-ui/react";
import React from "react";
import CalenderCard from "../calender/components/CalenderCard";

const BookingCalender = () => {
  return (
    <Box mb="5">
      <Heading fontSize="22px" fontWeight="500">
        Select check-in date
      </Heading>
      <Text>Add your travel dates for exact pricing</Text>
      {/* <CalenderCard /> */}
      {/* <Divider my="5" /> */}
    </Box>
  );
};

export default BookingCalender;
