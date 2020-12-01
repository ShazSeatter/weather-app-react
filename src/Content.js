import React from "react";
import FormattedDate from "./FormattedDate"; 
import "./Content.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Content(props) {
    return (
      <div className="Content">
        <h1>{props.data.city}</h1>
        <h2 className="formatted-date">
          <FormattedDate date={props.data.date} />
        </h2>
        <h2 className="text-capitalize">{props.data.description}</h2>
        <div className="WeatherTemperature">
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="black"
            size={80}
            animate={true}
          />
          <span className="main-temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">
            <a href="/">°C</a> |
          </span>
          <span className="units">
            <a href="/"> °F</a>
          </span>
        </div>
        <div className="weather-data">
          <ul className="ul-list">
            <li>
              <i class="fas fa-tint"></i> Humidity: {props.data.humidity}%
            </li>
            <li>
              {" "}
              <i class="fas fa-wind"></i> Wind: {props.data.wind} km/h
            </li>
            <li>
              <i class="fas fa-temperature-high"></i> Feels like:{" "}
              {Math.round(props.data.feelsLike)}°C
            </li>
          </ul>
        </div>
        <h3>Hourly Forecast</h3>
        <div className="WeatherForecastData row">
          <div className="WeatherForecastData col">
            <p>11°C</p>
            <ReactAnimatedWeather
              icon="FOG"
              color="black"
              size={50}
              animate={true}
            />
          </div>
          <div className="WeatherForecastData col">
            <p>11°C</p>
            <ReactAnimatedWeather
              icon="RAIN"
              color="black"
              size={50}
              animate={true}
            />
          </div>
          <div className="WeatherForecastData col">
            <p>11°C</p>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="black"
              size={50}
              animate={true}
            />
          </div>
          <div className="WeatherForecastData col">
            <p>11°C</p>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="black"
              size={50}
              animate={true}
            />
          </div>
          <div className="WeatherForecastData col">
            <p>11°C</p>
            <ReactAnimatedWeather
              icon="RAIN"
              color="black"
              size={50}
              animate={true}
            />
          </div>
          <div className="WeatherForecastData col">
            <p>11°C</p>
            <ReactAnimatedWeather
              icon="RAIN"
              color="black"
              size={50}
              animate={true}
            />
          </div>
        </div>
      </div>
    );
}
