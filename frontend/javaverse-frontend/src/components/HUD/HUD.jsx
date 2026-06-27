import React from "react";
import "./HUD.css";

function HUD() {

  const hp = 100;
  const xp = localStorage.getItem("xp") || 0;
  const coins = localStorage.getItem("coins") || 0;

  return (
    <div className="hud">

      <div className="hud-item">
        ❤️ HP : {hp}
      </div>

      <div className="hud-item">
        ⭐ XP : {xp}
      </div>

      <div className="hud-item">
        🪙 Coins : {coins}
      </div>

    </div>
  );
}

export default HUD;