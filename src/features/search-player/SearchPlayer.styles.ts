import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const PlayerPlatformDropdown = styled.select`
  display: inline-block;
  width: 70px;
  height: 35px;
  padding: 10px;

  background: var(--primary);
  border: none;
  border-right: 2px solid #15181a;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  color: var(--primary-text-color);
  font-weight: bold;
`;

export const SearchContainer = styled.input`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 35px;
  padding: 10px;

  border: 2px solid var(--primary);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: var(--primary);

  color: var(--primary-text-color);

  :focus {
    border-color: var(--hover-accent-color);
  }

  ::placeholder {
    color: gray;
  }
`;
