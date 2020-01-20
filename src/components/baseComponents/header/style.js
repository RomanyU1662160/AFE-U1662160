import styled from 'styled-components'; 


export const Wrapper= styled.div `
display: flex; 
align-items:center; 
jusitfy-content:center;
` 

export const StyledHeader = styled.div ` 
width:100%;
background-color: ${ props => props.theme.background_color ? props.theme.background_color  : "#336699" } ; 
padding:5%;
flex: 1 1 100%; 
border:solid 1px red;
flex-flow: row wrap;
`

