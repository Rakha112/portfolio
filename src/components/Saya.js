import { motion } from "framer-motion";
import React from "react";
import "../css/saya.css";
const Saya = () => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const firstName = {
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

  const letter = {
    initial: {
      y: 300,
    },
    animate: {
      y: 0,
      transition: { duration: 2, ...transition },
    },
  };
  let text1 = "saya rakha.";
  let text2 = "fullstack developer.";
  let text3 = "food fotografer.";
  let text4 = "domisili purwokerto.";
  const myArray1 = text1.split("");
  const myArray2 = text2.split("");
  const myArray3 = text3.split("");
  const myArray4 = text4.split("");

  return (
    <motion.div className="container_saya" data-scroll-section>
      <motion.div className="saya">
        <motion.div className="saya2">
          <motion.h1
            variants={firstName}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {myArray1.map((huruf, i) => {
              if (huruf === " ") {
                return (
                  <motion.span variants={letter} key={i}>
                    &nbsp;
                  </motion.span>
                );
              }
              return (
                <motion.span variants={letter} key={i}>
                  {huruf}
                </motion.span>
              );
            })}
          </motion.h1>
          <motion.h1
            variants={firstName}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {myArray2.map((huruf, i) => {
              if (huruf === " ") {
                return (
                  <motion.span variants={letter} key={i}>
                    &nbsp;
                  </motion.span>
                );
              }
              return (
                <motion.span variants={letter} key={i}>
                  {huruf}
                </motion.span>
              );
            })}
          </motion.h1>
          <motion.h1
            variants={firstName}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {myArray3.map((huruf, i) => {
              if (huruf === " ") {
                return (
                  <motion.span variants={letter} key={i}>
                    &nbsp;
                  </motion.span>
                );
              }
              return (
                <motion.span variants={letter} key={i}>
                  {huruf}
                </motion.span>
              );
            })}
          </motion.h1>
          <motion.h1
            variants={firstName}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {myArray4.map((huruf, i) => {
              if (huruf === " ") {
                return (
                  <motion.span variants={letter} key={i}>
                    &nbsp;
                  </motion.span>
                );
              }
              return (
                <motion.span variants={letter} key={i}>
                  {huruf}
                </motion.span>
              );
            })}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Saya;
