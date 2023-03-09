import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../config/api';
import { ErrorState, LoadingState, PageState } from '../../shared/models/PageState';
import { Player } from '../../shared/types/PlayerStats';
import PlayerIntro from './components/PlayerIntro';
import { StatsMain } from './PlayerStats.styles';

export default function PlayerStats() {

    const [pageState, setPageState] = useState<PageState>(new LoadingState());

    let { platform, nickname } = useParams();
    const [player, setPlayer] = useState<Player | undefined>();

    useEffect(()=>{
        getPlayerStats();
    }, [])

    async function getPlayerStats() {
        
        try {
            
            const response = await api.get(`/bridge?auth=${import.meta.env.VITE_APEX_KEY}&player=${nickname}&platform=${platform}`);
            
            if(response.data.Error) {throw new Error(response.data.error);}
            
            setPlayer(response.data.global);
            

        } catch (e) {
            
            let errorMessage:string;

            if (e instanceof Error) {
                errorMessage = e.message;
            }
            else {
                errorMessage = e as string;
            }

            setPageState(new ErrorState(errorMessage));
        }
    }

    return (
        <StatsMain>
            <PlayerIntro player={player}></PlayerIntro>
            
        </StatsMain>
    );
}