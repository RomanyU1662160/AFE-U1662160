import styled from 'styled-components';
import {NavLink} from 'react-router-dom'; 



export const StyledNavlink = styled(NavLink)`
flex: auto;
border: solid 1px white;
color: ${props => props.theme.color};
content: ${props => props.title};

@media(max-width:750px){
flex: 1 1 100%;
border:none;
border-bottom: solid 1px white;
`