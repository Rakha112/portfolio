import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import "../css/home.css";
import gsap from "gsap";
import useWindowSize from "../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
const Home = ({
  xx,
  yy,
  homeStatus,
  fotografer,
  fullstack,
  navKanan,
  navKiri,
  setHomeStatus,
  navMobileAktif,
  setFotografer,
  setFullstack,
  setNavKanan,
  setNavKiri,
}) => {
  const cursor = useRef(null);
  const fotograferRef = useRef(null);
  const fullstackRef = useRef(null);
  const navMobile = useRef(null);
  const { width } = useWindowSize();
  const rakha = useRef(null);
  const wibowo = useRef(null);
  const navigate = useNavigate();
  gsap.config({
    force3D: true,
  });

  useEffect(() => {
    console.log(navMobileAktif);
    if (navMobileAktif) {
      gsap.to(navMobile.current, {
        duration: 0.5,
        x: "-100%",
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
    } else {
      gsap.to(navMobile.current, {
        duration: 2,
        x: "100%",
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
    }
  }, [navMobileAktif]);

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

  useEffect(() => {
    const fontSizeAktif = () => {
      if (width < 1024) {
        return "4vw";
      } else {
        return "2vw";
      }
    };
    const fontSizeNotAktif = () => {
      if (width < 1024) {
        return "3vw";
      } else {
        return "1.5vw";
      }
    };
    console.log(navKiri);
    if (fotografer) {
      gsap.to(cursor.current, {
        border: "unset",
        color: "#1c6dd0",
        width: "6rem",
        height: "6rem",
        backgroundColor: "#fdf6f0",
        ease: "Power4.easeOut",
        overwrite: "auto",
      });

      gsap.to(fotograferRef.current, {
        fontSize: fontSizeAktif,
        flex: 1.6,
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
      gsap.to(fullstackRef.current, {
        fontSize: fontSizeNotAktif,
        flex: 1,
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
      gsap.to(rakha.current, {
        color: "#fdf6f0",
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
      gsap.to(wibowo.current, {
        color: "#fdf6f0",
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
    } else if (fullstack) {
      gsap.to(cursor.current, {
        border: "unset",
        width: "6rem",
        height: "6rem",
        color: "#fdf6f0",
        backgroundColor: "#1c6dd0",
        ease: "Power4.easeOut",
        overwrite: "auto",
      });

      gsap.to(fotograferRef.current, {
        fontSize: fontSizeNotAktif,
        flex: 1,
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
      gsap.to(fullstackRef.current, {
        fontSize: fontSizeAktif,
        flex: 1.5,
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
      gsap.to(rakha.current, {
        color: "#1c6dd0",
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
      gsap.to(wibowo.current, {
        color: "#1c6dd0",
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
    } else {
      if (navKiri) {
        gsap.to(cursor.current, {
          border: "1px solid #fdf6f0",
          width: "4rem",
          height: "4rem",
          color: "#1c6dd0",
          backgroundColor: "transparent",
          ease: "Power4.easeOut",
          overwrite: "auto",
        });
      } else if (navKanan) {
        gsap.to(cursor.current, {
          border: "1px solid #1c6dd0",
          width: "4rem",
          height: "4rem",
          color: "#1c6dd0",
          backgroundColor: "transparent",
          ease: "Power4.easeOut",
          overwrite: "auto",
        });
      }
      gsap.to(rakha.current, {
        color: "#fdf6f0",
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
      gsap.to(wibowo.current, {
        color: "#1c6dd0",
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
      gsap.to(fotograferRef.current, {
        fontSize: fontSizeNotAktif,
        flex: 1,
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
      gsap.to(fullstackRef.current, {
        fontSize: fontSizeNotAktif,
        flex: 1,
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
    }
  }, [fotografer, fullstack, navKanan, navKiri, width]);

  return (
    <div
      data-scroll-section
      className="home-page"
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
      <div className="cursor" ref={cursor}>
        {navKiri
          ? ""
          : navKanan
          ? ""
          : fotografer
          ? "enter"
          : fullstack
          ? "enter"
          : ""}
      </div>

      <Navbar cursor={cursor} rakha={rakha} wibowo={wibowo} />
      <div className="home-page-container">
        <motion.div
          transition={{
            duration: 1.4,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
          exit={homeStatus === "fotografer" ? { flex: 1 } : { flex: 0 }}
          onClick={() => {
            setHomeStatus("fotografer");
            navigate("/fotografi");
          }}
          ref={fotograferRef}
          className="fotografer-section"
          onMouseEnter={(e) => {
            e.stopPropagation();
            setFotografer(true);
            setFullstack(false);
            setNavKanan(false);
            setNavKiri(false);
            console.log("fotografer");
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            setFotografer(true);
            setFullstack(false);
            setNavKanan(false);
            setNavKiri(false);
            console.log("fotografer");
          }}
        >
          <div className="fotografi-container">
            <motion.h1
              exit={homeStatus === "fotografer" ? {} : { fontSize: 0, y: -400 }}
              transition={{
                duration: 1.4,
                ease: [0.6, 0.01, -0.05, 0.9],
              }}
            >
              fotografer
            </motion.h1>
          </div>
        </motion.div>
        <motion.div
          onClick={() => {
            setHomeStatus("fullstack");
            navigate("/fullstack");
          }}
          exit={homeStatus === "fullstack" ? { flex: 1 } : { flex: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
          ref={fullstackRef}
          className="fullstack-section"
          onMouseEnter={(e) => {
            // console.log("fullstack");
            e.stopPropagation();
            setNavKiri(false);
            setNavKanan(false);
            setFotografer(false);
            setFullstack(true);
          }}
          onTouchStart={(e) => {
            // console.log("fullstack");
            e.stopPropagation();
            setNavKiri(false);
            setNavKanan(false);
            setFotografer(false);
            setFullstack(true);
          }}
        >
          <div className="fullstack-container">
            <motion.h1
              exit={homeStatus === "fullstack" ? {} : { fontSize: 0, y: -400 }}
              transition={{
                duration: 1.4,
                ease: [0.6, 0.01, -0.05, 0.9],
              }}
            >
              fullstack developer
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    yy: state.y,
    xx: state.x,
    homeStatus: state.homeStatus,
    navKanan: state.navKanan,
    navKiri: state.navKiri,
    navMobileAktif: state.navMobileAktif,
    fotografer: state.fotografer,
    fullstack: state.fullstack,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setXX: (data) => dispatch({ type: "X", payload: data }),
    setYY: (data) => dispatch({ type: "Y", payload: data }),
    setHomeStatus: (data) => dispatch({ type: "HOMESTATUS", payload: data }),
    setNavKiri: (data) => dispatch({ type: "NAVKIRI", payload: data }),
    setNavKanan: (data) => dispatch({ type: "NAVKANAN", payload: data }),
    setNavMobileAktif: (data) =>
      dispatch({ type: "NAVMOBILEAKTIF", payload: data }),
    setFotografer: (data) => dispatch({ type: "FOTOGRAFER", payload: data }),
    setFullstack: (data) => dispatch({ type: "FULLSTACK", payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
