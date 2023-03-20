import {
  Divider,
  GiantText,
  PlayerSmallText,
  RankImage,
  Row,
  SingleInfoContainer,
} from "../../../PlayerStats.styles";

export default function LevelInfo({
  level,
  rankImg,
}: {
  level: number;
  rankImg: string;
}) {
  return (
    <Row>
      <SingleInfoContainer>
        <PlayerSmallText>Rank</PlayerSmallText>
        <Divider />
        <RankImage src={rankImg} />
      </SingleInfoContainer>
      <SingleInfoContainer>
        <PlayerSmallText>Level</PlayerSmallText>
        <Divider />
        <GiantText>{level}</GiantText>
      </SingleInfoContainer>
    </Row>
  );
}
