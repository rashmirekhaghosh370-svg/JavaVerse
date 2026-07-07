import React from "react";
import "./Result.css";
import { useNavigate } from "react-router-dom";
import HUD from "../../components/HUD/HUD";


function Result() {
  const score = localStorage.getItem("score")|| 0;
  const navigate = useNavigate();
  localStorage.setItem("reactUnlocked", "true");
  localStorage.setItem("xp", "50");
  localStorage.setItem("coins", "20");
  let message = "";

if (score === 50) {
  message = "🏆 Perfect! Java Master!";
} else if (score >= 40) {
  message = "🌟 Excellent!";
} else if (score >= 30) {
  message = "👍 Good Job!";
} else {
  message = "📚 Keep Practicing!";
}

  return (
    <div className="result-page">
        <HUD />

      <div className="result-card">

        <h1>🏆 Mission Completed!</h1>

        <h2>⭐⭐⭐⭐⭐</h2>

        <p className="success">
          You saved the Java Kingdom!
        </p>

        <div className="reward-box">
          <h2 className="final-score">
  🎯 Final Score : {score}/50
</h2>

<p className="result-message">
  {message}
</p>

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