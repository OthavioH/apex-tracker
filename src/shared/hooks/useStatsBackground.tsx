import api from "../../config/api";
import { User } from "../types/PlayerStats";

interface MapRotation {
  current: {
    asset: string;
  };
}

export default async function useStatsBackground(user: User): Promise<string> {
  const imgSelectedLegendBanner = user.legends.selected.ImgAssets.banner;

  if (imgSelectedLegendBanner) {
    return imgSelectedLegendBanner as string;
  }

  const data = await api
    .get(`/maprotation?auth=${import.meta.env.VITE_APEX_KEY}`)
    .then((res) => res.data as MapRotation);

  return data.current.asset;
}
