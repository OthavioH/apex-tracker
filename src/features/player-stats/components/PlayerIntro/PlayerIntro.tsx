import { useEffect, useState } from "react";
import useStatsBackground from "../../../../shared/hooks/useStatsBackground";
import { LegendStructure, User } from "../../../../shared/types/PlayerStats";
import { FlexRow, PlayerSection } from "../../PlayerStats.styles";
import PlayerStats from "./components/PlayerStats";
import SelectedLegend from "./components/SelectedLegend";
import PlayerName from "./components/PlayerName";
import PlayerPickedBanner from "./components/PlayerPickedBanner/PlayerPickedBanner";
import PlayerLegend from "./components/PlayerLegend/PlayerLegend";

interface PlayerInfoProps {
  user: User | undefined;
}

export default function PlayerIntro({ user }: PlayerInfoProps) {
  const player = user?.global;
  const total = user?.total;
  const selectedLegend = user?.legends.selected;
  const legends = user?.legends.all;

  const [statsBackground, setStatsBackground] = useState<string>("");
  const statsBackgroundResponse = useStatsBackground(user!);

  useEffect(() => {
    statsBackgroundResponse.then((response) => {
      setStatsBackground(response);
    });

    console.log(legends);
  }, []);

  return (
    <PlayerSection
      style={{ backgroundImage: `url(${statsBackground})`, gap: "18px" }}
    >
      <PlayerName player={player!} />
      <FlexRow>
        {selectedLegend && <SelectedLegend legend={selectedLegend} />}
        {player && total && <PlayerStats player={player} total={total} />}
      </FlexRow>
      <FlexRow style={{ justifyContent: "center", gap: "18px" }}>
        {selectedLegend &&
          selectedLegend.data.map((selectedBanner, index) => (
            <PlayerPickedBanner
              name={selectedBanner.name as string}
              value={selectedBanner.value}
              key={index}
            />
          ))}
      </FlexRow>
      <FlexRow style={{ justifyContent: "center", gap: "18px" }}>
        {legends &&
          Object.values(legends).map(
            (legends: LegendStructure, index) =>
              legends.data && <PlayerLegend legend={legends} key={index} />
          )}
      </FlexRow>
    </PlayerSection>
  );
}
