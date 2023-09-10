import { GiantText } from "../../../../../shared/styles/styles";
import {
  PlayerColumn,
  PlayerSmallText,
  RankImage,
  Row,
  SingleInfoContainer,
} from "../../../PlayerStats.styles";

export default function LevelInfo({ level }: { level: number }) {
  return (
    <PlayerColumn>
      <PlayerSmallText>LVL</PlayerSmallText>
      <GiantText>{level}</GiantText>
    </PlayerColumn>
  );
}
