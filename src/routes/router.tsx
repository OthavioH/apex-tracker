import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import PlayerStats from "../pages/player-stats/PlayerStats";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/player/:platform/:nickname',
    element: <PlayerStats/>,
  }
]);


export default router;