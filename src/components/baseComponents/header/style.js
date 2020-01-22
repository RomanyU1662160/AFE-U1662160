import styled from 'styled-components'; 


export const Wrapper= styled.div `
display: flex; 
align-items:center; 
jusitfy-content:center;
` 

export const StyledHeader = styled.div ` 
width:100%;
background-color: ${(props)=> props.activeTheme.bg ? props.activeTheme.bg : '#336699'};
color:   ${(props)=> props.activeTheme.color ? props.activeTheme.color : 'black'};
padding:5%;
flex: 1 1 100%; 
border:solid 1px red;
flex-flow: row wrap;
`

