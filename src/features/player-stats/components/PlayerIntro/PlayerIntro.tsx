import { useEffect, useState } from "react";
import useStatsBackground from "../../../../shared/hooks/useStatsBackground";
import { Player, User } from "../../../../shared/types/PlayerStats";
import capitalize from "../../../../shared/utils/capitalize";
import {
  InfoWrapper,
  PlayerSection,
  PlayerStatsBackground,
} from "../../PlayerStats.styles";
import PlayerMainInfo from "./components/PlayerInfo";
import SelectedLegend from "./components/SelectedLegend";

interface PlayerInfoProps {
  user: User | undefined;
}

export default function PlayerIntro({ user }: PlayerInfoProps) {
  const player = user?.global;
  const total = user?.total;

  const [statsBackground, setStatsBackground] = useState<string>("");
  const statsBackgroundResponse = useStatsBackground(user!);

  useEffect(() => {
    statsBackgroundResponse.then((response) => {
      setStatsBackground(response);
    });
  }, []);

  return (
    <PlayerSection>
      <PlayerStatsBackground src={statsBackground} />
      <InfoWrapper>
        <SelectedLegend legend={user!.legends.selected} />
        <PlayerMainInfo player={player!} total={total!} />
      </InfoWrapper>
    </PlayerSection>
  );
}
