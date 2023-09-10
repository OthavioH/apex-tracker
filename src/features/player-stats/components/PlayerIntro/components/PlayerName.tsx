import { Player } from "../../../../../shared/types/PlayerStats";
import {
  AvatarImage,
  Divider,
  InfoRow,
  PlayerSmallText,
  SingleInfoContainer,
} from "../../../PlayerStats.styles";

export default function PlayerName({ player }: { player: Player }) {
  return (
    <SingleInfoContainer
      style={{
        padding: "15px 20px",
        gap: "20px",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "16px",
      }}
    >
      <AvatarImage src={player.avatar as string} alt={player.name as string} />
      <PlayerSmallText>{player.name}</PlayerSmallText>
    </SingleInfoContainer>
  );
}
