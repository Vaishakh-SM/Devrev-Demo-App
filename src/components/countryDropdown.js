import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { produceEvent } from "../utils/produce";
import { EVENT_DESCRIPTIONS, EVENT_NAMES } from "../utils/config";

export const CountryDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [customCountry, setCustomCountry] = useState("");

  const countries = [
    "Google",
    "Microsoft",
    "Adobe",
    "Atlassian",
    "AirBnB",
    "Omegle",
  ];

  const handleCountryChange = (event) => {
    const value = event.target.value;
    setSelectedCountry(value);
    // If user selects "Other", clear custom country input
    if (value === "other") {
      setCustomCountry("");
    }
  };

  const handleCustomCountryChange = (event) => {
    setCustomCountry(event.target.value);
  };

  return (
    <>
      <Form.Select
        size="lg"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
        <option value="other">Other (type manually)</option>
      </Form.Select>
      {selectedCountry === "other" && (
        <Form.Control
          size="lg"
          type="text"
          placeholder="Type your Organisation"
          value={customCountry}
          onChange={handleCustomCountryChange}
          onClick={() => {
            produceEvent(
              EVENT_NAMES.OTHER_ORG_CLICK,
              EVENT_DESCRIPTIONS.OTHER_ORG_CLICK
            );
          }}
          style={{
            marginTop: "20px",
          }}
        />
      )}
    </>
  );
};
