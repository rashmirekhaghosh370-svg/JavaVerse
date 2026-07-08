import React from "react";
import "./BattleArena.css";
import hero from "../../assets/images/java warrior.png";
import boss from "../../assets/images/Code Wizard.png";

function BattleArena() {
  return (
    <div className="battle-page">

      <h1>⚔ Battle Arena</h1>

      <div className="battle-container">

        <div className="fighter">
          <img
            src={hero}
            alt="Player"
            className="fighter-image"
          />

          <h2>🧑 Player</h2>

          <div className="hp-bar">
            <div className="hp-fill"></div>
          </div>

          <p>HP : 100</p>
        </div>

        <h1 className="vs">VS</h1>

        <div className="fighter">

          <img
            src={boss}
            alt="Code Wizard"
            className="fighter-image"
          />

          <h2>🤖 Code Wizard</h2>

          <div className="hp-bar">
            <div className="hp-fill boss"></div>
          </div>

          <p>HP : 100</p>

        </div>

      </div>

      <button className="attack-btn">
        ⚔ Attack
      </button>

    </div>
  );
}

export default BattleArena;