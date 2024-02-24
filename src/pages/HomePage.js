import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";

const ga4MeasurementId = "G-C0K9EJWV6W";

const HomePage = () => {
  useEffect(() => {
    ReactGA.initialize(ga4MeasurementId);
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <button
        onClick={() => {
          ReactGA.event({
            category: "Button",
            action: "LolClick",
            label: "LolClick", // optional
          });
        }}
      >
        Lol
      </button>
    </div>
  );
};

export default HomePage;
