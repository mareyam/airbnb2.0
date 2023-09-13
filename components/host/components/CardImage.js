import React from "react";
import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Text,
  Heading,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

const CardImage = () => {
  return (
    <Container maxW="container.xl" overflowX="hidden">
      <Fade up>
        <Heading mt="5">Airbnb it easily with Airbnb Setup</Heading>
      </Fade>

      <Fade down>
        <Image
          src={"/hostimage.webp"}
          objectPosition="center"
          objectFit="cover"
          w="100%"
          mt="5"
          h={{ base: "300px", md: "100%" }}
        />
      </Fade>
      <SimpleGrid columns={{ base: 1, md: 3 }} mt="10" mb="5">
        <Fade left>
          <Box w={{ base: "100%", md: "90%" }}>
            <Heading fontSize="20px">
              One-to-one guidance from a Superhost
            </Heading>
            <Text>
              We will match you with a Superhost in your area, who’ll guide you
              from your first question to your first guest—by phone, video call,
              or chat.
            </Text>
          </Box>
        </Fade>
        <Fade up>
          <Box w={{ base: "100%", md: "90%" }}>
            <Heading fontSize="20px">
              An experienced guest for your first booking
            </Heading>
            <Text>
              For your first booking, you can choose to welcome an experienced
              guest who has at least three and a good track record on Airbnb.
            </Text>
          </Box>
        </Fade>

        <Fade right>
          <Box w={{ base: "100%", md: "90%" }}>
            <Heading fontSize="20px">Specialized support from Airbnb</Heading>
            <Text>
              New Hosts get one-tap access to specially trained Community
              Support agents who can help with everything from account issues to
              billing support.
            </Text>
          </Box>
        </Fade>
      </SimpleGrid>
    </Container>
  );
};

export default CardImage;
