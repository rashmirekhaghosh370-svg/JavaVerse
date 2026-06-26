import "./Character.css";
import { useNavigate } from "react-router-dom";

import javaWarrior from "../../assets/images/Java Warrior.png";
import codeWizard from "../../assets/images/Code Wizard.png";
import aiEngineer from "../../assets/images/AI Engineer.png";
import springMaster from "../../assets/images/Spring Boot Master.png";

const characters = [
  {
    name: "Java Warrior",
    image: javaWarrior,
    skill: "Sword Master",
  },
  {
    name: "Code Wizard",
    image: codeWizard,
    skill: "Magic Coding",
  },
  {
    name: "AI Engineer",
    image: aiEngineer,
    skill: "AI Power",
  },
  {
    name: "Spring Boot Master",
    image: springMaster,
    skill: "Backend King",
  },
];

function Character() {
  const navigate = useNavigate();

  const handleSelect = (character) => {
    localStorage.setItem(
      "selectedCharacter",
      JSON.stringify(character)
    );

    navigate("/lobby");
  };

  return (
    <div className="character-page">
      <h1>Select Your Character</h1>

      <div className="character-grid">
        {characters.map((item, index) => (
          <div className="character-card" key={index}>
            <img
              className="character-image"
              src={item.image}
              alt={item.name}
            />

            <h2 className="character-name">{item.name}</h2>

            <p className="character-skill">
              {item.skill}
            </p>

            <button
              className="select-btn"
              onClick={() => handleSelect(item)}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Character;