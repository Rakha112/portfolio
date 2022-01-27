import React, { useEffect, useRef, useState } from "react";
import "../css/halopage.css";
import { motion } from "framer-motion";
import gsap from "gsap";
import useWindowSize from "../hooks/useWindowSize";
const HaloPage = () => {
  const { width, height } = useWindowSize();
  const [halo, setHalo] = useState(false);
  const haloRef = useRef(null);
  const haloRef2 = useRef(null);
  const h1 = useRef(null);
  const h2 = useRef(null);

  useEffect(() => {
    const widthParam1 = () => {
      if (width >= 1500) {
        return "50rem";
      } else if (width >= 1000 && height >= 600) {
        return "38rem";
      } else if (width >= 700) {
        return "40rem";
      } else if (width >= 500) {
        return "30rem";
      } else {
        return "20rem";
      }
    };
    const widthParam2 = () => {
      if (width >= 1500) {
        return "52rem";
      } else if (width >= 1000 && height >= 600) {
        return "40rem";
      } else if (width >= 700) {
        return "42rem";
      } else if (width >= 500) {
        return "32rem";
      } else {
        return "22rem";
      }
    };

    setTimeout(() => {
      gsap.to(haloRef.current, {
        duration: 1.5,
        borderRadius: "50%",
        width: widthParam1,
        height: widthParam1,
        ease: "Power4.easeOut",
      });
      gsap.to(haloRef2.current, {
        delay: 0.1,
        duration: 1.5,
        borderRadius: "50%",
        width: widthParam2,
        height: widthParam2,
        ease: "Power4.easeOut",
      });
      gsap.from(h1.current, {
        opacity: 0,
        duration: 1.5,
        fontSize: "20rem",
        ease: "Power4.easeOut",
      });
      gsap.from(h2.current, {
        opacity: 0,
        duration: 1.5,
        fontSize: "15rem",
        ease: "Power4.easeOut",
      });

      setHalo(true);
    }, 2000);
  }, [height, width]);

  const haloVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  };
  // const firstName = {
  //   initial: {
  //     y: 0,
  //   },
  //   animate: {
  //     y: 0,
  //     transition: {
  //       delayChildren: 2.8,
  //       staggerChildren: 0.04,
  //       staggerDirection: 1,
  //     },
  //   },
  // };

  const letter = {
    initial: {
      y: 400,
    },
    animate: {
      y: [400, 0, 0, 0, 400],
      transition: {
        duration: 2,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };
  // const letter2 = {
  //   initial: {
  //     y: 400,
  //   },
  //   animate: {
  //     y: 0,
  //     transition: {
  //       duration: 1.4,
  //       ease: [0.6, 0.01, -0.05, 0.9],
  //     },
  //   },
  // };
  let text = "halo!";
  // let text2 = "Farid Fawwaz";
  // let text3 = "Rakha Wibowo";
  const myArray = text.split("");
  // const myArray2 = text2.split("");
  // const myArray3 = text3.split("");
  return (
    <div className="halo-page">
      <motion.h1
        className="halo-page-h1"
        variants={haloVariants}
        initial="initial"
        animate="animate"
        style={halo ? { display: "none" } : { display: "flex" }}
      >
        {myArray.map((huruf, i) => {
          return (
            <motion.span variants={letter} key={i}>
              {huruf}
            </motion.span>
          );
        })}
      </motion.h1>

      <motion.h2
        ref={h2}
        initial="initial"
        animate="animate"
        style={halo ? { display: "flex" } : { display: "none" }}
      >
        <motion.span>farid</motion.span>
        <motion.span>&nbsp;</motion.span>
        <motion.span>fawwaz</motion.span>
      </motion.h2>
      <motion.h1
        ref={h1}
        initial="initial"
        animate="animate"
        style={halo ? { display: "flex" } : { display: "none" }}
      >
        <motion.span>rakha</motion.span>
        <motion.span>&nbsp;</motion.span>
        <motion.span>wibowo</motion.span>
      </motion.h1>
      <motion.div className="bunder" ref={haloRef}></motion.div>
      <div className="bunder2" ref={haloRef2}></div>
    </div>
  );
};

export default HaloPage;
