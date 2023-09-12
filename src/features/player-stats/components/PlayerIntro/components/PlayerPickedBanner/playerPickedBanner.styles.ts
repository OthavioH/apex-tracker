import styled from "styled-components";

export const PlayerPickedBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
  align-items: center;
  padding: 10px 16px;
  border-radius: 16px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.8)
  );
  backdrop-filter: blur(10px);
`;
