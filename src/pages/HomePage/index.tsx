import { useRef, useState } from "react";
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

  const userRef = useRef<any>();
  const platformRef = useRef<any>();

  function resizeDropdown(newPlatformState: Platform) {
    const dropdown = document.getElementById("player-platform");
    if (dropdown) {
      dropdown.style.width = newPlatformState.toDropdownWidth();
    }
  }

  function handleSubtmit(event: any) {
    event.preventDefault();

    if (userRef.current) {
      const nickname: String = userRef.current.value;
      const platform = new Platform(platformRef.current!.value);

      return navigate(`/player/${platform.platformId}/${nickname}`);
    }
  }

  function changeInputFocused(value: boolean) {
    setIsFocused((_) => value);
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
            onChange={(event) => {
              resizeDropdown(new Platform(event.target.value));
            }}
            ref={platformRef}
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
              type="search"
              id="search-player-input"
              name="search-player-input"
              placeholder="Search for a player..."
              ref={userRef}
              min={1}
              onFocus={() => changeInputFocused(true)}
              onBlur={() => changeInputFocused(false)}
            />
          </SearchInputWrapper>
        </PlatformPlayerSearchingWrapper>
      </TitleWrapper>
    </MainContainer>
  );
}
