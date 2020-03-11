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

export const TitleWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const TeamTitle = styled.h4`
  display: 3;
  color: #808a81;
  float: right;
`;

export const SmallTeamLogo = styled.img`
  width: 25%;
  padding: 5px;
  @media (max-width: 781px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  flex: 1;
  background: url(${props => (props.background ? props.background : "")});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: none;
  @media (max-width: 781px) {
    flex: 1 1 100%;
    order: -1;
    display: block;
  }
`;
