import React from "react";
import "../css/bannersection.css";
import Banner from "./Banner";
import { motion } from "framer-motion";
const BannerSection = () => {
  return (
    <div id="banner-section" className="banner-section" data-scroll-section>
      <Banner />
      <motion.div className="home-page-transition">
        <div className="nav-mobile">
          <div className="ham">
            <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fdf6f0" fillRule="evenodd">
                <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
              </g>
            </svg>
          </div>
        </div>
        <motion.div className="nav-home-page">
          <motion.div className="nav-kiri">
            <motion.h2
              initial={{ y: 100 }}
              exit={{ y: 0 }}
              transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
              id="about"
            >
              about
            </motion.h2>
            <motion.h1
              initial={{ y: 100 }}
              exit={{ y: 0 }}
              transition={{
                delay: 0.2,
                duration: 1.4,
                ease: [0.6, 0.01, -0.05, 0.9],
              }}
              id="rakha"
            >
              rakha
            </motion.h1>
          </motion.div>
          <motion.div className="nav-kanan">
            <motion.h1
              initial={{ y: 100 }}
              exit={{ y: 0 }}
              transition={{
                delay: 0.4,
                duration: 1.4,
                ease: [0.6, 0.01, -0.05, 0.9],
              }}
              id="wibowo"
            >
              wibowo
            </motion.h1>
            <motion.h2
              initial={{ y: 100 }}
              exit={{ y: 0 }}
              transition={{
                delay: 0.6,
                duration: 1.4,
                ease: [0.6, 0.01, -0.05, 0.9],
              }}
              id="contact"
            >
              contact
            </motion.h2>
          </motion.div>
        </motion.div>
        <motion.div className="home-page-container">
          <motion.div
            initial={{ flex: 0 }}
            exit={{ flex: 1 }}
            transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
            className="fotografer-section"
          >
            <div className="fotografer" style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: 100, display: "none" }}
                exit={{ y: 0, display: "block" }}
                transition={{
                  delay: 0.8,
                  duration: 1.4,
                  ease: [0.6, 0.01, -0.05, 0.9],
                }}
              >
                fotografer
              </motion.h1>
            </div>
          </motion.div>
          <motion.div className="fullstack-section">
            <div className="fullstack" style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: 100 }}
                exit={{ y: 0 }}
                transition={{
                  delay: 1,
                  duration: 1.4,
                  ease: [0.6, 0.01, -0.05, 0.9],
                }}
              >
                fullstack developer
              </motion.h1>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BannerSection;
