import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  NextLink,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const FooterCard = () => {
  return (
    <VStack
      spacing={4} // You can adjust the spacing value as needed
      align="left"
      justify="left"
      textAlign="left"
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="400"
    >
      <Heading fontWeight="500" fontSize="20px" color="white">
        The Greatest Outdoors
      </Heading>
      <Text color="white" fontSize="12px">
        Wishlists curated by Airbnb
      </Text>

      <Box role="group">
        <Link as={NextLink} href="/places">
          <Button
            w="50%"
            _groupHover={{ transform: "scale(1.05)" }}
            transition="all 0.25s ease"
          >
            Get started
          </Button>
        </Link>
      </Box>
    </VStack>
  );
};

export default FooterCard;
