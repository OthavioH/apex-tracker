import { useNavigate } from "react-router-dom";
import {
  PlayerPlatformDropdown,
  SearchContainer,
  SearchForm,
} from "./SearchPlayer.styles";
import { useState } from "react";
import Platform from "../../shared/types/Platform";

export default function SearchPlayer() {
  const navigate = useNavigate();
  const [player, setPlayer] = useState("");
  const [platform, setPlatform] = useState<Platform>(new Platform("PC"));

  async function handleSubmit(event: any) {
    console.log(event.target[0]);

    event.preventDefault();

    const nickname: String = event.target[1].value;
    setPlayer("");

    return navigate(`/player/${platform.platformId}/${nickname}`);
  }

  function resizeDropdown(newPlatformState: Platform) {
    const dropdown = document.getElementById("player-platform");
    if (dropdown) {
      console.log(newPlatformState.platformIdToString().length);

      dropdown.style.width = newPlatformState.toDropdownWidth();
    }
  }

  function handlePlatformChange(event: any) {
    console.log(event.target.value);

    const newPlatformState = new Platform(event.target.value);

    setPlatform(newPlatformState);
    resizeDropdown(newPlatformState);
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <PlayerPlatformDropdown
        id="player-platform"
        onChange={(e) => handlePlatformChange(e)}
        value={platform.platformId}
      >
        <option value="PC">PC</option>
        <option value="X1">Xbox</option>
        <option value="PS4">Playstation</option>
        <option value="SWITCH">Nintendo Switch</option>
      </PlayerPlatformDropdown>
      <SearchContainer
        id="player_search"
        name="player_search"
        type="search"
        value={player}
        onChange={(event) => setPlayer(event.target.value)}
        placeholder="Search by Player (Origin Username)"
      />
    </SearchForm>
  );
}
