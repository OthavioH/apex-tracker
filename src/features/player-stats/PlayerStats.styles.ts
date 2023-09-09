import styled from "styled-components";

export const PlayerStatsBackground = styled.img`
  display: flex;
  min-height: 94vh;
  min-width: 100vw;
  position: relative;

  object-fit: fill;
  overflow: hidden;
  object-position: center;

  filter: blur(5px) saturate(100%) brightness(80%) contrast(100%);
`;

export const InfoWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  width: 100%;
  padding-right: 10rem;
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
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  font-family: "Kanit";
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
`;

export const GiantText = styled.p`
  color: white;
  font-size: 3.8rem;
  font-weight: 600;
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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  width: 100%;
  justify-content: start;
  gap: 10px;
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
