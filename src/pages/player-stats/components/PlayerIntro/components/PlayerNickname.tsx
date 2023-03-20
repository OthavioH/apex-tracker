import capitalize from "../../../../../shared/utils/capitalize";
import {
  Divider,
  PlayerColumn,
  PlayerName,
  PlayerSmallText,
  SingleInfoContainer,
} from "../../../PlayerStats.styles";

export default function PlayerNickname(params: { nickname: string }) {
  return (
    <SingleInfoContainer>
      <PlayerColumn>
        <PlayerSmallText>Nickname</PlayerSmallText>
        <Divider />
        <PlayerName style={playerNameStyle}>
          {capitalize(params.nickname)}
        </PlayerName>
      </PlayerColumn>
    </SingleInfoContainer>
  );
}

const playerNameStyle = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
} as const;
