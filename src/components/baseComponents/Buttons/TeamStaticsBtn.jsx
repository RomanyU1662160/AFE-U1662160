import React, { useContext } from "react";
import { Wrapper, StyledToggleThemeButton } from "./style";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { SearchContext } from "../../../contexts/SearchContext";

const TeamStaticsBtn = props => {
  const { theme } = useContext(ThemeContext);
  const { btnRole } = props;

  return (
    <Wrapper>
      <StyledToggleThemeButton theme={theme} color="#ffc107" onClick={btnRole}>
        Get Team Statics
      </StyledToggleThemeButton>
    </Wrapper>
  );
};

export default TeamStaticsBtn;
