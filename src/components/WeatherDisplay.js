import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  // Determine the color based on the temperature
  const tempStyle = {
    color: temperature > 20 ? "red" : "blue",
  };

  return (
    <div>
      <p>Temperature: <span style={tempStyle}>{temperature}</span></p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
