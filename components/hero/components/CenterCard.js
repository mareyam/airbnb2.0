import { Center, Stack, Box, Button, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

export default function CenterCard() {
  return (
    <Center h="100%">
      <VStack textAlign="left" padding="5%" bgColor="white" opacity="0.75">
        <Stack spacing="2">
          <Heading
            marginTop="5%"
            fontSize="16px"
            fontWeight="bold"
            fontFamily="Poppins"
            letterSpacing="2px"
          >
            Not sure where to go? Perfecttt.
          </Heading>
          {/* <Button>I'm flexible</Button> */}

          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            align="center"
          >
            <Button w="100%">I'm flexible</Button>
          </motion.a>
        </Stack>
      </VStack>
    </Center>
  );
}
