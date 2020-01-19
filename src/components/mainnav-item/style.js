import styled from 'styled-components'; 

export const StyledNavItem = styled.div `

flex: auto;
border: solid 1px white;
color: ${props=>props.theme.color};
content: ${props=>props.title};
`
