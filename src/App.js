import React from "react";
import Namapage from "./components/Namapage";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import FotografiPage from "./components/FotografiPage";
import FullStackDevPage from "./components/FullStackDevPage";
import About from "./components/About";
import Contact from "./components/Contact";
// import Redirect from "./components/Redirect";
function App() {
  const location = useLocation();
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="home" element={<Home />} />
        <Route path="fotografi" element={<FotografiPage />} />
        <Route path="fullstack" element={<FullStackDevPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="rakha-wibowo-portfolio" element={<Redirect />} /> */}
        <Route path="/" element={<Namapage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
