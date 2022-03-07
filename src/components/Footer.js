import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import "../css/footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = ({ setFooter, footer }) => {
  return (
    <footer
      data-scroll-section
      onMouseEnter={() => setFooter(true)}
      onMouseLeave={() => setFooter(false)}
    >
      <div className="footer-container">
        <motion.div
          className="sosial-media"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
        >
          <h1>Sosial Media</h1>
          <div className="sosial-media-icon">
            <a
              href="https://www.instagram.com/rakha_wibowo/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                window.open("https://www.instagram.com/rakha.wibowo.photo/");
              }}
            >
              <InstagramIcon sx={{ color: "#fdf7f2", fontSize: 40 }} />
            </a>
            <a
              href="https://wa.me/6281229284274"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappRoundedIcon sx={{ color: "#fdf7f2", fontSize: 40 }} />
            </a>
            <a
              href="mailto: rakhawibowo1998@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailRoundedIcon sx={{ color: "#fdf7f2", fontSize: 40 }} />
            </a>
            <a
              href="https://github.com/Rakha112"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ color: "#fdf7f2", fontSize: 40 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/rakha-wibowo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon sx={{ color: "#fdf7f2", fontSize: 40 }} />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="email"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
        >
          <h1>Email</h1>
          <p>rakhawibowo1998@gmail.com</p>
        </motion.div>
      </div>
    </footer>
  );
};

const mapStateToProps = (state) => {
  return {
    footer: state.footer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFooter: (data) => dispatch({ type: "FOOTER", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
