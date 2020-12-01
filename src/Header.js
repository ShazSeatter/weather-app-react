import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="top-nav">
        <form className="search-form">
          <div className="wrapper">
            <input
              type="search"
              className="search-input"
              placeholder="Enter a city..."
              autoComplete="off"
              autoFocus="on"
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
    </div>
  );
}
