import { Route, Routes } from "react-router-dom";

import PlayerStatsScreen from "../features/player-stats/PlayerStatsScreen";
import HomePage from "../pages/HomePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/player/:platform/:nickname"
        element={<PlayerStatsScreen />}
      />
    </Routes>
  );
}
