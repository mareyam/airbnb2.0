import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Gallery } from "react-grid-gallery";

const DetailsImages = () => {
  return (
    <Box marginTop="4">
      <Gallery images={images} />
    </Box>
  );
};

export default DetailsImages;

const images = [
  {
    src: "/pic1.webp",
    width: "100%",
  },
  {
    src: "/pic2.webp",
    width: "100%",
  },
  {
    src: "/pic3.webp",
    width: "100%",
  },
  {
    src: "/pic4.webp",
    width: "100%",
  },
  {
    src: "/pic5.webp",
    width: "100%",
  },
  {
    src: "/pic6.webp",
    width: "100%",
  },
  {
    src: "/pic3.webp",
    width: "100%",
  },
  {
    src: "/pic4.webp",
    width: "100%",
  },
];
