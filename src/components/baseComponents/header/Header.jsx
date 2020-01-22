import React, {useContext,useEffect} from 'react'
import {StyledHeader , Wrapper} from './style';
import MainNav from '../main-nav/MainNav';
import {ThemeContext} from '../../../contexts/ThemeContext';



 const  Header = (props) =>{
   const themeContext =  useContext(ThemeContext); 
   const {theme , isDefault ,toggleTheme} = themeContext; 

   useEffect( () => {
    console.log(theme);
}); 

    return (
        <Wrapper> 
            <StyledHeader activeTheme ={theme}> 
             <MainNav> </MainNav>
            </StyledHeader>
        </Wrapper> 
    )
}

export default Header; 