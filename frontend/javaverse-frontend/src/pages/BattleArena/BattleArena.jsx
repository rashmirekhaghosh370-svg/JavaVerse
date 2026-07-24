import React, { useState } from "react";
import "./BattleArena.css";

import hero from "../../assets/images/java warrior.png";
import boss from "../../assets/images/Code Wizard.png";

function BattleArena() {

  // ==============================
  // HEALTH
  // ==============================

  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);

  // ==============================
  // BATTLE STATES
  // ==============================

  const [playerAttack, setPlayerAttack] = useState(false);
  const [enemyHit, setEnemyHit] = useState(false);

  const [enemyAttack, setEnemyAttack] = useState(false);
  const [playerHit, setPlayerHit] = useState(false);

  const [damage, setDamage] = useState("");

  const [winner, setWinner] = useState("");

  const [isAttacking, setIsAttacking] = useState(false);

  // Impact effects
  const [impact, setImpact] = useState(false);

  // Wizard magic projectile
  const [magicProjectile, setMagicProjectile] = useState(false);

  // Magic hitting player
  const [playerImpact, setPlayerImpact] = useState(false);

  // Sword energy slash projectile
  const [swordProjectile, setSwordProjectile] = useState(false);


  // ==============================
  // PLAYER ATTACK
  // ==============================

  const attack = () => {

    if (
      isAttacking ||
      winner ||
      enemyHP <= 0 ||
      playerHP <= 0
    ) {
      return;
    }

    setIsAttacking(true);

    // ==============================
    // STEP 1 - PLAYER DASH / ATTACK
    // ==============================

    setPlayerAttack(true);

    // Sword energy starts
    setSwordProjectile(true);


    // ==============================
    // STEP 2 - SWORD REACHES ENEMY
    // ==============================

    setTimeout(() => {

      setSwordProjectile(false);

      const hit = 10;

      const newEnemyHP = Math.max(
        enemyHP - hit,
        0
      );

      // Damage enemy
      setEnemyHP(newEnemyHP);

      setDamage("-10");

      setEnemyHit(true);

      setImpact(true);

      setPlayerAttack(false);


      // Remove impact effects

      setTimeout(() => {

        setEnemyHit(false);

        setDamage("");

        setImpact(false);

      }, 450);


      // ==============================
      // VICTORY
      // ==============================

      if (newEnemyHP <= 0) {

        setWinner(
          "🏆 Victory! Code Wizard Defeated!"
        );

        setIsAttacking(false);

        return;
      }


      // ==============================
      // STEP 3 - WIZARD COUNTER ATTACK
      // ==============================

      setTimeout(() => {

        // Wizard attack pose
        setEnemyAttack(true);

        // Start magic projectile
        setMagicProjectile(true);


        // ==============================
        // STEP 4 - MAGIC HITS PLAYER
        // ==============================

        setTimeout(() => {

          // Hide projectile
          setMagicProjectile(false);

          setEnemyAttack(false);

          // Player receives hit
          setPlayerHit(true);

          setPlayerImpact(true);


          const enemyDamage = 10;

          const newPlayerHP = Math.max(
            playerHP - enemyDamage,
            0
          );

          setPlayerHP(newPlayerHP);


          // Remove player hit effects

          setTimeout(() => {

            setPlayerHit(false);

            setPlayerImpact(false);

          }, 450);


          // ==============================
          // PLAYER DEFEAT
          // ==============================

          if (newPlayerHP <= 0) {

            setWinner(
              "💀 Defeat! Code Wizard Wins!"
            );

          }

          // Attack sequence complete

          setIsAttacking(false);

        }, 900);

      }, 650);

    }, 700);

  };


  // ==============================
  // RESTART BATTLE
  // ==============================

  const restartGame = () => {

    setPlayerHP(100);

    setEnemyHP(100);

    setPlayerAttack(false);

    setEnemyHit(false);

    setEnemyAttack(false);

    setPlayerHit(false);

    setDamage("");

    setWinner("");

    setIsAttacking(false);

    setImpact(false);

    setMagicProjectile(false);

    setPlayerImpact(false);

    setSwordProjectile(false);

  };


  // ==============================
  // JSX
  // ==============================

  return (

    <div
      className={`battle-page battlefield ${
        impact ? "impact" : ""
      }`}
    >


      {/* ==============================
          SCREEN EFFECTS
      ============================== */}


      {/* ENEMY HIT FLASH */}

      {impact && (

        <div className="impact-flash"></div>

      )}


      {/* PLAYER MAGIC HIT FLASH */}

      {playerImpact && (

        <div className="player-magic-flash"></div>

      )}



      {/* ==============================
          TOP HUD
      ============================== */}

      <div className="battle-hud">


        {/* PLAYER HUD */}

        <div className="hud-player">

          <div className="hud-name">

            ⚔ Java Warrior

          </div>


          <div className="hud-hp-row">

            <span>

              ❤️

            </span>


            <div className="hud-hp-bar">

              <div

                className="hud-hp-fill player-health"

                style={{
                  width: `${playerHP}%`
                }}

              ></div>

            </div>


            <span className="hud-hp-number">

              {playerHP}

            </span>

          </div>

        </div>



        {/* BATTLE TITLE */}

        <div className="battle-title">

          <span>

            BATTLE

          </span>

          <small>

            JAVA KINGDOM

          </small>

        </div>



        {/* ENEMY HUD */}

        <div className="hud-enemy">

          <div className="hud-name">

            Code Wizard 🧙

          </div>


          <div className="hud-hp-row">

            <span className="hud-hp-number">

              {enemyHP}

            </span>


            <div className="hud-hp-bar">

              <div

                className="hud-hp-fill enemy-health"

                style={{
                  width: `${enemyHP}%`
                }}

              ></div>

            </div>


            <span>

              ❤️

            </span>

          </div>

        </div>

      </div>



      {/* ==============================
          BATTLEFIELD
      ============================== */}

      <div className="battle-ground">


        {/* ==============================
            PLAYER
        ============================== */}

        <div

          className={`
            battlefield-player
            ${playerAttack ? "player-attack" : ""}
            ${playerHit ? "player-hit" : ""}
          `}

        >

          <img

            src={hero}

            alt="Java Warrior"

            className="battle-character player-character"

          />


          <div className="character-label">

            YOU

          </div>

        </div>



        {/* ==============================
            PLAYER SWORD PROJECTILE
        ============================== */}

        {swordProjectile && (

          <div className="sword-projectile">

            <div className="sword-energy-line"></div>

            <div className="sword-energy-glow"></div>

            <div className="sword-spark spark-one"></div>

            <div className="sword-spark spark-two"></div>

            <div className="sword-spark spark-three"></div>

          </div>

        )}



        {/* ==============================
            CENTER
        ============================== */}

        <div className="battle-center">

          <div className="battle-vs">

            VS

          </div>

        </div>



        {/* ==============================
            MAGIC PROJECTILE
        ============================== */}

        {magicProjectile && (

          <div className="magic-projectile">

            <div className="magic-core"></div>

            <div className="magic-ring ring-one"></div>

            <div className="magic-ring ring-two"></div>

            <div className="magic-tail"></div>

          </div>

        )}



        {/* ==============================
            ENEMY
        ============================== */}

        <div

          className={`
            battlefield-enemy
            ${enemyHit ? "enemy-hit" : ""}
            ${enemyAttack ? "enemy-attack" : ""}
          `}

        >


          {/* DAMAGE NUMBER */}

          {damage && (

            <div className="battle-damage">

              {damage}

            </div>

          )}


          <img

            src={boss}

            alt="Code Wizard"

            className="battle-character enemy-character"

          />


          <div className="character-label enemy-label">

            CODE WIZARD

          </div>

        </div>

      </div>



      {/* ==============================
          RESULT
      ============================== */}

      {winner && (

        <div className="battle-result">

          <h2>

            {winner}

          </h2>


          <button
            className="battle-control-btn restart-control"
            onClick={restartGame}
          >
            🔄 PLAY AGAIN
          </button>
        </div>

      )}
      {/* ==============================
          ATTACK CONTROL
      ============================== */}

      {!winner && (

        <div className="battle-controls">
          <button
            className="battle-control-btn attack-control"
            onClick={attack}
            disabled={isAttacking}
          >
            <span className="control-icon">
              ⚔️
            </span>
            <span>

              {
                isAttacking
                  ? "ATTACKING..."
                  : "ATTACK"
              }
            </span>
          </button>
        </div>
      )}
      {/* GROUND GLOW */}
      <div className="ground-glow"></div>
    </div>
  );

}

export default BattleArena;