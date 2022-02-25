import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../css/locomotive-scroll.css";
import "../css/contact.css";
import "../css/home.css";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./Navbar";
const Contact = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [labelNama, setLabelNama] = useState(false);
  const [labelEmail, setLabelEmail] = useState(false);
  const [labelPesan, setLabelPesan] = useState(false);
  const [enterKirim, setEnterKirim] = useState(false);
  const [namaMerah, setNamaMerah] = useState(false);
  const [emailMerah, setEmailMerah] = useState(false);
  const [pesanMerah, setPesanMerah] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const contactRef = useRef(null);
  const textareaRef = useRef(null);
  axios.defaults.withCredentials = true;
  const sendForm = async () => {
    if (nama === "") {
      setNamaMerah(true);
    }
    if (email === "") {
      setEmailMerah(true);
    }
    if (pesan === "") {
      setPesanMerah(true);
    }
    if (nama !== "" && email !== "" && pesan !== "" && emailValid) {
      await axios
        .post("http://localhost:3001/send", {
          nama: nama,
          email: email,
          pesan: pesan,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendForm();
  };

  useEffect(() => {
    // locomotivescroll
    const locoScroll = new LocomotiveScroll({
      el: contactRef.current,
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

    return () => {
      locoScroll.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(emailMerah);
    if (nama === "") {
      setLabelNama(false);
    }
    if (email === "") {
      setLabelEmail(false);
    }
    if (pesan === "") {
      setLabelPesan(false);
    }
    if (nama !== "") {
      setNamaMerah(false);
    }
    if (email !== "") {
      const regex =
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!email || regex.test(email) === false) {
        setEmailValid(false);
        setEmailMerah(true);
      } else {
        setEmailValid(true);
        setEmailMerah(false);
      }
    }
    if (pesan !== "") {
      setPesanMerah(false);
    }
  }, [email, emailMerah, nama, pesan]);

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
        duration: 2,
        ease: [0.6, 0.01, -0.05, 0.9],
        damping: 100,
        stiffness: 700,
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
        duration: 2,
        ease: [0.6, 0.01, -0.05, 0.9],
        damping: 100,
        stiffness: 700,
      },
    },
  };

  let text1 = "kirim";

  const myArray1 = text1.split("");

  return (
    <div className="contact-container" ref={contactRef} data-scroll-container>
      {/* <Navbar /> */}
      <div className="upper" data-scroll-section>
        <h1>Contact</h1>
        <form
          // autoComplete="off"
          action="submit"
        >
          <div className="nama">
            <motion.label
              initial={{ y: 0, fontSize: "1.5rem", color: "var(--warna-biru)" }}
              animate={
                labelNama
                  ? { y: -30, fontSize: "1.25rem" }
                  : namaMerah
                  ? { color: "var(--warna-merah)" }
                  : {}
              }
              htmlFor="nama"
            >
              nama
            </motion.label>
            <motion.input
              // placeholder="name"
              // autoComplete="false"
              initial={{ borderBottom: "1px solid var(--warna-biru)" }}
              animate={
                namaMerah
                  ? { borderBottom: "1px solid var(--warna-merah)" }
                  : {}
              }
              type="text"
              name="name"
              onChange={(e) => {
                setLabelNama(true);
                e.preventDefault();
                setNama(e.target.value);
              }}
              value={nama}
            />
          </div>
          <div className="email">
            <motion.label
              initial={{ y: 0, fontSize: "1.5rem", color: "var(--warna-biru)" }}
              animate={
                labelEmail
                  ? { y: -30, fontSize: "1.25rem" }
                  : emailMerah
                  ? { color: "var(--warna-merah)" }
                  : {}
              }
              htmlFor="email"
            >
              email
            </motion.label>
            <motion.input
              // placeholder="email"
              // autoComplete="false"
              initial={{ borderBottom: "1px solid var(--warna-biru)" }}
              animate={
                emailMerah
                  ? { borderBottom: "1px solid var(--warna-merah)" }
                  : {}
              }
              type="email"
              name="email"
              onChange={(e) => {
                e.preventDefault();
                setLabelEmail(true);
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="pesan">
            <motion.label
              initial={{ y: 0, fontSize: "1.5rem", color: "var(--warna-biru)" }}
              animate={
                labelPesan
                  ? { y: -30, fontSize: "1.25rem" }
                  : pesanMerah
                  ? { color: "var(--warna-merah)" }
                  : {}
              }
              htmlFor="pesan"
            >
              pesan
            </motion.label>
            <motion.textarea
              // placeholder="pesan"
              // autoComplete="false"
              initial={{ borderBottom: "1px solid var(--warna-biru)" }}
              animate={
                pesanMerah
                  ? { borderBottom: "1px solid var(--warna-merah)" }
                  : {}
              }
              name="pesan"
              id="pesan"
              rows="3"
              onChange={(e) => {
                setLabelPesan(true);
                e.preventDefault();
                setPesan(e.target.value);
              }}
              value={pesan}
            ></motion.textarea>
          </div>
          {/* <button onClick={(e) => handleSubmit(e)}>KIRIM</button> */}
          <div className="submit-container">
            <div className="submit">
              <motion.h2
                exit={{ y: -400 }}
                transition={{
                  duration: 1.4,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                variants={firstName}
                initial="initial"
                animate={enterKirim ? "animate" : ""}
                id="kirim-container"
                onMouseEnter={() => {
                  setEnterKirim(true);
                }}
                onMouseLeave={() => {
                  setEnterKirim(false);
                }}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="kirim">
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
                  duration: 1.4,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                variants={firstName2}
                initial="initial"
                animate={enterKirim ? "animate" : ""}
                id="kirim2-container"
              >
                <div className="kirim2">
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
          </div>
        </form>
      </div>
      <footer data-scroll-section>
        <div className="footer-container">
          <div className="sosial-media">
            <h1>Social Media</h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
