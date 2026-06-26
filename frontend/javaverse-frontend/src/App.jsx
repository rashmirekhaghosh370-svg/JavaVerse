import { Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash/Splash";
import Character from "./pages/Character/Character";
import Lobby from "./pages/Lobby/Lobby";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/character" element={<Character />} />
      <Route path="/lobby" element = {<Lobby/>}/>
    </Routes>
  );
}

export default App;