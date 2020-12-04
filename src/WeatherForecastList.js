import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastList.css"; 

export default function WeatherForecastList(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000 + props.time * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function celsius() {
    let celsius = Math.round(props.data.main.temp); 
    return `${celsius}°C`;
  }

function fahrenheit() {
  let fahrenheit = Math.round((props.data.main.temp * 9) / 5 + 32);
  return `${fahrenheit}°F`; 
}

return (
    <div className="WeatherForecastData col">
      {hours()}
      <br />
      <WeatherIcon code={props.data.weather[0].icon} />
      {celsius()} | {fahrenheit()}
    </div>
  );
  }
