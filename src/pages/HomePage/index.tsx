import { useState } from "react";
import { MainText } from "../../shared/styles/styles";
import {
  MainContainer,
  BackgroundContainer,
  TitleWrapper,
  HomePageTitle,
  SearchInputWrapper,
  SearchInputIcon,
  SearchInput,
  PlatformSearchingSelect,
  PlatformPlayerSearchingWrapper,
} from "./homepage.styles";
import Platform from "../../shared/types/Platform";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [platform, setPlatform] = useState<Platform>(new Platform("PC"));
  const [username, setUsername] = useState("");

  function handlePlatformChange(event: any) {
    const newPlatformState = new Platform(event.target.value);

    setPlatform(newPlatformState);
    resizeDropdown(newPlatformState);
  }

  function resizeDropdown(newPlatformState: Platform) {
    const dropdown = document.getElementById("player-platform");
    if (dropdown) {
      console.log(newPlatformState.platformIdToString().length);

      dropdown.style.width = newPlatformState.toDropdownWidth();
    }
  }

  function handleSubtmit(event: any) {
    event.preventDefault();

    const nickname: String = event.target[1].value;

    return navigate(`/player/${platform.platformId}/${nickname}`);
  }

  return (
    <MainContainer>
      <BackgroundContainer src="homepage_background.jpg" />
      <TitleWrapper onSubmit={handleSubtmit}>
        <HomePageTitle>
          Apex <span>Tracker</span>
        </HomePageTitle>
        <PlatformPlayerSearchingWrapper>
          <PlatformSearchingSelect
            id="player-platform"
            name="search_player_platform"
            onChange={(e) => handlePlatformChange(e)}
            value={platform.platformId}
          >
            <option value="PC">PC</option>
            <option value="X1">Xbox</option>
            <option value="PS4">Playstation</option>
            <option value="SWITCH">Nintendo Switch</option>
          </PlatformSearchingSelect>
          <SearchInputWrapper>
            <SearchInputIcon
              size={24}
              color={
                isFocused ? "var(--accent-color)" : "var(--primary-text-color)"
              }
            />
            <SearchInput
              type="text"
              id="search-player-input"
              name="search-player-input"
              placeholder="Search for a player..."
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              min={1}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </SearchInputWrapper>
        </PlatformPlayerSearchingWrapper>
      </TitleWrapper>
    </MainContainer>
  );
}
