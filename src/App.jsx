import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ تصحيح هنا
import { HashLoader } from "react-spinners";
import "./App.css";
import Home from "./Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-[var(--secondary2-color)]">
          <HashLoader color="#74C69D" loading={loading} size={90} />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<div>Portfolio Page</div>} />
          <Route path="/services" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
