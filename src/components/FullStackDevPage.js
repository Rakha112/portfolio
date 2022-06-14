import React, { useState, useEffect, useRef } from "react";
import "../css/fullstackdevpage.css";
import CatetinVideo from "../video/catetin-main web 30 detik.mp4";
import { gsap } from "gsap";
import { connect } from "react-redux";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobileFoto from "../components/NavbarMobileFoto";
const FullStackDevPage = ({
  navMobileAktif,
  setNavDesktopHide,
  navDesktopHeight,
  navDesktopHide,
  navDesktopStatus,
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const shadowRef = useRef(null);
  const videoRef = useRef(null);
  const videoWrapRef = useRef(null);
  const projectRef = useRef(null);
  const cursor = useRef(null);
  const panels = useRef([]);
  const [deltaY, setDeltaY] = useState(0);
  const [arahScroller, setArahScroller] = useState();
  const toggleFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
      videoRef.current.currentTime = 0;
      videoRef.current.controls = true;
      videoRef.current.muted = false;
      videoRef.current.autoplay = true;
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
      videoRef.current.currentTime = 0;
      videoRef.current.controls = true;
      videoRef.current.muted = false;
      videoRef.current.autoplay = true;
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
      videoRef.current.currentTime = 0;
      videoRef.current.controls = true;
      videoRef.current.muted = false;
      videoRef.current.autoplay = true;
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
      videoRef.current.currentTime = 0;
      videoRef.current.controls = true;
      videoRef.current.muted = false;
      videoRef.current.autoplay = true;
    }
  };
  useEffect(() => {
    if (videoRef) {
      const exitHandler = () => {
        if (
          !document.fullscreenElement &&
          !document.webkitIsFullScreen &&
          !document.mozFullScreen &&
          !document.msFullscreenElement
        ) {
          videoRef.current.controls = false;
          videoRef.current.muted = true;
        }
      };
      document.addEventListener("fullscreenchange", exitHandler);
      document.addEventListener("webkitfullscreenchange", exitHandler);
      document.addEventListener("mozfullscreenchange", exitHandler);
      document.addEventListener("MSFullscreenChange", exitHandler);
    }
  }, []);

  useEffect(() => {
    console.log(projectRef.current);
    const totalPanels = panels.current.length;
    const locoScroll = new LocomotiveScroll({
      el: containerRef.current,
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
      gsap.to(shadowRef.current, {
        duration: 0.5,
        ease: "Power4.easeOut",
        overwrite: "auto",
        opacity: obj.scroll.y / window.innerHeight,
      });
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
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(containerRef.current, {
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
      // pinType: containerRef.current.style.transform ? "transform" : "fixed",
    });
    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: projectRef.current,
        scroller: containerRef.current,
        pin: true,
        scrub: true,
        // snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + projectRef.current.offsetWidth,
      },
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    return () => {
      locoScroll.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="fullstack-container"
      ref={containerRef}
      data-scroll-container
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
      {/* <NavbarMobileFoto target=".fullstack-container" warna="#6b3d43" /> */}
      <NavbarDesktop deltaY={deltaY} cursor={cursor} />
      <div className="container" data-scroll-section>
        <div
          className="video-container"
          data-scroll
          data-scroll-speed={window.innerWidth >= 1024 ? "-10" : "0"}
        >
          <div className="shadow" ref={shadowRef}></div>
          <div
            className="video"
            ref={videoWrapRef}
            onClick={() => {
              toggleFullScreen();
            }}
            onMouseEnter={() => {
              gsap.to(cursor.current, {
                duration: 0.5,
                width: 0,
                height: 0,
                border: "solid 1px transparent",
                ease: "Power4.easeOut",
                overwrite: "auto",
              });
              if (window.innerWidth >= 1024) {
                gsap.to(videoWrapRef.current, {
                  duration: 0.5,
                  padding: "1rem",
                  border: "solid 1px #1c6dd0",
                  ease: "Power4.easeOut",
                  overwrite: "auto",
                });
              }
            }}
            onMouseLeave={() => {
              gsap.to(cursor.current, {
                duration: 0.5,
                width: "4rem",
                height: "4rem",
                border: "solid 1px #1c6dd0",
                ease: "Power4.easeOut",
                overwrite: "auto",
              });
              if (window.innerWidth >= 1024) {
                gsap.to(videoWrapRef.current, {
                  duration: 0.5,
                  padding: 0,
                  border: "solid 1px transparent",
                  ease: "Power4.easeOut",
                  overwrite: "auto",
                });
              }
            }}
          >
            <video
              autoPlay
              loop
              muted
              controlsList="nodownload"
              controls={false}
              ref={videoRef}
            >
              <source src={CatetinVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="skill-container">
          <h1>HALOO SKILL</h1>
        </div>
        <div className="project-container" ref={projectRef}>
          <div className="project-list">
            <div className="project" ref={(e) => (panels.current[0] = e)}>
              <h1>HALOOO</h1>
            </div>
            <div className="project" ref={(e) => (panels.current[1] = e)}>
              <h1>HALOOO</h1>
            </div>
            <div className="project" ref={(e) => (panels.current[2] = e)}>
              <h1>HALOOO</h1>
            </div>
            <div className="project" ref={(e) => (panels.current[3] = e)}>
              <h1>HALOOO</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(FullStackDevPage);
