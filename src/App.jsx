import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
import UPpage from "./UpPage";
import { Analytics } from "@vercel/analytics/react";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <MotionWrapper>
              <Home />
            </MotionWrapper>
          }
        />
        <Route
          path="/portfolio"
          element={
            <MotionWrapper>
              <Portfolio />
            </MotionWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <MotionWrapper>
              <Services />
            </MotionWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <MotionWrapper>
              <Contact />
            </MotionWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

const MotionWrapper = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-[var(--secondary2-color)]">
          <HashLoader color="#74C69D" loading={loading} size={90} />
        </div>
      ) : (
        <>
          <AnimatedRoutes />
          <UPpage />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
