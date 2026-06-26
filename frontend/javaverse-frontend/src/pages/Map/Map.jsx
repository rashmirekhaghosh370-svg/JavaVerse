import React from "react";
import "./Map.css";

function Map() {
  return (
    <div className="map-page">

      <h1 className="map-title">🗺️ JavaVerse World Map</h1>

      <div className="map-grid">

        <div className="map-card">
          <h2>🏰 Java Kingdom</h2>
          <p>Learn Java Basics</p>
          <button>Enter</button>
        </div>

        <div className="map-card">
          <h2>⚛️ React City</h2>
          <p>Master React</p>
          <button>Locked 🔒</button>
        </div>

        <div className="map-card">
          <h2>🗄️ SQL Dungeon</h2>
          <p>Database Adventure</p>
          <button>Locked 🔒</button>
        </div>

        <div className="map-card">
          <h2>🤖 AI Lab</h2>
          <p>Artificial Intelligence</p>
          <button>Locked 🔒</button>
        </div>

        <div className="map-card">
          <h2>☁️ Spring Boot Castle</h2>
          <p>Backend Mission</p>
          <button>Locked 🔒</button>
        </div>

      </div>

    </div>
  );
}

export default Map;