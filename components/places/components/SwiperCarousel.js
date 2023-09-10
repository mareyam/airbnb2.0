import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import {
  Image,
  Box,
  Text,
  Heading,
  Stack,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { usePlaces } from "@/hooks/usePlaces";

const SwiperCarousel = () => {
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
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data?.map((item) => {
        return (
          <SwiperSlide>
            <Box
              borderRadius="3%"
              position="relative"
              w={{ base: "100%", md: "100%" }}
              h={{ base: "300px", md: "500px" }}
              background="center"
              backgroundSize="cover"
              bgImage={item.image}
            >
              <Center
                bg="rgba(255, 255, 255, 0.5)"
                // border='1px solid gray'
                borderRadius="5%"
                color="black"
                position="absolute"
                m={{ base: "2", md: "5" }}
                p={{ base: "2", md: "5" }}
                bottom="1"
                w={{ base: "200px", md: "250px" }}
                h={{ base: "150px", md: "150px" }}
              >
                <Stack spacing="2">
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    {item.id} - {item.title}
                  </Text>
                  <Heading fontSize={{ base: "sm", md: "md" }}>
                    {item.details}
                  </Heading>
                </Stack>
              </Center>
              {/* <IconButton
                  w='auto'
                  right='0'
                  bottom='0'
                  position='absolute'
                  isRound={true}
                  onClick={() => handleAddToCart(item)}
                  backgroundColor="gray.100"
                  icon={<Box>&#128722;</Box>}
                ></IconButton> */}

              <IconButton
              
                isRound={true}
                w="auto"
                bottom="5"
                right="2"
                position="absolute"
                fontSize={{ base: "xl", md: "md" }}
                variant="outline"
                icon={<Box>&#128722;</Box>}
              ></IconButton>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCarousel;
