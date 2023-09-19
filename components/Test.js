import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import fetcher from "@/lib/fetcher";

const Test = () => {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <div>loading</div>;
  if (isError) return <div>err</div>;

  if (data) console.log(data);
  console.log(data);

  return data?.map((value, index) => <Post data={value} key={index}></Post>);
};

export default Test;

function Post({ data }) {
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
  } = data;
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

    // <div>
    //   <Text>id is {id}</Text>
    //   <Text>title is {title}</Text>
    // </div>
  );
}
