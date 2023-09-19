import React, { useState, useEffect } from "react";
import {
  HStack,
  Image,
  Flex,
  VStack,
  Text,
  Heading,
  Box,
  Container,
  SimpleGrid,
  Skeleton,
  Link,
} from "@chakra-ui/react";
import { usePlaces } from "@/hooks/usePlaces";
import fetcher from "@/lib/fetcher";

const GridView = () => {
  const { data, isLoading, isError } = fetcher(`api/posts/`);

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      //until data is nnot loaded, else it will keep display skeleton
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 2000);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <>
        <Skeleton fontSize="25px">
          <Heading fontSize="25px">Stays in city</Heading>
        </Skeleton>

        <SimpleGrid mt="5" columns={{ base: 1, md: 4 }} spacing="5">
          {[1, 2, 3, 4].map((index) => (
            <VStack w="100%" key={index}>
              <Skeleton height="300px" width="100%" />
              <Skeleton height="20px" width="50%" />
              <Skeleton height="20px" width="70%" />
              <Skeleton height="20px" width="60%" />
            </VStack>
          ))}
        </SimpleGrid>
      </>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <Heading fontSize="25px">Stays in London </Heading>
      <SimpleGrid mt="5" columns={{ base: 1, md: 4 }} spacing="5">
        {data?.map((item) => (
          <VStack w="100%" key={item.id}>
            {/* <Link href={`/posts/${id}`}> */}
            {/* <Image src={firstImage} h="100px" w="100px" /> */}
            <Link href={`/posts/`}>
              <Box
                bgImage={item.image[0]}
                bgSize="cover"
                bgPosition="center"
                boxSize="300px"
                borderRadius="5%"
                w="100%"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="300"
              />
            </Link>
            <Flex w="100%" justifyContent="space-between">
              <Box>
                <Heading fontSize="15px">
                  {item.city}, {item.country}
                </Heading>
                <Text color="gray.500">
                  Stay with {item.host}. {item.career}
                </Text>
                <Text color="gray.500">Sep 14-19</Text>
                <Text textDecoration="underline">
                  <Box as="span" fontWeight="600">
                    ${item.price_per_night} /
                  </Box>
                  night
                </Text>
              </Box>
              <Box display="flex">
                <Text>&#9733;</Text>
                <Text>{item.stars}</Text>
              </Box>
            </Flex>
          </VStack>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GridView;
