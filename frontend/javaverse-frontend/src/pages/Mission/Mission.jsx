import React from "react";
import "./Mission.css";
import { useNavigate } from "react-router-dom";
import HUD from "../../components/HUD/HUD";


function Mission() {
  const navigate = useNavigate();

  return (
    <div className="mission-page">
      <HUD />

      <h1>📜 Mission 1</h1>

      <div className="mission-card">

        <h2>Fix the Java Variables</h2>

        <p>
          The Dark Bugs have corrupted the Java Kingdom.
          <br />
          Your task is to fix the variables and save the kingdom.
        </p>

        <div className="reward">
          <h3>Rewards</h3>
          <p>⭐ +50 XP</p>
          <p>🪙 +20 Coins</p>
        </div>

        <button
          onClick={() => navigate("/quiz")}
          className="quiz-btn"
        >
          🚀 Start Quiz
        </button>

      </div>

    </div>
  );
}

export default Mission;