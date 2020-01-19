import styled from 'styled-components'; 

export const StyledMainNav = styled.nav `
 display:flex;
 flex-flow: row wrap;
 flex:auto;
 align-items:center; 
 background-color: ${props =>props.theme.background_color ? props.theme.background_color : 'darkgrey'};
 color: ${props =>props.theme.color ? props.theme.color : 'darkgrey'};
`

