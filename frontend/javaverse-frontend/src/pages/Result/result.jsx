import React from "react";
import "./Result.css";
import { useNavigate } from "react-router-dom";

function Result() {

  const navigate = useNavigate();
  localStorage.setItem("reactUnlocked", "true");
  localStorage.setItem("xp", "50");
  localStorage.setItem("coins", "20");

  return (
    <div className="result-page">

      <div className="result-card">

        <h1>🏆 Mission Completed!</h1>

        <h2>⭐⭐⭐⭐⭐</h2>

        <p className="success">
          You saved the Java Kingdom!
        </p>

        <div className="reward-box">

          <h3>Rewards Earned</h3>

          <p>⭐ XP +50</p>

          <p>🪙 Coins +20</p>

          <p>🔓 React City Unlocked</p>

        </div>

        <button
          onClick={() => navigate("/map")}
          className="result-btn"
        >
          🌍 Return to World Map
        </button>

      </div>

    </div>
  );
}

export default Result;