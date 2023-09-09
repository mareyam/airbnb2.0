import React from "react";
import Places from "@/components/places/components/Places";
import Layout from "@/components/layout/Layout";
import { CalenderProvider } from "@/context/CalenderContext";
import CalenderCard from "@/components/calender/components/CalenderCard";

const places = () => {
  return (
    <CalenderProvider>
      <Layout>
        <CalenderCard />
        <Places />
      </Layout>
    </CalenderProvider>
  );
};

export default places;
