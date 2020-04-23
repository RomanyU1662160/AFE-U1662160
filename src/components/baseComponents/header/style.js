import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHeader = styled.div`
  width: 100%;
  background-color: ${props =>
    props.activeTheme.bg ? props.activeTheme.bg : "#336699"};
  color: ${props =>
    props.activeTheme.color ? props.activeTheme.color : "black"};
  padding: 3%;
  flex: 1 1 100%;
  flex-flow: row wrap;
`;
