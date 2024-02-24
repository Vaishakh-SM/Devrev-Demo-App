import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReactGA from "react-ga4";

const ga4MeasurementId = "G-C0K9EJWV6W";

const App = () => {
  useEffect(() => {
    ReactGA.initialize(ga4MeasurementId);
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Custom Title",
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
