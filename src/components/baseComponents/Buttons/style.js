import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: ${props => (props.bg ? props.bg : props.theme.bg)};
  color: ${props => (props.color ? props.color : props.theme.color)};
  justify-content: flex-start;
`;
export const StyledToggleThemeButton = styled.button`
  background-color: ${props => (props.bg ? props.bg : props.theme.bg)};
  color: ${props => (props.color ? props.color : props.theme.color)};
  padding: 1%;
  border-radius: 15px;
  align-self: flex-end;
  justify-content: center;
  cursor: pointer;
  flex: auto;
  @media (max-width: 750px) {
    padding: 0px 2% 0px 2%;
  }
`;
export const StyledGetTeamStaticsButton = styled.button`
  background-color: ${props => (props.bg ? props.bg : props.theme.bg)};
  color: ${props => (props.color ? props.color : props.theme.color)};
  padding: 1%;
  border-radius: 15px;
  align-self: flex-end;
  justify-content: center;
  cursor: pointer;
  flex: auto;
`;
