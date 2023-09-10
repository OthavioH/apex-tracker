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
import { AxiosError } from "axios";
import Loading from "./components/Loading/Loading";

export default function PlayerStatsScreen() {
  const [pageState, setPageState] = useState<PageState>(new LoadingState());

  let { platform, nickname } = useParams();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setPageState(new LoadingState());
    getPlayerStats();
  }, [platform, nickname]);

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

      setPageState(new LoadingState());
      setUser(response.data);
    } catch (e) {
      let errorMessage: string;

      if (e instanceof AxiosError) {
        errorMessage = e.response?.data.Error;
      } else {
        errorMessage = e as string;
      }

      setPageState(new ErrorState(errorMessage));
    }
  }

  if (pageState instanceof LoadingState)
    return (
      <h1 style={errorStyle}>
        <Loading />
      </h1>
    );

  if (pageState instanceof ErrorState)
    return <h1 style={errorStyle}>{pageState.message}</h1>;

  return <PlayerIntro user={user}></PlayerIntro>;
}

const errorStyle = {
  color: "whitesmoke",
};
