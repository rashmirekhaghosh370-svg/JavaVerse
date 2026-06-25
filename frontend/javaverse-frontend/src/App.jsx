import { Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash/Splash";
import Character from "./pages/Character/Character";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/character" element={<Character />} />
    </Routes>
  );
}

export default App;