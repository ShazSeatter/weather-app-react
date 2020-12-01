import React, { useState } from "react";
import axios from "axios";
import Cities from "./Cities";
import Content from "./Content";

import "./Header.css";

export default function Header(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      icon: response.data.weather[0].icon, 
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
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
      <div className="Header">
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
              <button className="location-btn" type="submit">
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </div>
          </form>
        </div>
        <Cities /> 
        <Content data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
