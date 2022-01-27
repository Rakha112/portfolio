import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
// import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";
import "../css/namapage.css";
import Welcome from "./Welcome";
import HaloPage from "./HaloPage";
const Namapage = ({ setWidth, setHeigth, setXX, setYY }) => {
  // const navigate = useNavigate();
  const { height, width } = useWindowSize();
  let namaRef = useRef(null);
  let bunder = useRef(null);
  let bunder2 = useRef(null);
  let cursor = useRef(null);
  let h2 = useRef(null);
  let h1 = useRef(null);
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [masuk, setMasuk] = useState(false);
  const [follow, setFollow] = useState(true);
  const [welcome, setWelcome] = useState(false);
  const [halo, setHalo] = useState(true);
  var xPos = x / width - 0.5;
  var yPos = y / height - 0.5;
  gsap.config({
    force3D: true,
  });
  useEffect(() => {
    // console.log("YPOS " + yPos);
    // console.log("XPOS " + xPos);
    // console.log("Y " + yPos * 20);
    // console.log("X " + xPos * 20);
    // console.log("Ydeg " + xPos * 40);
    // console.log("Xdeg " + -yPos * 40);
    if (!halo) {
      if (follow) {
        gsap.to(namaRef, {
          duration: 0.5,
          x: xPos * 40,
          y: yPos * 40,
          transform: `rotateX(${-yPos * 30}deg) rotateY(${xPos * 30}deg)`,
          ease: "Power4.easeOut",
        });
        gsap.to(bunder.current, {
          duration: 1,
          x: xPos * 20,
          y: yPos * 20,
          transform: `rotateX(${-yPos * 40}deg) rotateY(${xPos * 40}deg)`,
          ease: "Power4.easeOut",
        });
        gsap.to(bunder2, {
          duration: 1.5,
          transform: `rotateX(${-yPos * 40}deg) rotateY(${xPos * 40}deg)`,
          ease: "Power4.easeOut",
        });
        gsap.to(cursor, {
          duration: 0.5,
          xPercent: -50,
          yPercent: -50,
          x: x,
          y: y,
          ease: "Power4.easeOut",
          overwrite: "auto",
        });
      }
    }
    setWidth(width);
    setHeigth(height);
  }, [follow, halo, height, setHeigth, setWidth, width, x, xPos, y, yPos]);

  if (welcome) {
    return <Welcome />;
  } else {
    if (halo) {
      setTimeout(() => {
        setHalo(false);
      }, 3500);
      return <HaloPage />;
    }
    return (
      <div
        className="nama_page"
        onMouseMove={(e) => {
          setX(e.clientX);
          setY(e.clientY);
        }}
      >
        <div
          className={masuk ? "cursor masuk" : "cursor"}
          ref={(e) => {
            cursor = e;
          }}
        >
          {masuk ? "ENTER" : ""}
        </div>

        <div
          className="container"
          onMouseEnter={(e) => {
            gsap.to(cursor, {
              scale: 3,
              duration: 0.5,
              xPercent: -50,
              yPercent: -50,
              x: x,
              y: y,
              ease: "Power4.easeOut",
              overwrite: "auto",
            });

            e.stopPropagation();
            setMasuk(true);
          }}
          onMouseLeave={(e) => {
            gsap.to(cursor, {
              scale: 1,
              duration: 0.5,
              xPercent: -50,
              yPercent: -50,
              x: x,
              y: y,
              ease: "Power4.easeOut",
              overwrite: "auto",
            });

            e.stopPropagation();
            setMasuk(false);
          }}
          onTouchStart={() => {
            gsap.to(namaRef, {
              duration: 0.5,
              scale: 0.8,

              ease: "Power4.easeOut",
            });
            gsap.to(bunder.current, {
              duration: 1,
              scale: 0.8,
              ease: "Power4.easeOut",
            });
            gsap.to(bunder2, {
              duration: 1.5,
              scale: 0.8,
              ease: "Power4.easeOut",
            });
          }}
          onTouchEnd={() => {
            gsap.to(namaRef, {
              duration: 0.5,
              scale: 1,

              ease: "Power4.easeOut",
            });
            gsap.to(bunder.current, {
              duration: 3,
              scale: 5,
              ease: "Power4.easeOut",
            });
            gsap.to(bunder2, {
              duration: 1.5,
              scale: 1,
              ease: "Power4.easeOut",
            });
            gsap.to(h2, {
              duration: 0.2,
              scale: 2,
              opacity: 0,
              yPercent: -200,
              ease: "Power4.easeOut",
            });
            gsap.to(h1, {
              duration: 0.2,
              scale: 2,
              opacity: 0,
              yPercent: -100,
              ease: "Power4.easeOut",
            });
            setTimeout(() => {
              setWelcome(true);
            }, 500);
            // navigate("/");
          }}
          onMouseDown={() => {
            gsap.to(namaRef, {
              duration: 0.5,
              scale: 0.8,
              x: 0,
              y: 0,
              transform: `rotateX(0deg) rotateY(0deg)`,
              ease: "Power4.easeOut",
            });
            gsap.to(bunder.current, {
              duration: 1,
              scale: 0.8,
              x: 0,
              y: 0,
              transform: `rotateX(0deg) rotateY(0deg)`,
              ease: "Power4.easeOut",
            });
            gsap.to(bunder2, {
              duration: 1.5,
              scale: 0.8,
              x: 0,
              y: 0,
              transform: `rotateX(0deg) rotateY(0deg)`,
              ease: "Power4.easeOut",
            });
          }}
          onMouseUp={() => {
            gsap.to(namaRef, {
              duration: 0.5,
              scale: 1,

              ease: "Power4.easeOut",
            });
            gsap.to(bunder.current, {
              duration: 3,
              scale: 5,
              ease: "Power4.easeOut",
            });
            gsap.to(bunder2, {
              duration: 1.5,
              scale: 1,
              ease: "Power4.easeOut",
            });
            gsap.to(h2, {
              duration: 0.2,
              scale: 2,
              opacity: 0,
              yPercent: -200,
              ease: "Power4.easeOut",
            });
            gsap.to(h1, {
              duration: 0.2,
              scale: 2,
              opacity: 0,
              yPercent: -100,
              ease: "Power4.easeOut",
            });

            setXX(x);
            setYY(y);
            setFollow(false);
            setMasuk(false);
            setTimeout(() => {
              setWelcome(true);
            }, 500);
            // navigate("/");
          }}
        >
          <div
            className="nama"
            ref={(e) => {
              namaRef = e;
            }}
          >
            <h2
              ref={(e) => {
                h2 = e;
              }}
            >
              Farid Fawwaz
            </h2>
            <h1
              ref={(e) => {
                h1 = e;
              }}
            >
              Rakha Wibowo
            </h1>
          </div>
          <motion.div
            exit={{ width: "300rem", height: "300rem" }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="bunder"
            ref={bunder}
          ></motion.div>
          <div
            className="bunder2"
            ref={(e) => {
              bunder2 = e;
            }}
          ></div>
        </div>
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    yx: state.y,
    xx: state.x,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setWidth: (data) => dispatch({ type: "WIDTH", payload: data }),
    setHeigth: (data) => dispatch({ type: "HEIGTH", payload: data }),
    setXX: (data) => dispatch({ type: "X", payload: data }),
    setYY: (data) => dispatch({ type: "Y", payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Namapage);
