import { Player, User } from "../../../../shared/types/PlayerStats";
import capitalize from "../../../../shared/utils/capitalize";
import {
  Divider,
  GiantText,
  PlayerBigText,
  PlayerColumn,
  SingleInfoContainer,
  PlayerSection,
  PlayerSmallText,
  RankImage,
  Row,
  MultipleInfoContainer,
  PlayerName,
} from "../../PlayerStats.styles";
import PlayerMainInfo from "./components/PlayerInfo";
import PlayerNickname from "./components/PlayerNickname";
import SelectedLegend from "./components/SelectedLegend";

interface PlayerInfoProps {
  user: User | undefined;
}

export default function PlayerIntro({ user }: PlayerInfoProps) {
  const player = user?.global;
  const total = user?.total;

  return (
    <PlayerSection style={playerSectionStyle}>
      <SelectedLegend legend={user!.legends.selected} />
      <PlayerMainInfo player={player!} total={total!} />
    </PlayerSection>
  );
}

const playerSectionStyle = {
  display: "flex",
  height: "fit-content",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  paddingRight: "10rem",
} as const;
