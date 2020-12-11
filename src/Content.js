import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureChange from "./TemperatureChange";
import "./Content.css";


export default function Content(props) {
  return (
    <div className="Content">
      <h1>{props.data.city}</h1>
      <h2 className="formatted-date">
        <FormattedDate date={props.data.date} />
      </h2>
      <h2 className="text-capitalize">{props.data.description}</h2>
      <div className="WeatherTemperature">
        <WeatherIcon code={props.data.icon} />
        <TemperatureChange celsius={props.data.temperature} />
      </div>
      <div className="weather-data">
        <ul className="ul-list">
          <li>
            <i className="fas fa-tint"></i> Humidity: {props.data.humidity}%
            </li>
          <li>
            {" "}
            <i className="fas fa-wind"></i> Wind: {props.data.wind} km/h
            </li>
          <li>
            <i className="fas fa-temperature-high"></i> Feels like:{" "}
            {Math.round(props.data.feelsLike)}
            <span className="feelsLike">°C</span> |{" "}
            {Math.round((props.data.feelsLike * 9) / 5 + 32)}
            <span className="feelsLike">°F</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
