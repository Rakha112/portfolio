import React, { useState, useEffect, useRef } from "react";
import "../css/fotografipage.css";
import "../css/locomotive-scroll.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Foto from "../data/foto";
import { connect } from "react-redux";
import FotoPlaceholder from "../data/fotoplaceholder";
import NavbarMobileFoto from "../components/NavbarMobileFoto";
import NavbarDesktop from "./NavbarDesktop";
const FotografiPage = ({ navMobileAktif, setNavDesktopHide }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [aLoaded, setALoaded] = useState({
    0: false,
    1: false,
    2: false,
  });
  const [uyuLoaded, setUyuLoaded] = useState({
    0: false,
    1: false,
    2: false,
  });
  const [sewiwiLoaded, setSewiwiLoaded] = useState({
    0: false,
    1: false,
    2: false,
  });
  const [koceLoaded, setKoceLoaded] = useState({
    0: false,
    1: false,
    2: false,
  });
  const [makanDuluLoaded, setMakanDuluLoaded] = useState({
    0: false,
    1: false,
    2: false,
  });
  const [miDelimaLoaded, setMiDelimaLoaded] = useState({
    0: false,
    1: false,
    2: false,
  });
  const [miagoLoaded, setMiagoLoaded] = useState({
    0: false,
    1: false,
    2: false,
  });
  const [kopiLoaded, setKopiLoaded] = useState({
    0: false,
    1: false,
    2: false,
  });
  const [kuning, setKuning] = useState(false);
  const [coklat, setCoklat] = useState(false);
  const [a, setA] = useState(false);
  const [uyu, setUyu] = useState(false);
  const [sewiwi, setSewiwi] = useState(false);
  const [koce, setKoce] = useState(false);
  const [makanDulu, setMakanDulu] = useState(false);
  const [miDelima, setMiDelima] = useState(false);
  const [miago, setMiago] = useState(false);
  const [kopi, setKopi] = useState(false);
  const [scrollerPink, setScrollerPink] = useState(false);
  const [scrollerKuning, setScrollerKuning] = useState(false);
  const [scrollerCoklat, setScrollerCoklat] = useState(false);
  const [arahScroller, setArahScroller] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [deltaY, setDeltaY] = useState(0);
  const containerRef = useRef(null);
  const pinkgRef = useRef(null);
  const kuningRef = useRef(null);
  const coklatRef = useRef(null);
  const aRef = useRef([]);
  const uyuRef = useRef(null);
  const sewiwiRef = useRef(null);
  const koceRef = useRef(null);
  const makanDuluRef = useRef(null);
  const miDelimaRef = useRef(null);
  const miagoRef = useRef(null);
  const kopiRef = useRef(null);
  const panelsPink = useRef([]);
  const panelsKuning = useRef([]);
  const panelsCoklat = useRef([]);
  const cursor = useRef(null);
  const createPanelsRefsPink = (panel, index) => {
    panelsPink.current[index] = panel;
  };
  const createPanelsRefsKuning = (panel, index) => {
    panelsKuning.current[index] = panel;
  };
  const createPanelsRefsCoklat = (panel, index) => {
    panelsCoklat.current[index] = panel;
  };
  gsap.config({
    force3D: true,
  });
  // useEffect(() => {
  //   gsap.to(cursor.current, {
  //     duration: 0.5,
  //     xPercent: -50,
  //     yPercent: -50,
  //     x: x,
  //     y: y + deltaY,
  //     ease: "Power4.easeOut",
  //     overwrite: "auto",
  //   });
  //   console.log(containerRef);
  // }, [deltaY, x, y]);
  useEffect(() => {
    setTimeout(() => {
      setA(true);
    }, 2500);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const cThumb = document.getElementsByClassName("c-scrollbar_thumb")[0];
      if (navMobileAktif) {
        cThumb.style.display = "none";
      } else {
        cThumb.style.display = "unset";
      }
    }, 500);
  }, [navMobileAktif]);

  useEffect(() => {
    gsap.to(".c-scrollbar_thumb", {
      backgroundColor: scrollerCoklat
        ? "#6b513d"
        : scrollerKuning
        ? "#b69c43"
        : scrollerPink
        ? "#6b3d43"
        : "#6b3d43",
      ease: "Power4.easeOut",
      overwrite: "auto",
      duration: 1,
    });
  }, [scrollerCoklat, scrollerKuning, scrollerPink]);

  useEffect(() => {
    // locomotivescroll
    const totalPanelsPink = panelsPink.current.length;
    const totalPanelsKuning = panelsKuning.current.length;
    const totalPanelsCoklat = panelsCoklat.current.length;
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
      pinType: containerRef.current.style.transform ? "transform" : "fixed",
    });
    const nilaiXPercent = (panel) => {
      if (window.innerWidth >= 640) {
        return -100 * (panel - 1);
      } else {
        return -100 * (panel - 0.33);
      }
    };

    gsap.to(panelsPink.current, {
      xPercent: nilaiXPercent(totalPanelsPink),
      ease: "none",
      scrollTrigger: {
        trigger: pinkgRef.current,
        scroller: containerRef.current,
        pin: true,
        scrub: true,
        // snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + pinkgRef.current.offsetWidth,
        onEnter: () => {
          setScrollerPink(true);
        },
        onLeave: () => {
          setKuning(true);
          setScrollerPink(false);
          setScrollerKuning(true);
        },
      },
    });
    gsap.to(panelsKuning.current, {
      xPercent: nilaiXPercent(totalPanelsKuning),
      ease: "none",
      scrollTrigger: {
        trigger: kuningRef.current,
        scroller: containerRef.current,
        pin: true,
        scrub: true,
        // snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + kuningRef.current.offsetWidth,
        onEnter: () => {
          setScrollerKuning(true);
          setKuning(true);
        },
        onLeave: () => {
          setCoklat(true);
          setKuning(false);
          setScrollerCoklat(true);
          setScrollerKuning(false);
        },
        onLeaveBack: () => {
          setScrollerKuning(false);
          setKuning(false);
        },
        onEnterBack: () => {
          setScrollerKuning(true);
          setKuning(true);
        },
      },
    });
    gsap.to(panelsCoklat.current, {
      xPercent: nilaiXPercent(totalPanelsCoklat),
      ease: "none",
      scrollTrigger: {
        trigger: coklatRef.current,
        scroller: containerRef.current,
        pin: true,
        scrub: true,
        // snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + coklatRef.current.offsetWidth,
        onEnter: () => {
          setCoklat(true);
          setScrollerCoklat(true);
        },
        onLeaveBack: () => {
          setKuning(true);
          setCoklat(false);
          setScrollerKuning(true);
          setScrollerCoklat(false);
        },
        onEnterBack: () => {
          setScrollerCoklat(true);
          setCoklat(true);
        },
      },
    });
    ScrollTrigger.create({
      scroller: containerRef.current,
      trigger: uyuRef.current,
      onEnter: () => {
        setUyu(true);
      },

      start: () => "+=" + uyuRef.current.offsetWidth,
    });
    ScrollTrigger.create({
      scroller: containerRef.current,
      trigger: sewiwiRef.current,
      onEnter: () => {
        setSewiwi(true);
      },
      start: "top 100%",
      end: "bottom bottom",
    });
    ScrollTrigger.create({
      scroller: containerRef.current,
      trigger: koceRef.current,
      onEnter: () => {
        setKoce(true);
      },
      start: () => "+=" + koceRef.current.offsetWidth,
    });
    ScrollTrigger.create({
      scroller: containerRef.current,
      trigger: makanDuluRef.current,
      onEnter: () => {
        setMakanDulu(true);
      },
      start: () => "+=" + makanDuluRef.current.offsetWidth * 2,
    });
    ScrollTrigger.create({
      scroller: containerRef.current,
      trigger: miDelimaRef.current,
      onEnter: () => {
        setMiDelima(true);
      },
      start: "top 100%",
      end: "bottom bottom",
    });
    ScrollTrigger.create({
      scroller: containerRef.current,
      trigger: miagoRef.current,
      onEnter: () => {
        setMiago(true);
      },
      start: () => "+=" + miagoRef.current.offsetWidth,
    });
    ScrollTrigger.create({
      scroller: containerRef.current,
      trigger: kopiRef.current,
      onEnter: () => {
        setKopi(true);
      },
      start: () => "+=" + kopiRef.current.offsetWidth * 2,
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    return () => {
      locoScroll.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ backgroundColor: "var(--warna-biru)" }}
      animate={{
        backgroundColor: kuning
          ? "var(--warna-kuning)"
          : coklat
          ? "var(--warna-coklat)"
          : "var(--warna-pink)",
      }}
      transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
      className={
        navMobileAktif
          ? "fotografipage-container navbar-aktif"
          : "fotografipage-container"
      }
      ref={containerRef}
      data-scroll-container
      // onMouseMove={(e) => {
      //   gsap.to(cursor.current, {
      //     duration: 0.5,
      //     xPercent: -50,
      //     yPercent: -50,
      //     x: e.clientX,
      //     y: e.clientY,
      //     ease: "Power4.easeOut",
      //     overwrite: "auto",
      //   });
      // }}
    >
      {/* <div className="cursor" ref={cursor}></div> */}
      <NavbarMobileFoto target=".fotografipage-container" warna="#6b3d43" />
      {/* <NavbarDesktop deltaY={deltaY} /> */}
      <div className="fotografer-wrapper">
        <motion.h1
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -200, opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
        >
          FOTOGRAFER
        </motion.h1>
      </div>
      <div className="pink-container" ref={pinkgRef}>
        <div className="wrapper" ref={(e) => createPanelsRefsPink(e, 0)}>
          <div className="judul" style={{ display: a ? "flex" : "none" }}>
            <h1>A+ Jus Buah</h1>
          </div>
          <div className="foto-wrapper">
            {Foto.A.map((A, i) => {
              return (
                <div
                  key={i}
                  className="foto"
                  ref={(el) => (aRef.current = el)}
                  style={{ display: a ? "flex" : "none" }}
                >
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: 0 }}
                    transition={{
                      duration: 1,
                      delay: `${3 + i / 10}`,
                      ease: [0.6, 0.01, -0.05, 0.9],
                    }}
                    className="psoedo"
                  ></motion.div>
                  <img
                    src={FotoPlaceholder.A[i]}
                    alt="A+ Placeholder"
                    className="placeholder"
                    style={{ visibility: aLoaded[i] ? "hidden" : "visible" }}
                  />
                  <LazyLoadImage
                    alt="A+"
                    effect="blur"
                    src={A}
                    style={{ opacity: aLoaded[i] ? 1 : 0 }}
                    afterLoad={() => {
                      setALoaded({ ...aLoaded, [i]: true });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="wrapper"
          // ref={uyuRef}

          ref={(e) => {
            createPanelsRefsPink(e, 1);
            uyuRef.current = e;
          }}
        >
          <div className="judul">
            <h1>Uyu, Korean Milk</h1>
          </div>
          <div className="foto-wrapper">
            {Foto.Uyu.map((Uyu, i) => {
              return (
                <div className="foto" key={i}>
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={uyu ? { width: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: `${i / 5}`,
                      ease: [0.6, 0.01, -0.05, 0.9],
                    }}
                    className="psoedo"
                  ></motion.div>
                  <img
                    src={FotoPlaceholder.Uyu[i]}
                    alt="Uyu Placeholder"
                    className="placeholder"
                    style={{ visibility: uyuLoaded[i] ? "hidden" : "visible" }}
                  />
                  <LazyLoadImage
                    alt="Uyu"
                    effect="blur"
                    src={Uyu}
                    style={{ opacity: uyuLoaded[i] ? 1 : 0 }}
                    afterLoad={() => {
                      setUyuLoaded({ ...uyuLoaded, [i]: true });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="kuning-container" ref={kuningRef}>
        <div
          className="wrapper"
          ref={(e) => {
            createPanelsRefsKuning(e, 0);
            sewiwiRef.current = e;
          }}
        >
          <div className="judul">
            <h1>Sewiwi, Sayap Ayam Special</h1>
          </div>
          <div className="foto-wrapper">
            {Foto.Sewiwi.map((Sewiwi, i) => {
              return (
                <div className="foto" key={i}>
                  <motion.div
                    initial={{
                      width: "100%",
                      background: "var(--warna-kuning)",
                    }}
                    animate={sewiwi ? { width: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: `${1 + i / 5}`,
                      ease: [0.6, 0.01, -0.05, 0.9],
                    }}
                    className="psoedo"
                  ></motion.div>
                  <img
                    src={FotoPlaceholder.Sewiwi[i]}
                    alt="Sewiwi Placeholder"
                    className="placeholder"
                    style={{
                      visibility: sewiwiLoaded[i] ? "hidden" : "visible",
                    }}
                  />
                  <LazyLoadImage
                    alt="Sewiwi"
                    effect="blur"
                    src={Sewiwi}
                    style={{ opacity: sewiwiLoaded[i] ? 1 : 0 }}
                    afterLoad={() => {
                      setSewiwiLoaded({ ...sewiwiLoaded, [i]: true });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="wrapper"
          ref={(e) => {
            createPanelsRefsKuning(e, 1);
            koceRef.current = e;
          }}
        >
          <div className="judul">
            <h1>KOCE, Korean Chicken Express</h1>
          </div>
          <div className="foto-wrapper">
            {Foto.Koce.map((Koce, i) => {
              return (
                <div className="foto" key={i}>
                  <motion.div
                    initial={{
                      width: "100%",
                      background: "var(--warna-kuning)",
                    }}
                    animate={koce ? { width: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: `${i / 5}`,
                      ease: [0.6, 0.01, -0.05, 0.9],
                    }}
                    className="psoedo"
                  ></motion.div>
                  <img
                    src={FotoPlaceholder.Koce[i]}
                    alt="Koce Placeholder"
                    className="placeholder"
                    style={{ visibility: koceLoaded[i] ? "hidden" : "visible" }}
                  />
                  <LazyLoadImage
                    alt="Koce"
                    effect="blur"
                    src={Koce}
                    style={{ opacity: koceLoaded[i] ? 1 : 0 }}
                    afterLoad={() => {
                      setKoceLoaded({ ...koceLoaded, [i]: true });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="wrapper"
          ref={(e) => {
            createPanelsRefsKuning(e, 2);
            makanDuluRef.current = e;
          }}
        >
          <div className="judul">
            <h1>Makan Dulu</h1>
          </div>
          <div className="foto-wrapper">
            {Foto.Makandulu.map((Makandulu, i) => {
              return (
                <div className="foto" key={i}>
                  <motion.div
                    initial={{
                      width: "100%",
                      background: "var(--warna-kuning)",
                    }}
                    animate={makanDulu ? { width: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: `${i / 5}`,
                      ease: [0.6, 0.01, -0.05, 0.9],
                    }}
                    className="psoedo"
                  ></motion.div>
                  <img
                    src={FotoPlaceholder.Makandulu[i]}
                    alt="Makan Dulu Placeholder"
                    className="placeholder"
                    style={{
                      visibility: makanDuluLoaded[i] ? "hidden" : "visible",
                    }}
                  />
                  <LazyLoadImage
                    className="makan-dulu"
                    alt="Makandulu"
                    effect="blur"
                    src={Makandulu}
                    style={{ opacity: makanDuluLoaded[i] ? 1 : 0 }}
                    afterLoad={() => {
                      setMakanDuluLoaded({ ...makanDuluLoaded, [i]: true });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="coklat-container" ref={coklatRef}>
        <div
          className="wrapper"
          ref={(e) => {
            createPanelsRefsCoklat(e, 0);
            miDelimaRef.current = e;
          }}
        >
          <div className="judul">
            <h1>Mie Delima</h1>
          </div>
          <div className="foto-wrapper">
            {Foto.Midelima.map((Midelima, i) => {
              return (
                <div className="foto" key={i}>
                  <motion.div
                    initial={{
                      width: "100%",
                      background: "var(--warna-coklat)",
                    }}
                    animate={miDelima ? { width: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: `${1 + i / 5}`,
                      ease: [0.6, 0.01, -0.05, 0.9],
                    }}
                    className="psoedo"
                  ></motion.div>
                  <img
                    src={FotoPlaceholder.Midelima[i]}
                    alt="A+ Placeholder"
                    className="placeholder"
                    style={{
                      visibility: miDelimaLoaded[i] ? "hidden" : "visible",
                    }}
                  />
                  <LazyLoadImage
                    alt="Midelima"
                    effect="blur"
                    src={Midelima}
                    style={{ opacity: miDelimaLoaded[i] ? 1 : 0 }}
                    afterLoad={() => {
                      setMiDelimaLoaded({ ...miDelimaLoaded, [i]: true });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="wrapper"
          ref={(e) => {
            createPanelsRefsCoklat(e, 1);
            miagoRef.current = e;
          }}
        >
          <div className="judul">
            <h1>Miago, Mie Ayam Jago</h1>
          </div>
          <div className="foto-wrapper">
            {Foto.Miago.map((Miago, i) => {
              return (
                <div className="foto" key={i}>
                  <motion.div
                    initial={{
                      width: "100%",
                      background: "var(--warna-coklat)",
                    }}
                    animate={miago ? { width: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: `${i / 5}`,
                      ease: [0.6, 0.01, -0.05, 0.9],
                    }}
                    className="psoedo"
                  ></motion.div>
                  <img
                    src={FotoPlaceholder.Miago[i]}
                    alt="Miago Placeholder"
                    className="placeholder"
                    style={{
                      visibility: miagoLoaded[i] ? "hidden" : "visible",
                    }}
                  />
                  <LazyLoadImage
                    alt="Miago"
                    effect="blur"
                    src={Miago}
                    style={{ opacity: miagoLoaded[i] ? 1 : 0 }}
                    afterLoad={() => {
                      setMiagoLoaded({ ...miagoLoaded, [i]: true });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="wrapper"
          ref={(e) => {
            createPanelsRefsCoklat(e, 2);
            kopiRef.current = e;
          }}
        >
          <div className="judul" data-scroll data-speed={5}>
            <h1>Kopi Sak Det Sak Nyet</h1>
          </div>
          <div className="foto-wrapper">
            {Foto.Kopi.map((Kopi, i) => {
              return (
                <div className="foto" key={i}>
                  <motion.div
                    initial={{
                      width: "100%",
                      background: "var(--warna-coklat)",
                    }}
                    animate={kopi ? { width: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: `${i / 5}`,
                      ease: [0.6, 0.01, -0.05, 0.9],
                    }}
                    className="psoedo"
                  ></motion.div>
                  <img
                    src={FotoPlaceholder.Kopi[i]}
                    alt="Kopi Placeholder"
                    className="placeholder"
                    style={{ visibility: kopiLoaded[i] ? "hidden" : "visible" }}
                  />
                  <LazyLoadImage
                    alt="Kopi"
                    effect="blur"
                    src={Kopi}
                    style={{ opacity: kopiLoaded[i] ? 1 : 0 }}
                    afterLoad={() => {
                      setKopiLoaded({ ...kopiLoaded, [i]: true });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    navMobileAktif: state.navMobileAktif,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setNavDesktopHide: (data) =>
      dispatch({ type: "NAVDESKTOPHIDE", payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FotografiPage);
