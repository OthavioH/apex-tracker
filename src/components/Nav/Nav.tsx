import { useLocation, useNavigate } from "react-router-dom";
import SearchPlayer from "../../features/search-player/SearchPlayer";
import { HighlightedTitle, NavContainer, NavTitle } from "./Nav.styles";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  async function redirectHome() {
    navigate(`/`);
  }

  if (location.pathname === "/") {
    return null;
  }

  return (
    <NavContainer>
      <NavTitle onClick={redirectHome}>
        Apex<HighlightedTitle>Tracker</HighlightedTitle>
      </NavTitle>
      <SearchPlayer />
    </NavContainer>
  );
}
