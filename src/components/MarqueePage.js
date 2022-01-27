import React from "react";
import "../css/marqueepage.css";
import useWindowSize from "../hooks/useWindowSize";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const MarqueePage = () => {
  const { width } = useWindowSize();
  return (
    <motion.div
      className="container_marquee"
      data-scroll-section
      exit={{ opacity: 0 }}
    >
      <Marquee speed={width < 1000 ? 50 : 100} gradient={false}>
        <h2>
          Selamat datang &#183; Selamat datang &#183; Selamat datang &#183;
          Selamat datang &#183; Selamat datang &#183; Selamat datang &#183;
        </h2>
      </Marquee>
    </motion.div>
  );
};

export default MarqueePage;
