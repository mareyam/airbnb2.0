import {
  Center,
  Stack,
  Box,
  Button,
  Link,
  NextLink,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import TypeWriter from "@/common/TypeWriter";

import { motion } from "framer-motion";

export default function CenterCard() {
  const text = "Not sure where to go? Perfecttt.";
  return (
    <Center h="100%">
      <VStack textAlign="left" padding="5%" bgColor="white" opacity="0.75">
        <Stack spacing="2">
          <Heading
            marginTop="5%"
            fontSize="24px"
            fontWeight="bold"
            fontFamily="Poppins"
            letterSpacing="2px"
          >
            <TypeWriter text={text} />
          </Heading>
          {/* <Button>I'm flexible</Button> */}

          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            align="center"
          >
            <Link as={NextLink} href="/places">
              <Button w="100%">I'm flexible</Button>
            </Link>
          </motion.a>
        </Stack>
      </VStack>
    </Center>
  );
}
