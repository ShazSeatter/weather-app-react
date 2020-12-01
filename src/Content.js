import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate"; 
import "./Content.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Content(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like, 
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Content">
        <h1>{weatherData.city}</h1>
        <h2 className="formatted-date"><FormattedDate date={weatherData.date} /></h2>
        <h2 className="text-capitalize">{weatherData.description}</h2>
        <div className="WeatherTemperature">
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="black"
            size={80}
            animate={true}
          />
          <span className="main-temperature">
            {Math.round(weatherData.temperature)}
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
              <i class="fas fa-tint"></i> Humidity: {weatherData.humidity}%
            </li>
            <li>
              {" "}
              <i class="fas fa-wind"></i> Wind: {weatherData.wind} km/h
            </li>
            <li>
              <i class="fas fa-temperature-high"></i> Feels like: {Math.round(weatherData.feelsLike)}°C
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
  } else {
    const apiKey = "f902315c1bb8b7c1ac10cb7eaa68c265";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
