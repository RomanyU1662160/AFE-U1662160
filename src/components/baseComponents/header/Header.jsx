import React, { useContext, Fragment } from "react";
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
      <Wrapper>
        <StyledHeader activeTheme={theme}>
          <ToggleTheme />
          <MainNav> </MainNav>
        </StyledHeader>
      </Wrapper>
    </Fragment>
  );
};

export default Header;
