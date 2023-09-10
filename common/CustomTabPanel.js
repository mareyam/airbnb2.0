import React from "react";
import {
  Box,
  Heading,
  Tabs,
  TabList,
  Link,
  NextLink,
  Tab,
  TabPanels,
  TabPanel,
  SimpleGrid,
  VStack,
  Text,
  Button,
  Collapse,
} from "@chakra-ui/react";
import { useFooter } from "@/hooks/useFooter";

const CustomTabPanel = ({ start, end }) => {
  const [show, setShow] = React.useState(false);
  const itemsToShow = show ? 30 : 17;

  const handleToggle = () => setShow(!show);

  const { data, isLoading, isError } = useFooter();
  console.log("data in Places.js is");
  console.log({ data });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <TabPanel>
      <Box>
        <SimpleGrid columns={{ base: "3", md: 6 }}>
          {data?.slice(start, start + itemsToShow).map((item) => (
            <VStack spacing="0" mt="5" align="left">
              <Text fontWeight="700">{item.name}</Text>
              <Text>{item.type}</Text>
            </VStack>
          ))}
          <Box
            onClick={handleToggle}
            as="Button"
            mt="3"
            align="left"
            textAlign="left"
          >
            <Text textDecoration="underline" fontWeight="700">
              Show {show ? "Less" : "More"}
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </TabPanel>
  );
};

export default CustomTabPanel;

