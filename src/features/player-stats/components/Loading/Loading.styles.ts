import styled from "styled-components";

import loadingSectionBackground from "../../../../assets/Kings_Canyon.png";

export const LoadingSection = styled.section`
  background-image: url(${loadingSectionBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;

  text-align: center;
  gap: 50px;
`;
