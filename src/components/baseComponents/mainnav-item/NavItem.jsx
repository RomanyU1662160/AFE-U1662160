import React from 'react';
import {StyledNavItem} from './style'; 

const NavItem = (props) => {
    const { title} = props;
    return (
        <StyledNavItem> {title} </StyledNavItem>
    );
}

export default NavItem;
