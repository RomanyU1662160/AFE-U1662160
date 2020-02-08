import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import TabGroup from "../../baseComponents/tabs/TabGroup";
import { StyledRightSideMedia, StyledLeftSideMedia, Wrapper } from "./style";

import { fetchTeamStatistics } from "../../../helpers/fetchTeamStatics";
import PieChart from "../../charts/PieChart";

import LineChart from "../../charts/LineChart";

const TeamPage = props => {
  const { team } = useContext(SearchContext);
  const [statistics, setStatistics] = useState({});
  const [goals, setGoals] = useState({});
  const [matches, setMatches] = useState({});

  useEffect(() => {
    const doFetchStatistics = async () => {
      const teamStatistics = await fetchTeamStatistics(team.team.id);

      teamStatistics.length > 0
        ? setStatistics(teamStatistics[0].response)
        : setStatistics([]);
    };
    doFetchStatistics();
  }, []);

  console.log(statistics);

  // const { goals, matches } = statistics;

  // const matchesChartDataset = [
  //   matches.played.wins,
  //   matches.played.draws,
  //   matches.played.loses
  // ];

  console.log("Matches in team page ::: ", matches);
  console.log("Goals  in team page ::: ", goals);

  const init = {
    labels: ["Wins", "Draws", "Loses"],
    datasets: [
      {
        label: "Matches ",
        backgroundColor: "rgb(144, 192, 243)",
        borderColor: "lightgray",
        data: [9, 7, 8]
      }
    ]
  };

  return (
    <>
      <h3 className="text-primary text-secondary">
        Welcome to {team.team.name}'s page{" "}
      </h3>
      <Wrapper>
        <StyledRightSideMedia>
          <PieChart
            chartData={init}
            options={{ maintainAspectRatio: false }}
          ></PieChart>
        </StyledRightSideMedia>
        <StyledLeftSideMedia>
          <LineChart
            chartData={init}
            options={{ maintainAspectRatio: false }}
          ></LineChart>
        </StyledLeftSideMedia>
      </Wrapper>

      <TabGroup team={team} groupId={team.team.id}></TabGroup>
    </>
  );
};

export default TeamPage;
