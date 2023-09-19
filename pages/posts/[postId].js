import React, { use } from "react";
import getPost from "@/lib/getHelper";
import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import fetcher from "@/lib/fetcher";
import { useRouter } from "next/router";

import DetailsImages from "@/components/details/DetailsImages";
import DetailsHeader from "@/components/details/DetailsHeader";
import DetailsInformation from "@/components/details/DetailsInformation";
import Layout from "@/components/layout/Layout";
import { CalenderProvider } from "@/context/CalenderContext";
import Offers from "@/components/details/Offers";
import BookingCalender from "@/components/details/BookingCalender";
import Reviews from "@/components/reviews/Reviews";
import CalenderCard from "@/components/calender/components/CalenderCard";
import { SWRConfig } from "swr";

export default function Page({ fallback }) {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);
  if (isLoading) return <div>loading</div>;
  if (isError) return <div>error</div>;
  const {
    city,
    country,
    id,
    title,
    description,
    location,
    price_per_night,
    number_of_bedrooms,
    number_of_bathrooms,
    max_guests,
    amenities,
    image,
    host,
    career,
    stars,
    reviews,
    cost,
  } = data;
  console.log(data.amenities);

  return (
    <SWRConfig value={{ fallback }}>
      <CalenderProvider>
        <Layout>
          <Container maxW="container.xl">
            <DetailsHeader
              title={title}
              stars={stars}
              reviews={reviews}
              location={location}
              career={career}
              amenities={amenities}
            />
            <DetailsImages image={image} />
            <DetailsInformation
              cost={cost}
              reviews={reviews}
              stars={stars}
              description={description}
              amenities={amenities}
            />
            <Offers />
            <Reviews />
          </Container>
        </Layout>
      </CalenderProvider>
    </SWRConfig>
  );
}

const Article = ({
  city,
  country,
  id,
  title,
  description,
  location,
  price_per_night,
  number_of_bedrooms,
  number_of_bathrooms,
  max_guests,
  amenities,
  image,
  host,
  career,
}) => {
  return (
    <Box mt="10%">
      <Heading
        fontSize="25px"
        fontWeight="600"
        textAlign={{ base: "center", md: "left" }}
      >
        {id} {title}
      </Heading>
      <SimpleGrid
        textAlign={{ base: "center", md: "left" }}
        display={{ base: "block", md: "flex" }}
        columns={{ base: 2, md: 1 }}
        marginTop="3"
        spacing="5"
      >
        <Box display="flex" justifyContent={{ base: "center", md: "left" }}>
          <Text>&#9733;</Text>
          <Text>4.87</Text>
        </Box>
        <Text>· 238 reviews </Text>
        <Text>· Superhost </Text>
        <Text fontWeight="700">· Abiansemal, Bali, Indonesia </Text>
      </SimpleGrid>
    </Box>
  );
};

export async function getStaticProps({ params }) {
  const posts = await getPost(params.postId);
  return {
    props: {
      fallback: {
        "api/posts": posts,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPost();
  const paths = posts.map((value) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

// import Layout from "@/components/layout/Layout";
// import { CalenderProvider } from "@/context/CalenderContext";
// import React from "react";
// import getPost from "@/lib/getHelper";
// import { Text } from "@chakra-ui/react";
// import fetcher from "@/lib/fetcher";

// const Page = ({ id, title }) => {
//   const {data, isLoading, isError} = fetcher('api/posts/1')
//   if(isLoading) return <div>..is loading</div>
//   if(isError) return <div>..is error</div>

//   console.log("inside posts/postid");
//   return (
//     <CalenderProvider>
//       <Layout>
//         Hello
//         <Text>{id}</Text>
//         <Text>title is {title}</Text>
//       </Layout>
//     </CalenderProvider>
//   );
// };

// export default Page;

// export async function getStaticProps({ params }) {
//   const posts = await getPost(params.postId);
//   return {
//     props: posts,
//   };
// }

// export async function getStaticPaths() {
//   const posts = await getPost();
//   const paths = posts.map((value) => {
//     return {
//       params: {
//         postId: value.id.toString(),
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }
