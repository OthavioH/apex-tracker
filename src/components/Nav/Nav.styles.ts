import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 50px;
  background-color: #181d20;

  padding: 0 var(--default-page-padding);
`;

export const NavTitle = styled.p`
  display: flex;
  font-size: 20px;
  color: var(--primary-text-color);
  font-weight: bold;

  text-transform: capitalize;
  user-select: none;
  cursor: pointer;

  margin-right: var(--default-page-padding);
  letter-spacing: 0.9px;
`;

export const HighlightedTitle = styled.span`
  color: var(--accent-text-color);
  text-transform: up;
`;
