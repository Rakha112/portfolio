import React, { useEffect, useRef } from "react";
import Saya from "./Saya";
import Selamatdatang from "./MarqueePage";
import "../css/welcome.css";
import "../css/locomotive-scroll.css";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

const Skew = ({ xx, yy }) => {
  gsap.registerPlugin(ScrollTrigger);

  let cursor = useRef(null);
  let container = useRef(null);
  let aaaa = useRef(null);

  gsap.config({
    force3D: true,
  });

  useEffect(() => {
    // locomotivescroll

    const locoScroll = new LocomotiveScroll({
      el: container,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      getDirection: true,
      getSpeed: true,
      lerp: 0.08,
    });
    locoScroll.destroy();
    locoScroll.init();
    setTimeout(function () {
      locoScroll.update();
    }, 500);

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(container, {
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

    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(container, "skewY", "deg"), // fast
      clamp = gsap.utils.clamp(-2, 2); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      scroller: container,
      trigger: container,

      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.4,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    return () => {
      locoScroll.destroy();
    };
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
    <div
      data-scroll-container
      className="welcome_page"
      ref={(el) => (container = el)}
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
        <motion.div className="selamat-datang" ref={aaaa}>
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
      {/* <Selamatdatang /> */}
      <Saya />
      <Selamatdatang />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    yy: state.y,
    xx: state.x,
  };
};
export default connect(mapStateToProps)(Skew);
