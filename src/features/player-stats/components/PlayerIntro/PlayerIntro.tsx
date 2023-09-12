import { useEffect, useState } from "react";
import useStatsBackground from "../../../../shared/hooks/useStatsBackground";
import { User } from "../../../../shared/types/PlayerStats";
import { FlexRow, PlayerSection } from "../../PlayerStats.styles";
import PlayerStats from "./components/PlayerStats";
import SelectedLegend from "./components/SelectedLegend";
import PlayerName from "./components/PlayerName";
import PlayerPickedBanner from "./components/PlayerPickedBanner/PlayerPickedBanner";

interface PlayerInfoProps {
  user: User | undefined;
}

export default function PlayerIntro({ user }: PlayerInfoProps) {
  const player = user?.global;
  const total = user?.total;
  const selectedLegend = user?.legends.selected;

  const [statsBackground, setStatsBackground] = useState<string>("");
  const statsBackgroundResponse = useStatsBackground(user!);

  useEffect(() => {
    statsBackgroundResponse.then((response) => {
      setStatsBackground(response);
    });
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
    </PlayerSection>
  );
}
