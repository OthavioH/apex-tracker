import capitalize from "../../../../../shared/utils/capitalize";
import {
  Divider,
  InfoRow,
  PlayerColumn,
  PlayerName,
  PlayerSmallText,
  RankImage,
  SingleInfoContainer,
} from "../../../PlayerStats.styles";

export default function PlayerNickname(params: {
  nickname: string;
  rankImg: string;
}) {
  return (
    <SingleInfoContainer>
      <PlayerColumn>
        <PlayerSmallText>Player</PlayerSmallText>
        <Divider />
        <InfoRow>
          <PlayerColumn>
            <RankImage src={params.rankImg} />
            <PlayerSmallText style={playerNameStyle}>Rookie</PlayerSmallText>
          </PlayerColumn>
          <PlayerName style={playerNameStyle}>
            {capitalize(params.nickname)}
          </PlayerName>
        </InfoRow>
      </PlayerColumn>
    </SingleInfoContainer>
  );
}

const playerNameStyle = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
} as const;
