import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex; 
flex-flow: column wrap;
background-color: ${props => props.theme.bg ? props.theme.bg : "lightgray"};
color:${props => props.theme.color ? props.theme.color : "white"};
justify-content:flex-start;
@media(max-width:750px){
display:none;
margin-top:-10%;
}
`
export const StyledToggleThemeButton = styled.button`
background-color: ${props => props.bg ? props.bg : props.theme.bg};
color:${props => props.color ? props.color : props.theme.color};
padding:1%;
border-radius:15px;
align-self:flex-end;
justify-content:center;
cursor:pointer; 
flex:auto;
`



