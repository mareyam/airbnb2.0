import React from "react";
import { Box, Text, IconButton, Image, Button, HStack } from "@chakra-ui/react";

const Filters = () => {
  return (
    <HStack>
      <Button margin="5" bg="white" p="5" border="1px solid gray">
        <IconButton
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
