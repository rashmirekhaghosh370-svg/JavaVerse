import React from "react";
import "./Map.css";
import { useNavigate } from "react-router-dom";

function Map() {
  const navigate = useNavigate();

  const reactUnlocked =
    localStorage.getItem("reactUnlocked") === "true";

  return (
    <div className="map-page">
      <h1 className="map-title">🗺️ JavaVerse World Map</h1>

      <div className="map-grid">

        {/* Java Kingdom */}
        <div className="map-card">
          <h2>🏰 Java Kingdom</h2>
          <p>Learn Java Basics</p>

          <button onClick={() => navigate("/java-kingdom")}>
            Enter ⚔️
          </button>
        </div>

        {/* React City */}
        <div className={`map-card ${reactUnlocked ? "" : "locked"}`}>
          <h2>⚛️ React City</h2>
          <p>Master React</p>

          {reactUnlocked ? (
            <button onClick={() => navigate("/react-city")}>
              Enter 🚀
            </button>
          ) : (
            <button disabled>
              Locked 🔒
            </button>
          )}
        </div>

        {/* SQL Dungeon */}
        <div className="map-card locked">
          <h2>🗄️ SQL Dungeon</h2>
          <p>Database Adventure</p>

          <button disabled>
            Locked 🔒
          </button>
        </div>

        {/* AI Lab */}
        <div className="map-card locked">
          <h2>🤖 AI Lab</h2>
          <p>Artificial Intelligence</p>

          <button disabled>
            Locked 🔒
          </button>
        </div>

        {/* Spring Boot Castle */}
        <div className="map-card locked">
          <h2>☁️ Spring Boot Castle</h2>
          <p>Backend Mission</p>

          <button disabled>
            Locked 🔒
          </button>
        </div>

      </div>
    </div>
  );
}

export default Map;