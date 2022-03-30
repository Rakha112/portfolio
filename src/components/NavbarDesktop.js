import React, { useState, useEffect, useRef } from "react";
import "../css/navbardesktop.css";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
const NavbarDesktop = ({
  setNavDesktopHeight,
  setNavDesktopStatus,
  navDesktopHide,
  deltaY,
  cursor,
}) => {
  const navbarDesktop = useRef(null);
  const navigate = useNavigate();
  const [enterAbout, setEnterAbout] = useState(false);
  const [enterContact, setEnterContact] = useState(false);
  const [enterHome, setEnterHome] = useState(false);

  useEffect(() => {
    // set height dari navbar desktop
    setNavDesktopHeight(navbarDesktop.current.clientHeight);
    return () => {
      setTimeout(() => {
        setNavDesktopStatus(null);
      }, 3000);
    };
  }, [setNavDesktopHeight, setNavDesktopStatus]);

  useEffect(() => {
    gsap.to(navbarDesktop.current, {
      duration: 1,
      boxShadow:
        deltaY > 0
          ? "0 2px 10px 2px rgba(128, 128, 128, 0.2)"
          : "0 2px 10px 2px rgba(253, 247, 242, 0.2)",
      ease: "Power4.easeOut",
      overwrite: "auto",
    });
  }, [deltaY]);

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
        duration: 1.5,
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
        duration: 1.5,
        ease: [0.6, 0.01, -0.05, 0.9],
        // damping: 20,
        // stiffness: 200,
      },
    },
  };

  let text1 = "about";
  let text2 = "contact";
  let text3 = "home";

  const myArray1 = text1.split("");
  const myArray2 = text2.split("");
  const myArray3 = text3.split("");
  return (
    <div className="navbar-desktop">
      <motion.div
        className="navbar-desktop-wrapper"
        // whileHover={{ y: "-100px" }}
        initial={{ y: "-100px" }}
        animate={navDesktopHide ? {} : { y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.6, 0.01, -0.05, 0.9],
        }}
        exit={{ y: -200 }}
        ref={navbarDesktop}
      >
        <div className="navbar-desktop-content">
          <motion.h1
            exit={{ y: -400 }}
            transition={{
              delay: 0.2,
              duration: 1.4,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            rakha wibowo
          </motion.h1>
          <div className="button-wrapper">
            <div className="button">
              <motion.h2
                onClick={() => {
                  navigate("/home");
                  setTimeout(() => {
                    setNavDesktopStatus("home");
                  }, 500);
                }}
                exit={{ y: -400 }}
                transition={{
                  delay: 0.2,
                  duration: 1.4,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                variants={firstName}
                initial="initial"
                whileHover="animate"
                id="button-container"
                onMouseEnter={(e) => {
                  setEnterHome(true);
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
                  setEnterHome(false);
                  gsap.to(cursor.current, {
                    border: "1px solid #1c6cce",
                    width: "4rem",
                    height: "4rem",
                    color: "#1c6dd0",
                    backgroundColor: "transparent",
                    ease: "Power4.easeOut",
                    overwrite: "auto",
                  });
                }}
              >
                <div className="letter">
                  {myArray3.map((huruf, i) => {
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
                  delay: 0.2,
                  duration: 1.4,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                variants={firstName2}
                initial="initial"
                animate={enterHome ? "animate" : ""}
                id="button2-container"
              >
                <div className="letter2">
                  {myArray3.map((huruf, i) => {
                    return (
                      <motion.span variants={letter2} key={i}>
                        {huruf}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.h2>
            </div>
            <div className="button">
              <motion.h2
                onClick={() => {
                  navigate("/about");
                  setNavDesktopStatus("about");
                }}
                exit={{ y: -400 }}
                transition={{
                  delay: 0.2,
                  duration: 1.4,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                variants={firstName}
                initial="initial"
                whileHover="animate"
                id="button-container"
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
                    border: "1px solid #1c6cce",
                    width: "4rem",
                    height: "4rem",
                    color: "#1c6dd0",
                    backgroundColor: "transparent",
                    ease: "Power4.easeOut",
                    overwrite: "auto",
                  });
                }}
              >
                <div className="letter">
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
                  delay: 0.2,
                  duration: 1.4,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                variants={firstName2}
                initial="initial"
                animate={enterAbout ? "animate" : ""}
                id="button2-container"
              >
                <div className="letter2">
                  {myArray1.map((huruf, i) => {
                    return (
                      <motion.span variants={letter2} key={i}>
                        {huruf}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.h2>
            </div>
            <div className="button">
              <motion.h2
                onClick={() => {
                  navigate("/contact");
                  setNavDesktopStatus("contact");
                }}
                exit={{ y: -400 }}
                transition={{
                  delay: 0.2,
                  duration: 1.4,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                variants={firstName}
                initial="initial"
                whileHover="animate"
                id="button-container"
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
                    border: "1px solid #1c6cce",
                    width: "4rem",
                    height: "4rem",
                    color: "#1c6dd0",
                    backgroundColor: "transparent",
                    ease: "Power4.easeOut",
                    overwrite: "auto",
                  });
                }}
              >
                <div className="letter">
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
                  delay: 0.2,
                  duration: 1.4,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                variants={firstName2}
                initial="initial"
                animate={enterContact ? "animate" : ""}
                id="button2-container"
              >
                <div className="letter2">
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
      </motion.div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    navDesktopHeight: state.navDesktopHeight,
    navDesktopHide: state.navDesktopHide,
    navDesktopStatus: state.navDesktopStatus,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setNavDesktopHeight: (data) =>
      dispatch({ type: "NAVDESKTOPHEIGHT", payload: data }),
    setNavDesktopStatus: (data) =>
      dispatch({ type: "NAVDESKTOPSTATUS", payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavbarDesktop);
