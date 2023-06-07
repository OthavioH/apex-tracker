import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import PlayerStats from "../features/player-stats/PlayerStats";
import HomePage from "../pages/HomePage";
import App from "../App";
import { MainContainer } from "../shared/styles/styles";

export default function Router() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player/:platform/:nickname" element={<PlayerStats />} />
      </Routes>
    </MainContainer>
  );
}
