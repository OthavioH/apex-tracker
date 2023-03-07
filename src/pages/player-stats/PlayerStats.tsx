import { useParams } from 'react-router-dom';
import {RootObject, Global} from '../../utils/types/PlayerStats';
import api from '../../config/api';
import { useEffect, useState } from 'react';
import { MainContainer } from '../../styles/styles';
import { PlayerBigText, PlayerColumn, PlayerInfoContainer, RankImage } from './PlayerStats.styles';

export default function PlayerStats() {

    let { platform, nickname } = useParams();
    const [player, setPlayer] = useState<Global>();

    useEffect(()=>{
        getPlayerStats();
    }, [])

    async function getPlayerStats() {
        
        const response = await api.get(`/bridge?auth=${import.meta.env.VITE_APEX_KEY}&player=${nickname}&platform=${platform}`);
        console.log(response.data);
        setPlayer(response.data.global);
    }

    return (
        <MainContainer>
            <PlayerInfoContainer>
                <RankImage src={player?.rank.rankImg}/>
                <PlayerColumn>
                    <PlayerBigText>{player?.name}</PlayerBigText>
                    <PlayerBigText>{player?.rank.rankName}</PlayerBigText>
                </PlayerColumn>
            </PlayerInfoContainer>
        </MainContainer>
    );
}