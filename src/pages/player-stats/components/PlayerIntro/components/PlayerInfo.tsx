import { Player, Total } from "../../../../../shared/types/PlayerStats";
import PlayerNickname from "./PlayerNickname";
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
        flex: 1,
        justifyContent: "flex-end",
        height: "100%",
      }}
    >
      <PlayerNickname nickname={player.name as string} />
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
