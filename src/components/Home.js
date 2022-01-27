import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import "../css/home.css";
import gsap from "gsap";
const Home = ({ xx, yy }) => {
  const [fotografer, setFotografer] = useState(false);
  const [fullstack, setFullstack] = useState(false);
  const [navKiri, setNavKiri] = useState(false);
  const [navKanan, setNavKanan] = useState(false);
  const cursor = useRef(null);
  const fotograferRef = useRef(null);
  const fullstackRef = useRef(null);

  const rakha = useRef(null);
  const wibowo = useRef(null);
  gsap.config({
    force3D: true,
  });

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
        fontSize: "2vw",
        flex: 1.6,
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
      gsap.to(fullstackRef.current, {
        fontSize: "1.5vw",
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
        fontSize: "1.5vw",
        flex: 1,
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
      gsap.to(fullstackRef.current, {
        fontSize: "2vw",
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
        fontSize: "1.5vw",
        flex: 1,
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
      gsap.to(fullstackRef.current, {
        fontSize: "1.5vw",
        flex: 1,
        ease: "Power4.easeOut",
        overwrite: "auto",
      });
    }
  }, [fotografer, fullstack, navKanan, navKiri]);
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
        >
          <h2 id="about">about</h2>
          <h1 id="rakha" ref={rakha}>
            rakha
          </h1>
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
        >
          <h1 id="wibowo" ref={wibowo}>
            {" "}
            wibowo
          </h1>
          <h2 id="contact">contact</h2>
        </div>
      </div>
      <div className="home-page-container">
        <div
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
        >
          <h1>fotografer</h1>
        </div>
        <div
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
        >
          <h1>fullstack developer</h1>
        </div>
      </div>
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
