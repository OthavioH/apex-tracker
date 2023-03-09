import { Player } from '../../../shared/types/PlayerStats';
import { PlayerBigText, PlayerColumn, PlayerInfoContainer, RankImage } from '../PlayerStats.styles';

interface PlayerInfoProps {
    player: Player | undefined;
}


export default function PlayerIntro({player}:PlayerInfoProps) {
    return(
        <PlayerInfoContainer>
            <RankImage src={player?.rank.rankImg}/>
            <PlayerColumn>
                <PlayerBigText>{player?.name} | Level {player?.level}</PlayerBigText>
                <PlayerBigText>{player?.rank.rankName}</PlayerBigText>
            </PlayerColumn>
        </PlayerInfoContainer>
    );
}