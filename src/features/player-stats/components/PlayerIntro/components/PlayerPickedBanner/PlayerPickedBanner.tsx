import { GiantText } from "../../../../../../shared/styles/styles";
import {
  PlayerColumn,
  PlayerSmallText,
  Divider,
} from "../../../../PlayerStats.styles";
import { PlayerPickedBannerContainer } from "./playerPickedBanner.styles";

export default function PlayerPickedBanner({
  name,
  value,
}: {
  name: string;
  value: number;
}) {
  return (
    <PlayerPickedBannerContainer>
      <PlayerColumn>
        <PlayerSmallText>{name}</PlayerSmallText>
        <Divider />
        <GiantText>{value}</GiantText>
      </PlayerColumn>
    </PlayerPickedBannerContainer>
  );
}
