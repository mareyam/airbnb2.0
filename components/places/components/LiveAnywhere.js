import React from "react";
import { usePlaces } from "@/hooks/usePlaces";
import {
  Container,
  SimpleGrid,
  Box,
  HStack,
  Image,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";

const LiveAnywhere = () => {
  const { data, isLoading, isError } = usePlaces();
  console.log("data in Places.js is");
  console.log({ data });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <Container maxW="container.xl">
      {/* <SwiperCarousel /> */}
      <Box
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Heading mt="2" mb="2" fontSize="25px">
          Live Anywhere
        </Heading>
        <SimpleGrid my="2" columns={{ base: 1, md: 4 }} spacing="1">
          {data?.slice(0, 4).map((item) => (
            <VStack textAlign="left" align="left">
              <Image borderRadius="5%" src={item.image} h="300px" w="300px" />
              <Text fontWeight="600" fontSize="20px">
                {item.title}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default LiveAnywhere;

// const PlacesList = [
//   {
//     id: 1,
//     title: "Cozy Downtown Apartment",
//     description:
//       "A comfortable and stylish apartment in the heart of the city.",
//     location: "Downtown, Cityname",
//     price_per_night: 150,
//     number_of_bedrooms: 2,
//     number_of_bathrooms: 1.5,
//     max_guests: 4,
//     amenities: ["Wi-Fi", "Kitchen", "TV", "Washer/Dryer", "Free Parking"],
//   },
//   {
//     id: 2,
//     title: "Seaside Villa with Private Beach",
//     description:
//       "A luxurious villa with breathtaking ocean views and direct beach access.",
//     location: "Beachfront, Coastal Town",
//     price_per_night: 350,
//     number_of_bedrooms: 4,
//     number_of_bathrooms: 3,
//     max_guests: 8,
//     amenities: [
//       "Ocean View",
//       "Private Beach",
//       "Swimming Pool",
//       "Hot Tub",
//       "BBQ Grill",
//     ],
//   },
//   {
//     id: 3,
//     title: "Rustic Cabin in the Woods",
//     description:
//       "Escape to a peaceful cabin surrounded by nature and wildlife.",
//     location: "Forest Retreat, Wilderness",
//     price_per_night: 80,
//     number_of_bedrooms: 1,
//     number_of_bathrooms: 1,
//     max_guests: 2,
//     amenities: [
//       "Nature Trails",
//       "Fireplace",
//       "Pet-Friendly",
//       "Outdoor Seating",
//       "No Wi-Fi",
//     ],
//   },
// ];

// console.log("places------>>");
// console.log({ data });

// const place = data ?? [];
// console.log("places are ");
// console.log(place);

// const { data: places, isLoading, isError } = usePlaces();

// if (isLoading) {
//   return <div>Loading...</div>;
// }

// if (isError) {
//   return <div>Error fetching data</div>;
// }

// const { Places } = usePlaces();

// const placess = Places ?? [];

// console.log(placess);

// if (placess) {
//   console.log("places is present");
// } else console.log("not places");
