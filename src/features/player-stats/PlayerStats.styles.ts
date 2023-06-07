import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 100%;
  font-family: "Kanit";
`;

export const PlayerBigText = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;

export const PlayerName = styled.h1`
  color: white;
  font-size: 4rem;
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
