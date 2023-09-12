import styled from "styled-components";
import { mobileBreakpoint, tabletBreakpoint } from "../../shared/styles/global";

export const PlayerStatsBackground = styled.img`
  min-height: 100vh;
  height: 100%;
  width: 100%;

  object-fit: fill;
  object-position: center;

  filter: blur(5px) saturate(100%) brightness(80%) contrast(100%);
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;

  @media screen and (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const SingleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
  align-items: center;
  padding: 12px 16px;
  border-radius: 16px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.8)
  );
  backdrop-filter: blur(12px);
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
  min-height: 100vh;
  height: fit-content;

  position: relative;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-bottom: 1rem;

  @media screen and (max-width: ${tabletBreakpoint}) {
    padding-right: 0;
  }

  font-family: "Kanit";

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: ${mobileBreakpoint}) {
    padding-bottom: 10px;
  }
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

export const RankColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding-right: 6rem;

  @media screen and (max-width: ${tabletBreakpoint}) {
    width: 100%;
    padding-right: 0;
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
