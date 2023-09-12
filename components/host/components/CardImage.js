import React from "react";
import { Box, Image, SimpleGrid, Text, Heading } from "@chakra-ui/react";

const CardImage = () => {
  return (
    <Box w="100vw" h="100vh">
      <Image src={"/hostimage.webp"} />
      <SimpleGrid columns={{ base: 1, md: 3 }}>
        <>
          <Heading fontSize="20px">
            One-to-one guidance from a Superhost
          </Heading>
          <Text>
            We will match you with a Superhost in your area, who’ll guide you
            from your first question to your first guest—by phone, video call,
            or chat.
          </Text>
        </>

        <>
          <Heading fontSize="20px">
            One-to-one guidance from a Superhost
          </Heading>
          <Text>
            We will match you with a Superhost in your area, who’ll guide you
            from your first question to your first guest—by phone, video call,
            or chat.
          </Text>
        </>

        <>
          <Heading fontSize="20px">
            One-to-one guidance from a Superhost
          </Heading>
          <Text>
            We will match you with a Superhost in your area, who’ll guide you
            from your first question to your first guest—by phone, video call,
            or chat.
          </Text>
        </>

        {/* <>
          <Heading fontSize="20px">
            An experienced guest for your first booking
          </Heading>
          <Text>
            For your first booking, you can choose to welcome an experienced
            guest who has at least three stays and a good track record on
            Airbnb.
          </Text>
        </>

        <>
          <Heading fontSize="20px">Specialized support from Airbnb</Heading>
          <Text>
            New Hosts get one-tap access to specially trained Community Support
            agents who can help with everything from account issues to billing
            support.
          </Text>
        </> */}
      </SimpleGrid>
    </Box>
  );
};

export default CardImage;
