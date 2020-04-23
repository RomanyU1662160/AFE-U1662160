import React, { Fragment, useContext } from "react";

// import TabGroup from '../../baseComponents/tabs/TabGroup';
import { StyledHeader, Wrapper } from "./style";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Home = props => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <Fragment>
      <Wrapper>
        <StyledHeader className="header" activeTheme={theme}>
          <div className="logo-box">
            <img src="../../../ball.jpg" alt="logo" className="logo" />
          </div>
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main animateToDown">
                {" "}
                Premier League{" "}
              </span>
              <span className="heading-primary-sub animateToRight">
                is where life happens
              </span>
            </h1>
            <a href="/search" className="btn btn-white fading btn-toUp">
              Discover Teams Statistics
            </a>
          </div>
        </StyledHeader>
      </Wrapper>
    </Fragment>
  );
};

export default Home;
