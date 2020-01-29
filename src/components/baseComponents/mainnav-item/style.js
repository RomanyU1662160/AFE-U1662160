import styled from 'styled-components';

export const StyledNavItem = styled.div`

flex: auto;
color: ${props => props.theme.color};
content: ${props => props.title};
@media(max-width:750px){
flex: 1 1 100%;
border:none;
text-decoration:none 
`
