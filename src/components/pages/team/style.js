import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 1%;
  align-items: center;
  justify-content: center;
`;

export const StyledRightSideMedia = styled.div`
  flex: 1;
  border: solid 1px darkgray;

  @media (max-width: 781px) {
    flex: 1 1 100%;
    order: 0;
    background-color: red;
  }
`;

export const StyledLeftSideMedia = styled.div`
  flex: 1;
  border: solid 1px darkgray;

  @media (max-width: 781px) {
    flex: 1 1 100%;
    order: -1;
    background-color: red;
  }
`;
