import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import "../css/home.css";
import gsap from "gsap";
import useWindowSize from "../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ xx, yy, homeStatus, setHomeStatus }) => {
  const [fotografer, setFotografer] = useState(false);
  // const [fotograferEnter, setFotograferEnter] = useState(false);
  const [fullstack, setFullstack] = useState(false);
  // const [fullstackEnter, setFullstackEnter] = useState(false);
  const [navKiri, setNavKiri] = useState(false);
  const [navKanan, setNavKanan] = useState(false);
  const [navMobileAktif, setNavMobileAktif] = useState(false);
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

  const firstName = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  };

  const letter = {
    initial: {
      y: 0,
    },
    animate: {
      y: -200,
      transition: { duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] },
    },
  };
  const letter2 = {
    initial: {
      y: 40,
    },
    animate: {
      y: 0,
      transition: { duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] },
    },
  };

  let text1 = "about";
  let text2 = "contact";

  const myArray1 = text1.split("");
  const myArray2 = text2.split("");

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
            console.log("nav-kiri");
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            setFotografer(false);
            setNavKiri(true);
            setNavKanan(false);
            setFullstack(false);
            console.log("nav-kiri");
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
                ease: [0.6, 0.01, -0.05, 0.9],
              }}
              variants={firstName}
              initial="initial"
              whileHover="animate"
              id="about-container"
              onMouseEnter={(e) => {
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
                ease: [0.6, 0.01, -0.05, 0.9],
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
            // console.log("fullstack");
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
                ease: [0.6, 0.01, -0.05, 0.9],
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
                ease: [0.6, 0.01, -0.05, 0.9],
              }}
              variants={firstName}
              initial="initial"
              whileHover="animate"
              id="contact-container"
              onMouseEnter={(e) => {
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setXX: (data) => dispatch({ type: "X", payload: data }),
    setYY: (data) => dispatch({ type: "Y", payload: data }),
    setHomeStatus: (data) => dispatch({ type: "HOMESTATUS", payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
