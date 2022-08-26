import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <form id="search-form" class="mb-3">
      <div className="row">
        <div className="col-9 form-input">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control border rounded"
            id="city-entry"
            autoComplete="off"
          />
        </div>

        <div className="col-3">
          <input type="submit" value="Search" className="btn w-100" />
        </div>
      </div>
    </form>
  );
}
