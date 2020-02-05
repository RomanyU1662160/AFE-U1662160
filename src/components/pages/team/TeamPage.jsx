import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import TabGroup from "../../baseComponents/tabs/TabGroup";
import TeamStaticsBtn from "../../baseComponents/Buttons/TeamStaticsBtn";
import fetchTeamStatistics from "../../../helpers/fetchStatics";
import PieChart from "../../charts/PieChart";
import { StyledRightSideMedia, StyledLeftSideMedia, Wrapper } from "./style";
import LineChart from "../../charts/LineChart";

const TeamPage = () => {
  const { team } = useContext(SearchContext);
  // const [theTeam, setTheteam] = useState({})

  useEffect(() => {
    const StorageTeam = localStorage.getItem("localStorageTeam");
    const localStorageTeam = JSON.parse(StorageTeam);
  });

  const init = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45]
      }
    ]
  };

  const handleTeamStatistics = async id => {
    const data = await fetchTeamStatistics(id);
    console.log("Total played matches ::", data.response.matches.played.total);
  };

  return (
    <>
      <Wrapper>
        <StyledRightSideMedia>
          {" "}
          <PieChart chartData={init} options={{ maintainAspectRatio: false }}>
            {" "}
          </PieChart>{" "}
        </StyledRightSideMedia>
        <StyledLeftSideMedia>
          {" "}
          <LineChart chartData={init} options={{ maintainAspectRatio: false }}>
            {" "}
          </LineChart>{" "}
        </StyledLeftSideMedia>
      </Wrapper>

      <TabGroup team={team} groupId={team.team.id}></TabGroup>
    </>
  );
};

export default TeamPage;
