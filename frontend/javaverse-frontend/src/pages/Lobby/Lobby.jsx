import React from "react";
import "../../styles/Lobby.css";

function Lobby() {
  return (
    <div className="lobby-page">

      <h1 className="lobby-title">🎮 JavaVerse Lobby</h1>

      <div className="player-card">

        <div className="avatar">
          ⚔️
        </div>

        <div className="player-info">
          <h2>Welcome, Java Warrior!</h2>

          <p>⭐ Level : 1</p>

          <p>🪙 Coins : 100</p>

          <p>❤️ Energy : 100 / 100</p>

          <div className="xp-box">
            <span>XP</span>

            <div className="xp-bar">
              <div className="xp-fill"></div>
            </div>
          </div>
        </div>

      </div>

      <div className="quest-card">
        <h2>📜 Daily Quest</h2>

        <p>Complete your first Java challenge.</p>

        <p className="reward">
          Reward : +50 XP +20 Coins
        </p>
      </div>

      <div className="button-section">

        <button className="game-btn">
          🚀 Start Adventure
        </button>

        <button className="game-btn">
          👤 Profile
        </button>

        <button className="game-btn">
          🛒 Shop
        </button>

        <button className="game-btn">
          ⚙️ Settings
        </button>

        <button className="logout-btn">
          🚪 Logout
        </button>

      </div>

    </div>
  );
}

export default Lobby;