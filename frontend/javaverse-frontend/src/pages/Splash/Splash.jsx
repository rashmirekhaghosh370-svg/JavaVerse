import "../../styles/Splash.css";
import { useNavigate}from "react-router-dom";

function Splash() {
  const navigate = useNavigate();
  return (
    <div className="splash">
      <div className="overlay">
  <h1 className="logo">
    <span className="rocket">🚀</span>
    JavaVerse
  </h1>

  <p>Play • Learn • Code • Conquer</p>

  <button
  className="start-btn"
  onClick={() => navigate("/character")}
>
  PRESS START
</button>
</div>
    </div>
  );
}

export default Splash;