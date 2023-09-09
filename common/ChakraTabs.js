import React from "react";
import {
  Tab,
  Link,
  NextLink,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
// import Link from "next/link";

const ChakraTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <Link as={NextLink} href="/home">
            Home
          </Link>
        </Tab>
        <Tab>
          <Link as={NextLink} href="/places">
            Home
          </Link>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>Home </p>
        </TabPanel>
        <TabPanel>
          <p>Places</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ChakraTabs;
