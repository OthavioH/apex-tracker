import { Player, Total } from "../../../../../shared/types/PlayerStats";
import RankInfo from "./RankInfo";
import {
  Divider,
  RankColumn,
  PlayerSmallText,
  Row,
  MultipleInfoContainer,
  PlayerColumn,
} from "../../../PlayerStats.styles";
import LevelInfo from "./LevelInfo";
import { GiantText } from "../../../../../shared/styles/styles";

export default function PlayerStats({
  player,
  total,
}: {
  player: Player;
  total: Total;
}) {
  const kd = +total.kd?.value;
  return (
    <RankColumn
      style={{
        justifyContent: "center",
      }}
    >
      <Row>
        <RankInfo
          nickname={player.name as string}
          rankImg={player.rank.rankImg}
          rank={player.rank.rankName as string}
          level={player.level}
        />
      </Row>
      <Row>
        <MultipleInfoContainer style={{ flexDirection: "row" }}>
          <PlayerColumn>
            <PlayerSmallText>BR Kills</PlayerSmallText>
            <Divider />
            <GiantText>{total.kills?.value || 0}</GiantText>
          </PlayerColumn>
          <PlayerColumn>
            <PlayerSmallText>K/D</PlayerSmallText>
            <Divider />
            <GiantText>{kd && kd > -1 ? kd : 0.0}</GiantText>
          </PlayerColumn>
          <PlayerColumn>
            <PlayerSmallText>BR Games</PlayerSmallText>
            <Divider />
            <GiantText>{total.games_played?.value || 0}</GiantText>
          </PlayerColumn>
        </MultipleInfoContainer>
      </Row>
    </RankColumn>
  );
}
