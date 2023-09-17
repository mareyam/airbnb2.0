import React from "react";
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

const Page = ({
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
        {title}
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

    // <div>
    //   <Text>text is {id}</Text>
    //   <Text>text is {title}</Text>
    //   all the detail page
    // </div>
  );
};

export default Page;

export async function getStaticProps({ params }) {
  const posts = await getPost(params.postId);
  return {
    props: posts,
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
