import React from "react";
import { Container } from "@chakra-ui/react";

import DetailsImages from "@/components/details/DetailsImages";
import DetailsHeader from "@/components/details/DetailsHeader";
import DetailsInformation from "@/components/details/DetailsInformation";
import Layout from "@/components/layout/Layout";
import { CalenderProvider } from "@/context/CalenderContext";
import Offers from "@/components/details/Offers";
import BookingCalender from "@/components/details/BookingCalender";
import Reviews from "@/components/reviews/Reviews";
import CalenderCard from "@/components/calender/components/CalenderCard";

const details = () => {
  return (
    <CalenderProvider>
      <Layout>
        <Container maxW="container.xl">
          <DetailsHeader />
          <DetailsImages />
          <DetailsInformation />
          <Offers />
          {/* <BookingCalender /> */}
          {/* <CalenderCard /> */}

          <Reviews />
        </Container>
      </Layout>
    </CalenderProvider>
  );
};

export default details;
