import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureChange from "./TemperatureChange";
import WeatherTemperature from "./WeatherTemperature"; 
import "./Content.css";


export default function Content(props) {
  return (
    <div className="Content">
      <h1>{props.data.city}</h1>
      <h2 className="formatted-date">
        <FormattedDate date={props.data.date} />
      </h2>
      <h2 className="text-capitalize">{props.data.description}</h2>
      <div className="Weather-Temperature">
        <WeatherIcon code={props.data.icon} />
        <span className="main-temperature">
          <WeatherTemperature celsius={props.data.temperature} />
          </span>
        <TemperatureChange />
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
            <span className="feelsLike">
            <WeatherTemperature celsius={props.data.feelsLike} />
            </span>
            <span className="feelsLike">°</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
