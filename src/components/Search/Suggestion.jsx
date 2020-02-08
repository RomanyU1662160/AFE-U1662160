import React, { Fragment, useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { StyledLi } from "./style";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";

const Suggestion = props => {
  const { suggestion, display } = props;
  const [selectedTeam, setSelectedTeam] = useState(null);
  const { getTeamDetails } = useContext(SearchContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("display", display);
  });

  const handleSelect = id => {
    const selected = getTeamDetails(id);
    return setSelectedTeam(selected);
  };

  return (
    <Fragment>
      <NavLink to={"/team/" + suggestion.team.id}>
        <StyledLi
          className="alert border mt-2 "
          theme={theme}
          display={display}
          onClick={() => handleSelect(suggestion.team.id)}
        >
          {suggestion ? suggestion.team.name : ""}
        </StyledLi>
      </NavLink>
    </Fragment>
  );
};

export default Suggestion;
