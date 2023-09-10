import React from "react";
import {
  Box,
  Heading,
  Tabs,
  TabList,
  Link,
  NextLink,
  Tab,
  HStack,
  TabPanels,
  TabPanel,
  SimpleGrid,
  VStack,
  Text,
  Container,
} from "@chakra-ui/react";
import CustomTabPanel from "@/common/CustomTabPanel";

const Footer = () => {
  return (
    <Container
      bg="gray.100"
      minW="100vw"
      position="sticky"
      top="0"
      zIndex="105"
      paddingLeft={{ base: "4", md: "10" }}
      paddingTop={{ base: "4", md: "10" }}
      marginTop="5"
    >
      <Heading fontSize={{ base: "20px", md: "28px" }} fontWeight="600">
        Inspiration for future getaways
      </Heading>
      <Tabs paddingTop="3">
        <TabList>
          <Tab>Popular</Tab>
          <Tab>Art&Culture</Tab>
          <Tab>Outdoors</Tab>
          <Tab>Mountains</Tab>
          <Tab>Popular</Tab>
          <Tab>Art&Culture</Tab>
          <Tab>Outdoors</Tab>
          <Tab>Mountains</Tab>
          <Tab>Outdoors</Tab>
        </TabList>

        <TabPanels>
          <CustomTabPanel start={0} end={17} />
          <CustomTabPanel start={10} end={19} />
          <CustomTabPanel start={20} end={29} />
          <CustomTabPanel start={30} end={39} />
          <CustomTabPanel start={40} end={49} />
          <CustomTabPanel start={50} end={59} />
          <CustomTabPanel start={60} end={69} />
          <CustomTabPanel start={70} end={79} />
          <CustomTabPanel start={80} end={89} />
          <CustomTabPanel start={90} end={99} />
        </TabPanels>
      </Tabs>

      <hr />
      <SimpleGrid pb="20" ml="4" mt="5" columns={{ base: 2, md: 3 }}>
        <VStack spacing="3" align="left">
          <Text fontWeight="600">Support</Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>Help Center</Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>AirCover</Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>
            Anti-discrimination
          </Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>
            Disability support
          </Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>
            Cancellation options
          </Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>
            Report neighborhood concern
          </Text>
        </VStack>
        <VStack spacing="3" align="left">
          <Text fontWeight="600">Hosting</Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>Airbnb your home</Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>
            AirCover for Hosts
          </Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>Hosting resources</Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>Community forum</Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>
            Hosting responsibly
          </Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>
            Airbnb-friendly apartments
          </Text>
        </VStack>

        <VStack spacing="3" align="left" marginTop={{base:'4', md:'0'}}>
          <Text fontWeight="600">Airbnb</Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>Newsroom</Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>New features</Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>Careers</Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>Investors</Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>Gift cards</Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>
            Airbnb.org emergency stays
          </Text>
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default Footer;
