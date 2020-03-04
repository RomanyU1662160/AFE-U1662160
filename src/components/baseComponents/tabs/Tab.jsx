import React, {Fragment, useContext, useEffect} from "react";

import {InputItem, InputLabel, TabContent, LogoWrapper} from "./style";
import {ThemeContext} from "../../../contexts/ThemeContext";
import Img from "react-image";

const imgUrl = "https://media.api-football.com/teams/33.png";
export default function Tab(props) {
  const {type, name, id, label, content} = props;
  const {theme} = useContext(ThemeContext);

  return (
    <Fragment>
      <InputItem type={type} name={name} id={id} label={label} />
      <InputLabel
        theme={theme}
        htmlFor={id}
        onClick={() => showContent(id + "content")}>
        {label}
      </InputLabel>

      <TabContent id={id + "content"}>
        {Object.entries(content).map(([key, value]) => {
          return (
            <div className='row border-bottom' key={value}>
              <div className='col-6'>
                {key[0].toUpperCase() + key.slice(1)} :{" "}
              </div>
              {key !== "logo" ? (
                <div className='col-6'> {value}</div>
              ) : (
                <div className='col-6'>
                  <LogoWrapper background={value}> </LogoWrapper>
                  {/* <Img src={value}></Img> */}
                </div>
              )}
            </div>
          );
        })}
      </TabContent>
    </Fragment>
  );
}

const showContent = content => {
  const tabContent = document.querySelector(`#${content}`);
  hideOtherContents(`#${content}`);
  return (tabContent.style.display = "block");
};

const hideOtherContents = content => {
  const otherContents = [...document.querySelectorAll(TabContent)];
  otherContents.map(otherContent => {
    if (otherContent.id !== content) {
      return (otherContent.style.display = "none");
    }
    return (otherContent.style.display = "block");
  });
};
