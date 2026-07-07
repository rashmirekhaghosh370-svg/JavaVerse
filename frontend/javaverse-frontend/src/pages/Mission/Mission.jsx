import React, { useState } from "react";
import "./Mission.css";
import { useNavigate } from "react-router-dom";
import HUD from "../../components/HUD/HUD";

function Mission() {
  const navigate = useNavigate();

  const [enemyHP, setEnemyHP] = useState(100);
  const [playerHP] = useState(100);
  const [battleStarted, setBattleStarted] = useState(false);
  const [enemyDead, setEnemyDead] = useState(false);

  const attackMonster = () => {
    if (enemyDead) return;

    setBattleStarted(true);

    const damage = Math.floor(Math.random() * 20) + 10;

    const newHP = Math.max(enemyHP - damage, 0);

    setEnemyHP(newHP);

    if (newHP === 0) {
      setEnemyDead(true);
    }
  };

  return (
    <div className="mission-page">

      <HUD />

      <h1 className="mission-title">
        📜 Mission 1
      </h1>

      <div className="battle-area">

        <div className="enemy-card">

          <h2 className="enemy-title">👹 Java Bug Monster</h2>

          <div className="enemy-hp">

            <div
              className="enemy-fill"
              style={{
                width: "100%"
              }}
            ></div>

          </div>

          <p>HP : {enemyHP} / 100</p>

        </div>

        <div className="battle-center">

          <button
            className="attack-btn"
            onClick={attackMonster}
            disabled={enemyDead}
          >
            {enemyDead ? "✅ Enemy Defeated" : "⚔ Attack"}
          </button>

          <h2 className="vs">
            ⚔ VS ⚔
          </h2>

        </div>

        <div className="player-battle">

          <h2 className="hero-title">🛡 Your Hero</h2>

          <div className="player-hp">

            <div
              className="player-fill"
              style={{
                width: `${playerHP}%`
              }}
            ></div>

          </div>

          <p>HP : {playerHP} / 100</p>

        </div>

      </div>

      <div className="mission-card">

        <h2>Fix the Java Variables</h2>

        <p>
          The Dark Bugs have corrupted the Java Kingdom.
          <br />
          Defeat the Bug Monster first.
        </p>

        <div className="reward">

          <h3>Rewards</h3>

          <p>⭐ +50 XP</p>

          <p>🪙 +20 Coins</p>
          </div>

        {!enemyDead ? (

          <button
            className="quiz-btn"
            disabled
          >
            🔒 Defeat Monster First
          </button>

        ) : (

          <button
            className="quiz-btn"
            onClick={() => navigate("/quiz")}
          >
            🚀 Start Quiz
          </button>

        )}

        {battleStarted && !enemyDead && (
          <p className="battle-msg">
            ⚔ You attacked the monster!
          </p>
        )}

        {enemyDead && (
          <p className="victory-msg">
            🎉 Victory! Monster Defeated.
          </p>
        )}

      </div>

    </div>
  );
}

export default Mission;