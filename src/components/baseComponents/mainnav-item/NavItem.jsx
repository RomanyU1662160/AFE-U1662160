import React, {useContext} from 'react';
import {StyledNavItem} from './style'; 
import { NavLink} from 'react-router-dom'; 
import {ThemeContext} from '../../../contexts/ThemeContext';


const NavItem = (props) => {
    const {theme} = useContext(ThemeContext)
    const { title} = props;
    return (
       <>  
       <NavLink to={"/"+title}> 
       <StyledNavItem theme={theme}> {title} </StyledNavItem>
       </NavLink>
        </>
    );
}

export default NavItem;
