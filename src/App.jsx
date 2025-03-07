import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HashLoader } from "react-spinners";
import "./App.css";
import Home from "./Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader color="#74C69D" loading={loading} size={90} />
        </div>
      ) : (
        <Home />
      )}
    </BrowserRouter>
  );
}

export default App;
