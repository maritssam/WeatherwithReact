import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="clearfix weather-temperature">
          <div className="float-left">
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt=""
              id="icon"
              class="float-left"
            />
            <strong className="strong">27</strong> <small>°C </small>
          </div>
        </div>
      </div>

      <div class="col-6">
        <ul className="list">
          <small>
            <li>
              Feels like: <span>30</span>°C
            </li>
            <li>
              Humidity: <span>50</span>%
            </li>
            <li>
              Windspeed: <span>2</span>km/h
            </li>
          </small>
        </ul>
      </div>
    </div>
  );
}
