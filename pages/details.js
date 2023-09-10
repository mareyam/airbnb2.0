import React from "react";
import { Container } from "@chakra-ui/react";

import DetailsImages from "@/components/details/DetailsImages";
import DetailsHeader from "@/components/details/DetailsHeader";
import DetailsInformation from "@/components/details/DetailsInformation";
import Layout from "@/components/layout/Layout";
import { CalenderProvider } from "@/context/CalenderContext";

const details = () => {
  return (
    <CalenderProvider>
      <Layout>
        <Container maxW="container.xl">
          <DetailsHeader />
          <DetailsImages />
          <DetailsInformation />
        </Container>
      </Layout>
    </CalenderProvider>
  );
};

export default details;
