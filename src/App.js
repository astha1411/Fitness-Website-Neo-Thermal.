import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import plankvideo from "./asset/plank.mp4";
import pushupvideo from "./asset/pushup.mp4";
import squatsvideo from "./asset/squats.mp4";
import LandingPage from "./Landing";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plank" element={<Home vid={plankvideo} />} />
      <Route path="/crunches" element={<Home vid={plankvideo} />} />
      <Route path="/pushup" element={<Home vid={pushupvideo} />} />
      <Route path="/burpees" element={<Home vid={plankvideo} />} />
      <Route path="/squats" element={<Home vid={squatsvideo} />} />
    </Routes>
  );
}

export default App;
