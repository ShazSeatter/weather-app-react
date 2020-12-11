import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature"; 
import "./WeatherForecastList.css";

export default function WeatherForecastList(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000 + props.time * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  return (
    <div className="WeatherForecastData col">
      {hours()}
      <br />
      <WeatherIcon code={props.data.weather[0].icon} />
      <span className="forecast-units"> 
      <WeatherTemperature celsius={props.data.main.temp} />
      </span>
      <span className="forecast-unit"> 
        °
      </span>
    </div>
  );
}