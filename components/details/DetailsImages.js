import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const DetailsImages = ({ image }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => setHeight(ref.current.clientHeight), [ref.current]);
  console.log("heighy are");
  console.log(height);
  return (
    <Box marginTop="4">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Box>
          <Image
            src={image[0]}
            w="full"
            h="460px"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>

        <Box>
          <SimpleGrid columns={2} spacing={2} ref={ref}>
            {image?.slice(1, 5)?.map((item, index) => (
              <Box key={index}>
                <Image src={item} width="full" h="225px" />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default DetailsImages;

// const images = [
//   {
//     src: "/pic1.webp",
//   },
//   {
//     src: "/pic2.webp",
//   },
//   {
//     src: "/pic3.webp",
//   },
//   {
//     src: "/pic4.webp",
//   },
//   {
//     src: "/pic5.webp",
//   },
//   {
//     src: "/pic6.webp",
//   },
//   {
//     src: "/pic3.webp",
//   },
//   {
//     src: "/pic4.webp",
//   },
// ];
