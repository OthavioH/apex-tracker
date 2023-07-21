import { Route, Routes } from "react-router-dom";

import PlayerStats from "../features/player-stats/PlayerStats";
import HomePage from "../pages/HomePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/player/:platform/:nickname" element={<PlayerStats />} />
    </Routes>
  );
}
