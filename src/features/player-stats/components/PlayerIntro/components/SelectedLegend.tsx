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
        flex: 3,
      }}
    >
      <img
        src={legend.ImgAssets.icon as string}
        alt={`${legend.LegendName} from Apex Legends`}
        style={{ width: "700px", height: "700px" }}
      />
    </PlayerColumn>
  );
}
