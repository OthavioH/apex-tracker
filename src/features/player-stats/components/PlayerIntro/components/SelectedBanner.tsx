import { GiantText } from "../../../../../shared/styles/styles";
import {
  SingleInfoContainer,
  PlayerColumn,
  PlayerSmallText,
  Divider,
} from "../../../PlayerStats.styles";

export default function SelectedBanner({
  name,
  value,
}: {
  name: string;
  value: number;
}) {
  return (
    <SingleInfoContainer>
      <PlayerColumn>
        <PlayerSmallText>{name}</PlayerSmallText>
        <Divider />
        <GiantText>{value}</GiantText>
      </PlayerColumn>
    </SingleInfoContainer>
  );
}
