import { BigText, GiantText } from "../../../../../../shared/styles/styles";
import { LegendStructure } from "../../../../../../shared/types/PlayerStats";
import {
  AvatarImage,
  Divider,
  PlayerColumn,
  PlayerSmallText,
  SingleInfoContainer,
} from "../../../../PlayerStats.styles";

interface PlayerLegendProps {
  legend: LegendStructure;
}

export default function PlayerLegend({ legend }: PlayerLegendProps) {
  const data = legend.data?.slice(0, 3);

  return (
    <SingleInfoContainer
      style={{
        padding: "15px 20px",
        gap: "20px",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "16px",
        flexWrap: "wrap",
      }}
    >
      <AvatarImage src={legend.ImgAssets.icon as string} alt={"Legend data"} />
      {data?.map((data, index) => (
        <PlayerColumn>
          <PlayerSmallText key={index}>{data.name}</PlayerSmallText>
          <Divider />
          <BigText>{data.value}</BigText>
        </PlayerColumn>
      ))}
    </SingleInfoContainer>
  );
}
