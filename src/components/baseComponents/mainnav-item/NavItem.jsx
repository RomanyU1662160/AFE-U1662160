import React, { useContext } from "react";
import { StyledNavlink } from "./style";
import { ThemeContext } from "../../../contexts/ThemeContext";

const NavItem = props => {
  const { title } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <StyledNavlink theme={theme} to={"/" + title}>
        {title}
      </StyledNavlink>
    </>
  );
};

export default NavItem;
