import styled from 'styled-components'; 

export const StyledMainNav = styled.nav `
 display:flex;
 flex-flow: row wrap;
 flex:auto;
 align-items:center; 
 background-color: ${(props)=>  props.activeTheme.bg ? props.activeTheme.bg : 'lightgray'};
 color: ${(props)=>  props.activeTheme.color ? props.activeTheme.color : 'black'};


  
 
`

