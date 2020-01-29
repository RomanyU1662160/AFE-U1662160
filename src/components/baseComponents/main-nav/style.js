import styled from 'styled-components'; 

export const StyledMainNav = styled.nav `
 display:flex;
 flex-flow: row wrap;
 flex:auto;
 padding:1%; 
 align-items:center; 
 justify-content: space-evenly; 
 background-color: ${(props)=>  props.activeTheme.bg ? props.activeTheme.bg : 'lightgray'};
 color: ${(props)=>  props.activeTheme.color ? props.activeTheme.color : 'black'};


  
 
`

