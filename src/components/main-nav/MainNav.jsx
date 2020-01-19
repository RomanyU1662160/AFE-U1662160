import React from 'react';

import {StyledMainNav} from './style';
import NavItem from "../mainnav-item/NavItem";

const MainNav = (props) => {

   const{theme} = props; 
    return (
    <StyledMainNav theme={theme}> 
          <NavItem title="Home" theme={theme}> </NavItem>
          <NavItem title="Search"> </NavItem>
          <NavItem title="About"> </NavItem>
          
    </StyledMainNav>
    );
}

export default MainNav;
