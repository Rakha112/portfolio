import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import "../css/navbarmobile.css";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
const NavbarMobile = ({
  setNavMobileAktif,
  setHomeStatus,
  navMobileAktif,
  target,
  warna,
  dataScroll,
}) => {
  const navMobile = useRef(null);
  const navigate = useNavigate();
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
  return (
    <div
      className="nav-mobile"
      data-scroll
      data-scroll-sticky
      data-scroll-target={target}
    >
      <div
        className="ham"
        onClick={() => {
          setNavMobileAktif(true);
        }}
      >
        <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
          <g fill={warna} fillRule="evenodd">
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
        <div className="link-wrapper">
          <div
            className="home"
            onClick={() => {
              navigate("/home");
              setNavMobileAktif(false);
            }}
          >
            <motion.h2
              initial={{ y: 100 }}
              animate={navMobileAktif ? { y: 0 } : { y: 100 }}
              transition={{ duration: 0.5 }}
            >
              home
            </motion.h2>
          </div>
          <div
            className="about"
            onClick={() => {
              navigate("/about");
              setNavMobileAktif(false);
            }}
          >
            <motion.h2
              initial={{ y: 100 }}
              animate={navMobileAktif ? { y: 0 } : { y: 100 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              about
            </motion.h2>
          </div>
          <div
            className="contact"
            onClick={() => {
              navigate("/contact");
              setNavMobileAktif(false);
            }}
          >
            <motion.h2
              initial={{ y: 100 }}
              animate={navMobileAktif ? { y: 0 } : { y: 100 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              contact
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    navMobileAktif: state.navMobileAktif,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNavMobileAktif: (data) =>
      dispatch({ type: "NAVMOBILEAKTIF", payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavbarMobile);
