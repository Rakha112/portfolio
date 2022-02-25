import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import "../css/navbar.css";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({
  homeStatus,
  setHomeStatus,
  navMobileAktif,
  setFotografer,
  setFullstack,
  setNavKanan,
  setNavKiri,
  setNavMobileAktif,
  cursor,
  rakha,
  wibowo,
}) => {
  const [enterAbout, setEnterAbout] = useState(false);
  const [enterContact, setEnterContact] = useState(false);

  const navigate = useNavigate();
  const navMobile = useRef(null);

  useEffect(() => {
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

  const firstName = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };
  const firstName2 = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  const letter = {
    initial: {
      y: "0%",
      opacity: 1,
      skewX: 0,
      rotateX: "0deg",
    },
    animate: {
      y: "-50%",
      opacity: 0,
      skewX: 50,
      rotateX: "90deg",
      transition: {
        type: "spring",
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.9],
        // damping: 20,
        // stiffness: 200,
      },
    },
  };
  const letter2 = {
    initial: {
      y: "50%",
      opacity: 0,
      skewX: -50,
      rotateX: "90deg",
    },
    animate: {
      y: "0%",
      opacity: 1,
      skewX: 0,
      rotateX: "0deg",
      transition: {
        type: "spring",
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.9],
        // damping: 20,
        // stiffness: 200,
      },
    },
  };

  let text1 = "about";
  let text2 = "contact";

  const myArray1 = text1.split("");
  const myArray2 = text2.split("");

  return (
    <div>
      {" "}
      <div className="nav-mobile">
        <div
          className="ham"
          onClick={() => {
            setNavMobileAktif(true);
          }}
        >
          <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
            <g fill="#fdf6f0" fillRule="evenodd">
              <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
            </g>
          </svg>
        </div>
        <div className="nav-ham" ref={navMobile}>
          <div
            className="close"
            onClick={() => {
              setNavMobileAktif(false);
            }}
          >
            <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z"
                fill="#1c6dd0"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div className="link">
            <div
              className="about"
              onClick={() => {
                navigate("/about");
                setHomeStatus(null);
                setNavMobileAktif(false);
              }}
            >
              <motion.h2
                initial={{ y: 100 }}
                animate={navMobileAktif ? { y: 0 } : { y: 100 }}
                transition={{ duration: 0.5 }}
              >
                about
              </motion.h2>
            </div>
            <div
              className="contact"
              onClick={() => {
                navigate("/contact");
                setHomeStatus(null);
                setNavMobileAktif(false);
              }}
            >
              <motion.h2
                initial={{ y: 100 }}
                animate={navMobileAktif ? { y: 0 } : { y: 100 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                contact
              </motion.h2>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-home-page">
        <div
          className="nav-kiri"
          onMouseEnter={(e) => {
            e.stopPropagation();
            setFotografer(false);
            setNavKiri(true);
            setNavKanan(false);
            setFullstack(false);
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            setFotografer(false);
            setNavKiri(true);
            setNavKanan(false);
            setFullstack(false);
          }}
        >
          <div className="nav-kiri-container">
            <motion.h2
              onClick={() => {
                navigate("/about");
                setHomeStatus(null);
              }}
              exit={{ y: -400 }}
              transition={{
                delay: homeStatus === "fotografer" ? 0 : 0.6,
                duration: 1.4,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              variants={firstName}
              initial="initial"
              whileHover="animate"
              id="about-container"
              onMouseEnter={(e) => {
                setEnterAbout(true);
                gsap.to(cursor.current, {
                  border: "0px solid #fdf6f0",
                  width: "0rem",
                  height: "0rem",
                  color: "#1c6dd0",
                  backgroundColor: "transparent",
                  ease: "Power4.easeOut",
                  overwrite: "auto",
                });
              }}
              onMouseLeave={(e) => {
                setEnterAbout(false);
                gsap.to(cursor.current, {
                  border: "1px solid #fdf6f0",
                  width: "4rem",
                  height: "4rem",
                  color: "#1c6dd0",
                  backgroundColor: "transparent",
                  ease: "Power4.easeOut",
                  overwrite: "auto",
                });
              }}
            >
              <div className="about">
                {myArray1.map((huruf, i) => {
                  return (
                    <motion.span variants={letter} key={i}>
                      {huruf}
                    </motion.span>
                  );
                })}
              </div>
            </motion.h2>
            <motion.h2
              exit={{ y: -400 }}
              transition={{
                delay: homeStatus === "fotografer" ? 0 : 0.6,
                duration: 1.4,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              variants={firstName2}
              initial="initial"
              animate={enterAbout ? "animate" : ""}
              id="about2-container"
            >
              <div className="about2">
                {myArray1.map((huruf, i) => {
                  return (
                    <motion.span variants={letter2} key={i}>
                      {huruf}
                    </motion.span>
                  );
                })}
              </div>
            </motion.h2>
            <motion.h1
              initial={{ y: 0 }}
              exit={{ y: -400 }}
              transition={{
                delay: homeStatus === "fotografer" ? 0.2 : 0.4,
                duration: 1.4,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              id="rakha"
              ref={rakha}
            >
              rakha
            </motion.h1>
          </div>
        </div>
        <div
          className="nav-kanan"
          onMouseEnter={(e) => {
            e.stopPropagation();
            setNavKanan(true);
            setNavKiri(false);
            setFotografer(false);
            setFullstack(false);
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            setNavKanan(true);
            setNavKiri(false);
            setFotografer(false);
            setFullstack(false);
          }}
        >
          <div className="nav-kanan-container">
            <motion.h1
              initial={{ y: 0 }}
              exit={{ y: -400 }}
              transition={{
                delay: homeStatus === "fotografer" ? 0.4 : 0.2,
                duration: 1.4,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              id="wibowo"
              ref={wibowo}
            >
              wibowo
            </motion.h1>
            <motion.h2
              onClick={() => {
                navigate("/contact");
                setHomeStatus(null);
              }}
              exit={{ y: -400 }}
              transition={{
                delay: homeStatus === "fotografer" ? 0.6 : 0,
                duration: 1.4,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              variants={firstName}
              initial="initial"
              whileHover="animate"
              id="contact-container"
              onMouseEnter={(e) => {
                setEnterContact(true);
                gsap.to(cursor.current, {
                  border: "0px solid #fdf6f0",
                  width: "0rem",
                  height: "0rem",
                  color: "#1c6dd0",
                  backgroundColor: "transparent",
                  ease: "Power4.easeOut",
                  overwrite: "auto",
                });
              }}
              onMouseLeave={(e) => {
                setEnterContact(false);
                gsap.to(cursor.current, {
                  border: "1px solid #1c6dd0",
                  width: "4rem",
                  height: "4rem",
                  color: "#1c6dd0",
                  backgroundColor: "transparent",
                  ease: "Power4.easeOut",
                  overwrite: "auto",
                });
              }}
            >
              <div className="contact">
                {myArray2.map((huruf, i) => {
                  return (
                    <motion.span variants={letter} key={i}>
                      {huruf}
                    </motion.span>
                  );
                })}
              </div>
            </motion.h2>
            <motion.h2
              exit={{ y: -400 }}
              transition={{
                delay: homeStatus === "fotografer" ? 0.6 : 0,
                duration: 1.4,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              variants={firstName2}
              initial="initial"
              animate={enterContact ? "animate" : ""}
              id="contact2-container"
            >
              <div className="contact2">
                {myArray2.map((huruf, i) => {
                  return (
                    <motion.span variants={letter2} key={i}>
                      {huruf}
                    </motion.span>
                  );
                })}
              </div>
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
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
    setHomeStatus: (data) => dispatch({ type: "HOMESTATUS", payload: data }),
    setNavKiri: (data) => dispatch({ type: "NAVKIRI", payload: data }),
    setNavKanan: (data) => dispatch({ type: "NAVKANAN", payload: data }),
    setNavMobileAktif: (data) =>
      dispatch({ type: "NAVMOBILEAKTIF", payload: data }),
    setFotografer: (data) => dispatch({ type: "FOTOGRAFER", payload: data }),
    setFullstack: (data) => dispatch({ type: "FULLSTACK", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
