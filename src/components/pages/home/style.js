import styled from "styled-components";

export const Wrapper = styled.div``;

export const StyledHeader = styled.div`
  display: flex;
  flex: auto;
  flex-flow: row wrap;
  align-items: center;
  background-image: linear-gradient(
      20deg,
      hsl(${props => props.activeTheme.hue}, 00%, 70%),
      hsl(${props => props.activeTheme.hue - 305}, 0%, 20%)
    ),
    url("../home/pages/components/hero2.jpg");
  height: 95vh;
  max-width: 100%;
  background-position: top;
  background-size: cover;
`;
