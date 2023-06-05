import styled from "styled-components";

export const SearchContainer = styled.input`
  min-width: 300px;
  height: 35px;
  padding: 10px;

  border: 2px solid var(--primary);
  border-radius: 5px;

  background-color: var(--primary);

  color: var(--primary-text-color);

  :focus {
    border-color: var(--hover-accent-color);
  }

  ::placeholder {
    color: gray;
  }
`;
