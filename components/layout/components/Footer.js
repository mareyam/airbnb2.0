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
      paddingLeft="10"
      paddingTop="10"
      marginTop='5'
    >
      <Heading fontSize="28px" fontWeight="600">
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
          <Text>Help Center</Text>
          <Text>AirCover</Text>
          <Text>Anti-discrimination</Text>
          <Text>Disability support</Text>
          <Text>Cancellation options</Text>
          <Text>Report neighborhood concern</Text>
        </VStack>
        <VStack spacing="3" align="left">
          <Text fontWeight="600">Hosting</Text>
          <Text>Airbnb your home</Text>
          <Text>AirCover for Hosts</Text>
          <Text>Hosting resources</Text>
          <Text>Community forum</Text>
          <Text>Hosting responsibly</Text>
          <Text>Airbnb-friendly apartments</Text>
        </VStack>

        <VStack spacing="3" align="left">
          <Text fontWeight="600">Airbnb</Text>
          <Text>Newsroom</Text>
          <Text>New features</Text>
          <Text>Careers</Text>
          <Text>Investors</Text>
          <Text>Gift cards</Text>
          <Text>Airbnb.org emergency stays</Text>
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default Footer;
