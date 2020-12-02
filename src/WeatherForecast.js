import React, { useState } from "react";
import axios from "axios";
import WeatherForecastList from "./WeatherForecastList";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast">
        <h3>Hourly Forecast</h3>
        <div className="WeatherForecastData row">
        <WeatherForecastList data={forecast.list[0]} />
        <WeatherForecastList data={forecast.list[1]} />
        <WeatherForecastList data={forecast.list[2]} />
        <WeatherForecastList data={forecast.list[3]} />
        <WeatherForecastList data={forecast.list[4]} />
        <WeatherForecastList data={forecast.list[5]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "c314587f65338348d68227670f1de295";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
