import React from "react";
import "./JavaKingdom.css";
import { useNavigate } from "react-router-dom";
import HUD from "../../components/HUD/HUD";

function JavaKingdom() {
    const navigate = useNavigate();
  return (
    <div className="kingdom-page">
      <HUD />

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

        <button 
        className="start-btn"
        onClick={()=> navigate("/mission")}>
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