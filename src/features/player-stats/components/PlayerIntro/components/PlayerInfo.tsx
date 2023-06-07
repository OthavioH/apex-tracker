import { Player, Total } from "../../../../../shared/types/PlayerStats";
import PlayerNickname from "./PlayerNickname";
import {
  Divider,
  GiantText,
  PlayerColumn,
  PlayerSmallText,
  Row,
  MultipleInfoContainer,
} from "../../../PlayerStats.styles";
import LevelInfo from "./LevelInfo";

export default function PlayerMainInfo({
  player,
  total,
}: {
  player: Player;
  total: Total;
}) {
  return (
    <PlayerColumn
      style={{
        justifyContent: "center",
      }}
    >
      <Row>
        <PlayerNickname nickname={player.name as string} />
      </Row>
      <LevelInfo level={player.level} rankImg={player.rank.rankImg} />
      <Row>
        <MultipleInfoContainer style={{ flexDirection: "row" }}>
          <PlayerColumn>
            <PlayerSmallText>BR Kills</PlayerSmallText>
            <Divider />
            <GiantText>{total.kills.value}</GiantText>
          </PlayerColumn>
          <PlayerColumn>
            <PlayerSmallText>K/D</PlayerSmallText>
            <Divider />
            <GiantText>{total.kd.value}</GiantText>
          </PlayerColumn>
          <PlayerColumn>
            <PlayerSmallText>BR Games</PlayerSmallText>
            <Divider />
            <GiantText>{total.games_played.value}</GiantText>
          </PlayerColumn>
        </MultipleInfoContainer>
      </Row>
    </PlayerColumn>
  );
}
