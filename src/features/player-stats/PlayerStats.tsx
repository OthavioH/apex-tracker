import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../config/api";
import {
  ErrorState,
  LoadingState,
  PageState,
  SuccessState,
} from "../../shared/models/PageState";
import { User } from "../../shared/types/PlayerStats";
import PlayerIntro from "./components/PlayerIntro/PlayerIntro";
import { StatsMain } from "./PlayerStats.styles";

export default function PlayerStats() {
  const [pageState, setPageState] = useState<PageState>(new LoadingState());

  let { platform, nickname } = useParams();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getPlayerStats();
  }, []);

  async function getPlayerStats() {
    try {
      const response = await api.get(
        `/bridge?auth=${
          import.meta.env.VITE_APEX_KEY
        }&player=${nickname}&platform=${platform}`
      );

      if (response.data.Error && response.data.Error !== "") {
        throw new Error(response.data.Error);
      }

      setPageState(new SuccessState());
      setUser(response.data);
    } catch (e) {
      let errorMessage: string;

      if (e instanceof Error) {
        errorMessage = e.message;
      } else {
        errorMessage = e as string;
      }

      setPageState(new ErrorState(errorMessage));
    }
  }

  if (pageState instanceof LoadingState)
    return <h1 style={errorStyle}>Loading...</h1>;

  if (pageState instanceof ErrorState)
    return <h1 style={errorStyle}>{pageState.message}</h1>;

  return (
    <StatsMain
      style={{
        backgroundImage: `url(${user!.legends.selected.ImgAssets.banner})`,
      }}
    >
      <PlayerIntro user={user}></PlayerIntro>
    </StatsMain>
  );
}

const errorStyle = {
  color: "whitesmoke",
};
