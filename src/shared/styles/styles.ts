import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  height: 100%;
  width: 100%;

  padding: 0 var(--default-page-padding);
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 50%;
  width: 30%;
  gap: 20px;
`;

export const PlayersNameInput = styled.input.attrs({
  placeholderTextColor: "white",
})`
  background: transparent;
  width: 100%;
  height: 50px;
  color: white;
  border: 4px solid red;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgb(255, 255, 255, 0.5);
  }

  :active,
  :focus {
    border: 4px solid white;
  }
`;

export const PlatformSelect = styled.select`
  background: transparent;
  width: 30%;
  height: 50px;
  color: white;
  border: 4px solid red;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  padding: 10px;
`;

export const PlatformOption = styled.option`
  color: black;
`;

export const SubmitButton = styled.button`
  background: transparent;
  width: 30%;
  height: 50px;
  color: white;
  border: 4px solid red;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  padding: 10px;
  :hover {
    border: 4px solid white;
  }
`;
