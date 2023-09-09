import styled from "styled-components";
import { mobileBreakpoint } from "../../shared/styles/global";
import { Search } from "lucide-react";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const BackgroundContainer = styled.img`
  max-height: 100vh;
  width: 100%;
  position: relative;
  object-fit: cover;

  filter: blur(5px) saturate(100%) brightness(50%) contrast(100%);
`;

export const TitleWrapper = styled.form`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--primary-text-color);
  text-align: center;
`;

export const HomePageTitle = styled.h1`
  font-size: var(--big-title-size);

  span {
    color: var(--accent-text-color);
  }

  @media screen and (max-width: ${mobileBreakpoint}) {
    font-size: var(--mobile-big-title-size);
  }
`;

export const PlatformPlayerSearchingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 18px;
`;

export const PlatformSearchingSelect = styled.select`
  display: inline-block;
  width: 70px;
  height: 50px;
  padding: 10px;

  background: transparent;
  border: 2px solid var(--primary-text-color);
  border-radius: 10px;

  color: var(--primary-text-color);
  font-weight: bold;

  &:focus {
    border-color: var(--accent-color);
  }

  > option {
    color: #000;
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 35%;
  min-width: 200px;
  max-width: 400px;
  height: 50px;
  padding: 0px 10px;
  gap: 10px;

  border-radius: 10px;
  border: 2px solid var(--primary-text-color);

  &:focus-within {
    border-color: var(--accent-color);
  }
`;

export const SearchInputIcon = styled(Search)`
  color: ${(props) => props.color || "var(--primary-text-color)"};
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;

  background-color: transparent;
  color: var(--primary-text-color);
`;
