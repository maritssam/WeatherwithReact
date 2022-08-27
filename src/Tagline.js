import React from "react";
import "./Tagline.css";

export default function Tagline() {
  return (
    <div className="tagline">
      <small className="small">
        <a
          href="https://github.com/juliavanvuren/vanilla-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Marti medina |{" "}
        <a
          href="https://www.freepik.com/vectors/watercolor-water"
          target="_blank"
          rel="noreferrer"
        >
          Watercolor 
        </a>{" "}
        
      </small>
    </div>
  );
}
