import styled from "styled-components";
import { mobileBreakpoint, tabletBreakpoint } from "../../shared/styles/global";

export const PlayerStatsBackground = styled.img`
  min-height: 94vh;
  height: 100%;
  width: 100%;
  position: relative;

  object-fit: fill;
  object-position: center;

  filter: blur(5px) saturate(100%) brightness(80%) contrast(100%);
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  flex-direction: column;
  padding-right: 5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${tabletBreakpoint}) {
    padding-right: 0;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  width: 100%;

  @media screen and (max-width: ${tabletBreakpoint}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const SingleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  border-radius: 15px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.8)
  );
  backdrop-filter: blur(10px);
`;

export const MultipleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 10px 15px;
  border-radius: 15px;
  gap: 30px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.8)
  );
  backdrop-filter: blur(10px);
`;

export const PlayerSection = styled.section`
  width: 100%;
  min-height: 94vh;
  height: fit-content;

  position: relative;
  display: flex;

  flex-direction: colmun;
  align-items: flex-start;
  justify-content: flex-start;

  font-family: "Kanit";

  @media screen and (max-width: ${mobileBreakpoint}) {
    padding-bottom: 10px;
  }
`;

export const PlayerBigText = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;

export const PlayerName = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  text-shadow: 0 0 1px #000, 0 0 2px #000, 0 0 3px #000, 0 0 4px #000;

  @media screen and (max-width: ${mobileBreakpoint}) {
    font-size: var(--mobile-big-title-size);
  }
`;

export const GiantText = styled.p`
  color: white;
  font-size: var(--giant-text-size);
  font-weight: 600;

  @media screen and (max-width: ${mobileBreakpoint}) {
    font-size: var(--mobile-giant-text-size);
  }
`;

export const PlayerSmallText = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Divider = styled.div`
  width: 93%;
  height: 1px;
  background-color: #c4bdbb;
`;

export const PlayerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: ${tabletBreakpoint}) {
    width: 100%;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const RankImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 20px;
`;

export const AvatarImage = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  width: 100%;
  justify-content: start;
  gap: 10px;

  @media screen and (max-width: ${tabletBreakpoint}) {
    justify-content: center;
  }
`;

export const SelectedLegendImage = styled.img`
  aspect-ratio: 1/1;
  width: 100%;
  min-width: 200px;
  max-width: 460px;
  height: auto;

  display: block;
  object-fit: cover;
  object-position: center;
`;
