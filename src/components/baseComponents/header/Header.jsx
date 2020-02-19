import React, { useContext, useEffect, Fragment } from "react";
import { StyledHeader, Wrapper } from "./style";
import MainNav from "../main-nav/MainNav";
import { ThemeContext } from "../../../contexts/ThemeContext";
import ToggleTheme from "../Buttons/ToggleTheme";

const Header = props => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  // useEffect(() => {
  // 	console.log(theme);
  // });

  return (
    <Fragment>
      <ToggleTheme />
      <Wrapper>
        <StyledHeader activeTheme={theme}>
          <MainNav> </MainNav>
        </StyledHeader>
      </Wrapper>
    </Fragment>
  );
};

export default Header;
