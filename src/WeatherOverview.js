import React from "react";
import "./WeatherOverview.css";

export default function WeatherOverview() {
  return (
    <div className="overview">
      <h1>Paris</h1>
      <ul className="list">
        <small>
          <li>
            Last updated: <span>Today 12 P.M.</span>
          </li>
          <li>Sunny</li>
        </small>
      </ul>
    </div>
  );
}
