import "./Mission.css";

function Mission() {
  return (
    <div className="mission-page">

      <h1>📜 Mission 1</h1>

      <div className="mission-card">

        <h2>Fix the Java Variables</h2>

        <p>
          The Dark Bugs have corrupted the Java Kingdom.
          Your task is to fix the variables and save the kingdom.
        </p>

        <div className="reward">

          <h3>Rewards</h3>

          <p>⭐ +50 XP</p>

          <p>🪙 +20 Coins</p>

        </div>

        <button>
          🚀 Start Quiz
        </button>

      </div>

    </div>
  );
}

export default Mission;