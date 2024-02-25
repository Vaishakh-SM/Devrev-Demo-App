import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./pages/About";
const App = () => {
  useEffect(() => {
    // Function to generate a random session ID
    const generateSessionID = () => {
      const randomString = Math.random().toString(36).substring(2, 15);
      const sessionID = "session_" + Date.now() + "_" + randomString;
      return sessionID;
    };

    let sessionID = sessionStorage.getItem("sessionID");

    if (!sessionID) {
      sessionID = generateSessionID();
      sessionStorage.setItem("sessionID", sessionID);
    }

    console.log("Session ID:", sessionID);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
