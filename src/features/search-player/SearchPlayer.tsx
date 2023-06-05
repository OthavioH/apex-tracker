import { useNavigate } from "react-router-dom";
import { SearchContainer } from "./SearchPlayer.styles";

export default function SearchPlayer() {
  const navigate = useNavigate();

  async function handleSubmit(event: any) {
    console.log(event.target[0]);

    event.preventDefault();

    const platform: String = "PC";
    const nickname: String = event.target[0].value;

    return navigate(`/player/${platform.toUpperCase()}/${nickname}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <SearchContainer
        id="player_search"
        name="player_search"
        type="search"
        placeholder="Search by Player (Origin Username)"
      />
    </form>
  );
}
