import { useEffect, useState } from "react";
import useStatsBackground from "../../../../shared/hooks/useStatsBackground";
import { Player, User } from "../../../../shared/types/PlayerStats";
import capitalize from "../../../../shared/utils/capitalize";
import {
  FlexRow,
  InfoWrapper,
  PlayerSection,
  PlayerStatsBackground,
  Row,
} from "../../PlayerStats.styles";
import PlayerStats from "./components/PlayerStats";
import SelectedLegend from "./components/SelectedLegend";
import PlayerName from "./components/PlayerName";

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
        <PlayerName player={player!} />
        <FlexRow>
          <SelectedLegend legend={user!.legends.selected} />
          <PlayerStats player={player!} total={total!} />
        </FlexRow>
      </InfoWrapper>
    </PlayerSection>
  );
}
