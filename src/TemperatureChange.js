import React, { useWeatherUnit, useWeatherUnitUpdate } from "./WeatherUnitContext";

export default function TemperatureChange() {

  const metric = useWeatherUnit(); 
  const toggleWeatherUnit = useWeatherUnitUpdate(); 

  function toggleWeather(event) {
    event.preventDefault(); 
    toggleWeatherUnit(); 
  }

  if (metric) {
    return (
        <span className="units">
          <span>
          °C |{" "}
          </span>
          <a href="/" onClick={toggleWeather}>
            {" "}
            °F
          </a>
        </span>
    );
  } else {
    return (
        <span className="units">
          <a href="/" onClick={toggleWeather}>
            °C
          </a>{" "}
          <span>
          | °F{" "}
        </span>
      </span>
    );
  }
}