import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import { usePlaces } from "@/hooks/usePlaces";
import Layout from "@/components/layout/Layout";
import HeroImage from "@/components/hero/components/HeroImage";
import Places from "@/components/places/components/LiveAnywhere";
import Explore from "@/components/explore/components/Explore";
import LiveAnywhere from "@/components/places/components/LiveAnywhere";
import FooterImage from "@/components/hero/components/FooterImage";
import CalenderCard from "@/components/calender/components/CalenderCard";
import { CalenderProvider } from "@/context/CalenderContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, isLoading, isError } = usePlaces();
  console.log("data in index.js is");
  console.log({ data });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <CalenderProvider>
      <Layout>
        <CalenderCard />
        <HeroImage />
        <Explore />
        <LiveAnywhere />
        <FooterImage />
      </Layout>
    </CalenderProvider>
  );
}

// const { data } = useQuery({
//   queryKey: ["todos"],
//   queryFn: async () => {
//     const response = await axios.get("/api/hello");
//     return response.data;
//   },
// });
//   console.log("data in index.js is")
//   console.log({ data });

//   return (
//     <Box border="2px solid">
//       <p>showing data</p>
//       {data?.map((item) => (
//         <p>{item.title}</p>
//       ))}
//     </Box>
//   );
// }
