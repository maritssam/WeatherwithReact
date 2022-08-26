import React from "react";
import WeatherApp from "./WeatherApp";
import WeatherOverview from "./WeatherOverview";
import CurrentWeather from "./CurrentWeather";
import Background from "./images/MountainBackground.jpg";

export default function AppWrapper() {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="wrapper rounded"
    >
      <WeatherApp />
      <WeatherOverview />
      <CurrentWeather />
    </div>
  );
}
