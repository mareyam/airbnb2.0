import { motion } from "framer-motion";

const AnimatedTextCharacter = () => {

  const text  = 'hello world';
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { Element, scroller } from "react-scroll";

// const Test2 = () => {
//   const controls = useAnimation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       // Define the scroll offset to trigger the animation
//       const scrollOffset = 100; // Adjust as needed

//       if (scrollPosition > scrollOffset) {
//         controls.start({ opacity: 1 });
//       } else {
//         controls.start({ opacity: 0 });
//       }
//     };

//     // Attach the scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       // Remove the scroll event listener on component unmount
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [controls]);

//   const scrollToNextSection = () => {
//     // Scroll to the next section using react-scroll
//     scroller.scrollTo("nextSection", {
//       duration: 800,
//       smooth: true,
//     });
//   };

//   return (
//     <div style={{ height: "200vh" }}>
//       <Element name="nextSection">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={controls}
//           transition={{ opacity: { duration: 1 } }}
//           style={{ opacity: 0, textAlign: "center", paddingTop: "50vh" }}
//         >
//           <h1>Fade In on Scroll</h1>
//           <p>Scroll down to see the content appear.</p>
//           <button onClick={scrollToNextSection}>Scroll to Next Section</button>
//         </motion.div>
//       </Element>
//     </div>
//   );
// };

// export default Test2;

// import { useRef } from "react";
// import moon from "../public/moon.png";
// import land from "../public/land.png";
// import cat from "../public/cat.gif";

// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { Box, Heading } from "@chakra-ui/react";

// function App() {
//   const ref = useRef();

//   return (
//     <Box>
//       <Heading>hello world</Heading>

//       <Parallax pages={4}>
//         <ParallaxLayer speed={1}>
//           <Heading>Welcome to website</Heading>
//         </ParallaxLayer>

//         <ParallaxLayer offset={1} speed={0.5}>
//           <Heading>Welcome to website</Heading>
//         </ParallaxLayer>
//       </Parallax>
//     </Box>
//   );
// }

// export default App;
{
  /* <Parallax pages={4} ref={ref}>
        <ParallaxLayer speed={1}>
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <h2>Web development is fun!</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",

            w: "100vw",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
            w: "100vw",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} w="100vw" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Hi Mom!</h2>
        </ParallaxLayer>
      </Parallax> */
}
