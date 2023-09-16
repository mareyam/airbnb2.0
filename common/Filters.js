import React from "react";
import { Box, Text, IconButton, Image, Button, HStack } from "@chakra-ui/react";

const Filters = () => {
  return (
    <HStack role="group">
      <Button
        _groupHover={{
          bgColor: "white",
          transform: "scale(1.1)",
        }}
        margin="5"
        bg="white"
        p="6"
        w="55%"
        border="1px solid gray"
      >
        <IconButton
          _groupHover={{
            bgColor: "white",
          }}
          bg="white"
          icon={
            <Box>
              <Image src="/filter.png" w="15px" h="15px" />
            </Box>
          }
        ></IconButton>
        <Text fontSize="12px">Filters</Text>
      </Button>
    </HStack>
  );
};

export default Filters;
