import React from "react";
import "./Content.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Content() {
  let contentData = {
    name: "Aberdeen",
    date: "Last updated at: 16:50",
    description: "Clear Sky",
    humidity: "60%",
    wind: "5 km/h",
    feelsLike: "2°C",
  };
  return (
    <div className="Content">
      <h1>{contentData.name}</h1>
      <p>{contentData.date}</p>
      <h2>{contentData.description}</h2>
      <div className="WeatherTemperature">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="black"
          size={80}
          animate={true}
        />
        <span className="main-temperature"><strong>5</strong></span>
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
            <i class="fas fa-tint"></i> Humidity: {contentData.humidity}
          </li>
          <li>
            {" "}
            <i class="fas fa-wind"></i> Wind: {contentData.wind}
          </li>
          <li>
            <i class="fas fa-temperature-high"></i> Feels like:{" "}
            {contentData.feelsLike}
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
