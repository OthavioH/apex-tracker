import { Selected } from "../../../../../shared/types/PlayerStats";
import {
  GiantText,
  PlayerBigText,
  PlayerColumn,
} from "../../../PlayerStats.styles";

export default function SelectedLegend({ legend }: { legend: Selected }) {
  return (
    <PlayerColumn
      style={{
        flex: 1,
      }}
    >
      <img
        loading="lazy"
        src={legend.ImgAssets.icon as string}
        alt={`${legend.LegendName} from Apex Legends`}
        style={{
          aspectRatio: "1/1",
          width: "100%",
          minWidth: "200px",
          minHeight: "200px",
          height: "auto",
          display: "block",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </PlayerColumn>
  );
}
