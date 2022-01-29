import React from "react";
import "../css/banner.css";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <motion.div>
      <motion.div
        exit={{ x: "400%" }}
        transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }}
        id="ban1"
        className="banner"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-20"
        data-scroll-target="#banner-section"
      >
        <h2>scroll &#183; scroll &#183; scroll &#183; scroll</h2>
      </motion.div>
      <motion.div
        exit={{ x: "-400%" }}
        transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }}
        id="ban2"
        className="banner2"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="20"
        data-scroll-target="#banner-section"
      >
        <h2>Selamat datang &#183; Selamat datang</h2>
      </motion.div>

      <motion.div
        exit={{ x: "400%" }}
        transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }}
        id="ban3"
        className="banner"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-20"
        data-scroll-target="#banner-section"
      >
        <h2>Selamat datang &#183; Selamat datang</h2>
      </motion.div>
      <motion.div
        exit={{ x: "-400%" }}
        transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }}
        id="ban4"
        className="banner2"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="20"
        data-scroll-target="#banner-section"
      >
        <h2>scroll &#183; scroll &#183; scroll &#183; scroll</h2>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
