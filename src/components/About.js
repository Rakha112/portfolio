import React, { useEffect, useRef, useState } from "react";
import "../css/about.css";
import "../css/locomotive-scroll.css";
import "../css/navbarmobile.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from "./Footer";
import LocomotiveScroll from "locomotive-scroll";
import profile from "../images/profile.png";
import gsap from "gsap";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";
import NavbarMobile from "../components/NavbarMobile";
import NavbarDesktop from "../components/NavbarDesktop";
import HomePgaeTransition from "./HomePageTransition";
const About = ({
  footer,
  navMobileAktif,
  navDesktopHeight,
  navDesktopHide,
  navDesktopStatus,
  setNavDesktopHide,
}) => {
  const { height, width } = useWindowSize();

  const aboutRef = useRef(null);
  const cursor = useRef(null);
  const bunder = useRef(null);
  const fotoRef = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [arahScroller, setArahScroller] = useState();
  const [deltaY, setDeltaY] = useState(0);
  var xPos = x / width - 0.5;
  var yPos = y / height - 0.5;
  useEffect(() => {
    // locomotivescroll
    const locoScroll = new LocomotiveScroll({
      el: aboutRef.current,
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
    locoScroll.on("scroll", (obj) => {
      setDeltaY(obj.delta.y);
      if (obj.direction === "down") {
        setNavDesktopHide(true);
        setArahScroller("down");
      } else if (obj.direction === "up") {
        setNavDesktopHide(false);
        setArahScroller("up");
      } else {
        setNavDesktopHide(false);
        setArahScroller("null");
      }
    });
    return () => {
      locoScroll.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navMobileAktif]);

  useEffect(() => {
    if (footer) {
      gsap.to(cursor.current, {
        border: "1px solid #fdf6f0",
        width: "4rem",
        height: "4rem",
        color: "#fdf6f0",
        backgroundColor: "transparent",
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
    } else {
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
  }, [footer]);

  useEffect(() => {
    gsap.to(fotoRef.current, {
      duration: 0.5,
      x: xPos * 10,
      y: yPos * 10,
      transform: `rotateX(${-yPos * 20}deg) rotateY(${xPos * 20}deg)`,
      ease: "Power4.easeOut",
    });
    gsap.to(bunder.current, {
      duration: 1,
      x: xPos * 10,
      y: yPos * 10,
      transform: `rotateX(${-yPos * 20}deg) rotateY(${xPos * 20}deg)`,
      ease: "Power4.easeOut",
    });
  }, [xPos, yPos]);
  if (navDesktopStatus === "home") {
    return <HomePgaeTransition />;
  } else {
    return (
      <div
        className={navMobileAktif ? "about-page navbar-aktif" : "about-page"}
        ref={aboutRef}
        data-scroll-container
        onMouseMove={(e) => {
          setX(e.clientX);
          setY(e.clientY);
          gsap.to(cursor.current, {
            duration: 0.5,
            xPercent: -50,
            yPercent: -50,
            x: e.clientX,
            y: e.clientY,
            ease: "Power4.easeOut",
            overwrite: "auto",
          });

          if (e.clientY <= navDesktopHeight && navDesktopHide === true) {
            setNavDesktopHide(false);
          } else if (
            e.clientY >= navDesktopHeight &&
            navDesktopHide === false &&
            arahScroller === "down"
          ) {
            setNavDesktopHide(true);
          }
        }}
      >
        <div className="cursor" ref={cursor}></div>
        <NavbarMobile target=".about-page" warna="#1c6dd0" />
        <NavbarDesktop deltaY={deltaY} cursor={cursor} />
        <div className="about-container" data-scroll-section>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="foto-container"
            ref={bunder}
          >
            <LazyLoadImage
              alt="Foto Profile"
              effect="blur"
              src={profile}
              ref={fotoRef}
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="about-isi"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="halo-wrapper"
            >
              <h1>
                Halo! <span>&#128075;&#127995;</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.6 }}
              className="nama-wrapper"
            >
              <h2>Nama saya Rakha Wibowo.</h2>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.8 }}
              className="saya-wrapper"
            >
              <h2>Saya seorang Fullstack Developer </h2>
              <h2>dan Food Photographer.</h2>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 1 }}
              className="profile-wrapper"
            >
              <h3>Saya lulusan Teknik Elektro </h3>
              <h3>Universitas Jenderal Soedirman</h3>
              <h3>yang memiliki minat pada dunia IT</h3>
              <h3>khususnya web dan mobile application.</h3>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 1.2 }}
              className="biodata-wrapper"
            >
              <h3 className="pendidikan">Pendidikan</h3>
              <h3>Teknik Elektro</h3>
              <h3>Universitas Jenderal Soedirman</h3>
              <h3>IPK 3.86</h3>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    footer: state.footer,
    navMobileAktif: state.navMobileAktif,
    navDesktopHeight: state.navDesktopHeight,
    navDesktopHide: state.navDesktopHide,
    navDesktopStatus: state.navDesktopStatus,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setNavDesktopHide: (data) =>
      dispatch({ type: "NAVDESKTOPHIDE", payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
