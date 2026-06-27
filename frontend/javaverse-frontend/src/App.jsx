import { Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash/Splash";
import Character from "./pages/Character/Character";
import Lobby from "./pages/Lobby/Lobby";
import Map from "./pages/Map/Map";
import JavaKingdom from "./pages/JavaKingdom/JavaKingdom";
import Mission from "./pages/Mission/Mission"
import Quiz from "./pages/Quiz/Quiz"
import Result from "./pages/Result/Result"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/character" element={<Character />} />
      <Route path="/lobby" element = {<Lobby/>}/>
      <Route path="/map" element = {<Map/>}/>
      <Route path="/java-kingdom" element = {<JavaKingdom/>}/>
      <Route path="/mission" element = {<Mission/>}/>
      <Route path="/quiz" element = {<Quiz/>}/>
      <Route path="/result" element = {<Result/>}/>
    </Routes>
  );
}

export default App;