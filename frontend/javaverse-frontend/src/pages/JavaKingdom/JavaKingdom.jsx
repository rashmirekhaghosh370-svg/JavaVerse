import React from "react";
import "./JavaKingdom.css";

function JavaKingdom() {
  return (
    <div className="kingdom-page">

      <h1 className="kingdom-title">
        🏰 Java Kingdom
      </h1>

      <div className="story-card">

        <h2>🧙 Welcome Warrior!</h2>

        <p>
          The Java King needs your help.
        </p>

        <p>
          Dark Bugs have attacked the kingdom.
        </p>

        <p>
          Only a Java Master can defeat them.
        </p>

        <button className="start-btn">
          🚀 Start Mission
        </button>

      </div>

      <div className="status-card">

        <h3>❤️ HP</h3>

        <div className="bar">
          <div className="fill hp"></div>
        </div>

        <h3>⭐ XP</h3>

        <div className="bar">
          <div className="fill xp"></div>
        </div>

        <h3>🪙 Coins</h3>

        <p>100</p>

      </div>

    </div>
  );
}

export default JavaKingdom;