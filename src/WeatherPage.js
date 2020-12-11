import React, { useState } from "react";
import axios from "axios";
import Content from "./Content";
import Loader from "react-loader-spinner";
import WeatherForecast from "./WeatherForecast";

import "./WeatherPage.css";

export default function WeatherPage(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [bgClass, setBgClass] = useState("clear");

  function handleResponse(response) {
    const weather = response.data.weather[0].main.toLowerCase();
    setBgClass(weather);

    setWeatherData({
      city: response.data.name,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000 + response.data.timezone * 1000),
      ready: true,
    });
  }

  function search() {
    const apiKey = "c314587f65338348d68227670f1de295";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className={`${bgClass} WeatherPage`}>
        <div className="top-nav">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="wrapper">
              <input
                type="search"
                className="search-input"
                placeholder="Enter a city..."
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <button className="submit-btn" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="content-wrapper">
          <Content data={weatherData} />
          <WeatherForecast city={weatherData.city} />
        </div>
        <div className="Footer">
          <div className="footer-wrapper">
            Hosted by {" "}
            <a href="https://stupefied-lalande-8b2997.netlify.app/" target="_blank" rel="noreferrer" className="footer-link">
              Netlify
            </a>
            <br />
            <a
              href="https://github.com/ShazSeatter/weather-app-react"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Open source code
            </a>{" "}
            by Shaz Seatter
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div>
        <h1>Loading...</h1>
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}