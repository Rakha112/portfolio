import React, { useEffect, useRef } from "react";
import Saya from "./Saya";
// import MarqueePage from "./MarqueePage";
import BannerSection from "./BannerSection";
import "../css/welcome.css";
import "../css/locomotive-scroll.css";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
// import Home from "./Home";
const Welcome = ({ xx, yy, setXX, setYY }) => {
  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate();
  let cursor = useRef(null);
  let container = useRef(null);
  const { height } = useWindowSize();
  gsap.config({
    force3D: true,
  });

  useEffect(() => {
    // locomotivescroll
    // console.log("HALOO");
    // console.log(container.current);
    console.log(height);
    const locoScroll = new LocomotiveScroll({
      el: container.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      getDirection: true,
      getSpeed: true,
    });
    locoScroll.destroy();
    locoScroll.init();
    setTimeout(function () {
      locoScroll.update();
    }, 500);
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(container.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.create({
      scroller: container.current,
      trigger: container.current,
      onEnter: () => {
        console.log("ENTER CONTAINER");
      },
      onLeave: () => {
        navigate("/home");
      },
      start: "50% 50%",
      end: "bottom bottom",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    return () => {
      locoScroll.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    gsap.to(cursor.current, {
      duration: 0.5,
      xPercent: -50,
      yPercent: -50,
      x: xx,
      y: yy,
      ease: "Power4.easeOut",
      overwrite: "auto",
    });
  }, [xx, yy]);

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
      y: 500,
    },
    animate: {
      y: 0,
      transition: { duration: 5, ...transition },
    },
  };
  let text1 = "selamat";
  let text2 = "datang";

  const myArray1 = text1.split("");
  const myArray2 = text2.split("");

  return (
    <motion.div
      data-scroll-container
      className="welcome_page"
      ref={container}
      onMouseMove={(e) => {
        gsap.to(cursor.current, {
          duration: 0.5,
          xPercent: -50,
          yPercent: -50,
          x: e.clientX,
          y: e.clientY,
          ease: "Power4.easeOut",
          overwrite: "auto",
        });
      }}
    >
      <motion.div className="cursor" ref={cursor}></motion.div>

      <div className="container" data-scroll-section>
        <motion.div className="selamat-datang">
          <motion.h2 variants={firstName} initial="initial" animate="animate">
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
          </motion.h2>
          <motion.h2 variants={firstName} initial="initial" animate="animate">
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
          </motion.h2>
        </motion.div>
      </div>

      {/* <MarqueePage /> */}
      <Saya />
      <BannerSection />
    </motion.div>
  );
};
const mapStateToProps = (state) => {
  return {
    yy: state.y,
    xx: state.x,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setXX: (data) => dispatch({ type: "X", payload: data }),
    setYY: (data) => dispatch({ type: "Y", payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
