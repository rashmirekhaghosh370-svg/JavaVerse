import React, { useState } from "react";
import "./BattleArena.css";
import hero from "../../assets/images/java warrior.png";
import boss from "../../assets/images/Code Wizard.png";

function BattleArena() {

  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [damage, setDamage] = useState("");
  const [shake, setShake] = useState(false);
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const attack = () => {

    if (enemyHP <= 0 || gameOver) return;

    // Player attacks
    const hit = 10;
    const newEnemyHP = enemyHP - hit;

    setEnemyHP(newEnemyHP);
    setDamage("-10");
    setShake(true);

    setTimeout(() => {

  if (newEnemyHP <= 0) return;

  const enemyHit = 10;
  const newPlayerHP = playerHP - enemyHit;

  setPlayerHP(newPlayerHP);

  if (newPlayerHP <= 0) {
    setWinner("💀 Game Over");
    setGameOver(true);
  }

}, 1000);
    // Victory
    if (newEnemyHP <= 0) {
      setWinner("🏆 Victory!");
      return;
    }

    // Enemy attacks after 1 second
    setTimeout(() => {

      const enemyHit = 10;
      const newPlayerHP = playerHP - enemyHit;

      setPlayerHP(newPlayerHP);

      if (newPlayerHP <= 0) {
        setWinner("💀 Game Over");
        setGameOver(true);
      }

    }, 1000);
  };

  const restartGame = () => {
    setPlayerHP(100);
    setEnemyHP(100);
    setDamage("");
    setShake(false);
    setWinner("");
    setGameOver(false);
  };

  return (
    <div className="battle-page">

      <h1>⚔ Battle Arena</h1>

      <div className="battle-container">

        {/* Player */}

        <div className={`fighter ${shake ? "shake" : ""}`}>

          <img
            src={hero}
            alt="Player"
            className="fighter-image"
          />

          <h2>🧑 Player</h2>

          <div className="hp-bar">
            <div
              className="hp-fill"
              style={{ width: `${playerHP}%` }}
            ></div>
          </div>

          <p>HP : {playerHP}</p>

        </div>

        <h1 className="vs">VS</h1>

        {/* Enemy */}

        <div className="fighter">

          <img
            src={boss}
            alt="Code Wizard"
            className="fighter-image"
          />

          {damage && (
            <h3 className="damage">
              {damage}
            </h3>
          )}

          <h2>🤖 Code Wizard</h2>

          <div className="hp-bar">
            <div
              className="hp-fill boss"
              style={{ width: `${enemyHP}%` }}
            ></div>
          </div>

          <p>HP : {enemyHP}</p>

        </div>

      </div>

      {winner && (
        <h2 className="winner">
          {winner}
        </h2>
      )}

      {!winner && (
        <button
          className="attack-btn"
          onClick={attack}
        >
          ⚔ Attack
        </button>
      )}

      {winner && (
        <button
          className="attack-btn"
          onClick={restartGame}
        >
          🔄 Play Again
        </button>
      )}

    </div>
  );
}

export default BattleArena;