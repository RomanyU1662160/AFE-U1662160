import React from 'react'
import {StyledHeader , Wrapper} from './style';
import MainNav from '../main-nav/MainNav';
import { Theme } from '../../../Styles/themes/Theme';


export default function Header() {
    return (
        <Wrapper> 
            <StyledHeader theme={Theme}> 
             <MainNav theme={Theme}> </MainNav>
            </StyledHeader>
        </Wrapper> 
    )
}
