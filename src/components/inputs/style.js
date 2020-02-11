import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex; 
flex-flow: column nowrap ;
background-color: ${props => props.bg ? props.bg : props.theme.bg};
color:${props => props.color ? props.color : props.theme.color};
justify-content: center;
align-items:center; 

};
`
export const StyledLi = styled.div` 
display: ${ props => props.display? props.display : 'none'}; 
background-color: ${props => props.bg ? props.bg : props.theme.bg};
color:${props => props.color ? props.color : props.theme.color};

`

