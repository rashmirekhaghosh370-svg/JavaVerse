import { Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash/Splash";
import Character from "./pages/Character/Character";
import Lobby from "./pages/Lobby/Lobby";
import Map from "./pages/Map/Map";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/character" element={<Character />} />
      <Route path="/lobby" element = {<Lobby/>}/>
      <Route path="/map" element = {<Map/>}/>

    </Routes>
  );
}

export default App;