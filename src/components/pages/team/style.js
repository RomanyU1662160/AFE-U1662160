import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
`;

export const StyledRightSideMedia = styled.div`
  flex: 1;
  border: solid 1px darkgray;
  width: 100%;
  max-width: 100%;

  @media (max-width: 781px) {
    flex: 1 1 100%;
    color: "red";
  }
`;

export const StyledLeftSideMedia = styled.div`
  flex: 1;
  border: solid 1px darkgray;
  width: 100%;
  max-width: 100%;
  @media (max-width: 781px) {
    flex: 1 1 100%;
    order: -1;
    color: "yellow";
  }
`;
