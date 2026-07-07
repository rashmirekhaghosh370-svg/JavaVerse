import "./BattleArena.css";

function BattleArena() {
  return (
    <div className="battle-page">

      <h1 className="battle-title">⚔️ Java Battle Arena</h1>

      <div className="battle-container">

        {/* Enemy */}
        <div className="enemy-box">
         <h2 className="enemy-title">👹 Java Bug Monster</h2>

          <div className="hp-bar">
            <div className="enemy-hp"></div>
          </div>

          <p>HP : 100 / 100</p>
        </div>

        <div className="vs">
          ⚔️
        </div>

        {/* Hero */}
        <div className="hero-box">
          <h2 className="hero-title">🛡️ Java Hero</h2>

          <div className="hp-bar">
            <div className="hero-hp"></div>
          </div>

          <p>HP : 100 / 100</p>
        </div>

      </div>

      <div className="question-box">

        <h2>📚 Java Challenge</h2>

        <p>
          Which keyword is used to create a class in Java?
        </p>

        <div className="options">

          <button>new</button>

          <button>class</button>

          <button>object</button>

          <button>function</button>

        </div>

      </div>

    </div>
  );
}

export default BattleArena;