import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="top-nav">
        <form className="search-form">
          <div className="wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Enter a city..."
              autoComplete="off"
              id="search-text-input"
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
      <div className="Sub-header">
        <span className="main-cities-list">
          <a href="#" className="main-cities">
            Tokoyo
          </a>
        </span>
        <span className="main-cities-list">
          <a href="#" className="main-cities">
            New York
          </a>
        </span>
        <span className="main-cities-list">
          <a href="#" className="main-cities">
            London
          </a>
        </span>
        <span className="main-cities-list">
          <a href="#" className="main-cities">
            Sydney
          </a>
        </span>
      </div>
    </div>
  );
}
