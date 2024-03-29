import capitalize from "../../../../../shared/utils/capitalize";
import {
  Divider,
  InfoRow,
  PlayerColumn,
  PlayerSmallText,
  RankImage,
  SingleInfoContainer,
} from "../../../PlayerStats.styles";
import LevelInfo from "./LevelInfo";

export default function RankInfo(params: {
  nickname: string;
  rankImg: string;
  rank: string;
  level: number;
}) {
  return (
    <SingleInfoContainer>
      <PlayerColumn>
        <PlayerSmallText>Rank</PlayerSmallText>
        <Divider />
        <InfoRow>
          <PlayerColumn>
            <RankImage src={params.rankImg} />
            <PlayerSmallText style={playerNameStyle}>
              {params.rank}
            </PlayerSmallText>
          </PlayerColumn>
          <LevelInfo level={params.level} />
        </InfoRow>
      </PlayerColumn>
    </SingleInfoContainer>
  );
}

const playerNameStyle = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
} as const;
