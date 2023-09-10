import { useEffect, useState } from "react";
import useStatsBackground from "../../../../shared/hooks/useStatsBackground";
import { Player, User } from "../../../../shared/types/PlayerStats";
import capitalize from "../../../../shared/utils/capitalize";
import {
  Divider,
  FlexRow,
  PlayerColumn,
  PlayerSection,
  PlayerSmallText,
  PlayerStatsBackground,
  Row,
  SingleInfoContainer,
} from "../../PlayerStats.styles";
import PlayerStats from "./components/PlayerStats";
import SelectedLegend from "./components/SelectedLegend";
import PlayerName from "./components/PlayerName";
import { GiantText } from "../../../../shared/styles/styles";
import SelectedBanner from "./components/SelectedBanner";

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
            <SelectedBanner
              name={selectedBanner.name as string}
              value={selectedBanner.value}
              key={index}
            />
          ))}
      </FlexRow>
    </PlayerSection>
  );
}
