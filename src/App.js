import React from "react";
import Namapage from "./components/Namapage";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Namapage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
