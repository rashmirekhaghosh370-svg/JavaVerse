import React from "react";
import "./ReactCity.css";
import { useNavigate } from "react-router-dom";

function ReactCity() {
  const navigate = useNavigate();

  return (
    <div className="react-page">

      <div className="react-card">

        <h1>⚛️ React City</h1>

        <h2>🎉 Congratulations!</h2>

        <p>
          You unlocked React City after completing Java Kingdom.
        </p>

        <div className="coming-box">
          <h3>🚧 Coming Soon</h3>
          <button 
          className="battle-btn"
          onClick={() => navigate("/battle-arena")}
          >
            ⚔ Enter Battle Arena
          </button>
          <p>
            React missions will be available in the next update.
          </p>
        </div>

      </div>

    </div>
  );
}

export default ReactCity;