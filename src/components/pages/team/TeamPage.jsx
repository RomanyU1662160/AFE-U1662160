import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import TabGroup from "../../baseComponents/tabs/TabGroup";
import TeamStaticsBtn from "../../baseComponents/Buttons/TeamStaticsBtn";
import fetchTeamStatistics from "../../../helpers/fetchStatics";
import PieChart from "../../charts/PieChart";
import { StyledRightSideMedia, StyledLeftSideMedia, Wrapper } from "./style";
import LineChart from "../../charts/LineChart";

const data = {
  labels: ["wins", "loses", "draws"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: []
    }
  ]
};

const TeamPage = () => {
  const { team, getTeamStatics  } = useContext(SearchContext);
  const [statics, setStatics] = useState(); 
  const [chartData, setChartData] = useState();
  

  useEffect(() => {
    const StorageTeam = localStorage.getItem("localStorageTeam");
    const localStorageTeam = JSON.parse(StorageTeam);
    (async () => {
      const result = await getTeamStatics(team.team.id);
      setStatics(result);
      
      const { wins, draws, loses } = result.matches;

      data.datasets[0].data = [
        wins.total, draws.total, loses.total
      ];

     setChartData(data);
    })();
  }, []);

  const handleTeamStatistics = async id => {
    const data = await fetchTeamStatistics(id);
    console.log("Total played matches ::", data.response.matches.played.total);
  };

  return ( team &&
    <>
      <h3 className="text-primary text-secondary">
        {" "}
        Welcome to {team.team.name}'s page{" "}
      </h3>
      { chartData ?
      <Wrapper>
        <StyledRightSideMedia>
          {" "}
          <PieChart chartData={chartData} options={{ maintainAspectRatio: false }}>
            {" "}
          </PieChart>{" "}
        </StyledRightSideMedia>
        <StyledLeftSideMedia>
          {" "}
          <LineChart chartData={chartData} options={{ maintainAspectRatio: false }}>
            {" "}
          </LineChart>{" "}
        </StyledLeftSideMedia>
      </Wrapper> : "Loading"}
      <TabGroup team={team} groupId={team.team.id}></TabGroup>
    </>
  );
};

export default TeamPage;
