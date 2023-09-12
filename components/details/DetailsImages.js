import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const DetailsImages = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => setHeight(ref.current.clientHeight), [ref.current]);

  return (
    <Box marginTop="4">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Box>
          <Image
            src={images[0].src}
            w="full"
            h={height}
            objectFit="cover"
            objectPosition="center"
          />
        </Box>

        <Box>
          <SimpleGrid columns={2} spacing={2} ref={ref}>
            {images.slice(1, 5).map((item, index) => (
              <Box key={index}>
                <Image src={item.src} width="full" />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default DetailsImages;

const images = [
  {
    src: "/pic1.webp",
  },
  {
    src: "/pic2.webp",
  },
  {
    src: "/pic3.webp",
  },
  {
    src: "/pic4.webp",
  },
  {
    src: "/pic5.webp",
  },
  {
    src: "/pic6.webp",
  },
  {
    src: "/pic3.webp",
  },
  {
    src: "/pic4.webp",
  },
];
