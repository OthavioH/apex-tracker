import { Selected } from "../../../../../shared/types/PlayerStats";
import { PlayerColumn, SelectedLegendImage } from "../../../PlayerStats.styles";

export default function SelectedLegend({ legend }: { legend: Selected }) {
  return (
    <PlayerColumn
      style={{
        flex: 1,
      }}
    >
      <SelectedLegendImage
        src={legend.ImgAssets.icon as string}
        alt={`${legend.LegendName} from Apex Legends`}
      />
    </PlayerColumn>
  );
}
