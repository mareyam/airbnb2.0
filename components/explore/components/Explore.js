import { usePlaces } from "@/hooks/usePlaces";
import React, { useState, useEffect } from "react";
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
import Fade from "react-reveal/Fade";
import { Element, scroller } from "react-scroll";

const Explore = () => {
  const { data, isLoading, isError } = usePlaces();
  console.log("data in Places.js is");
  console.log({ data });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down"); // Initial scroll direction

  {
    data &&
      useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          console.log("current scoll is" + currentScrollY);

          if (currentScrollY > 0) {
            // Scrolling down
            if (scrollDirection !== "down") {
              // Only change the state when changing direction
              setScrollDirection("down");
              setIsVisible(true);
            }
          } else {
            // Scrolling up
            if (scrollDirection !== "up") {
              // Only change the state when changing direction
              setScrollDirection("up");
              setIsVisible(false);
            }
          }
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Remove the scroll event listener on component unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [scrollDirection]);
  }
  const delay = 100;

  return (
    <Container maxW="container.xl">
      <Heading
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="300"
        mt="2"
        mb="2"
        fontSize="25px"
      >
        Explore nearby
      </Heading>
      <Box
        data-aos="fade-left"
        data-aos-easing="linear"
        // data-aos-duration="300"
      >
        <SimpleGrid my="2" columns={{ base: 1, md: 4 }} spacing="5">
          {data?.map((item, index) => (
            <Box role="group">
              <HStack
                // data-aos-delay={index * delay}
                key={item.id}
                _groupHover={{ transform: "scale(1.05)" }}
                transition="all 0.5s ease"
              >
                <Image
                  borderRadius="10%"
                  src={item.image}
                  h="100px"
                  w="100px"
                />
                <VStack textAlign="left" align="left">
                  <Text fontWeight="700" fontSize="12px">
                    {item.title}
                  </Text>
                  <Text color="gray.600" fontSize="12px">
                    {item.location}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};
export default Explore;

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
