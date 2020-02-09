import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import TabGroup from "../../baseComponents/tabs/TabGroup";
import { StyledRightSideMedia, StyledLeftSideMedia, Wrapper } from "./style";

import { fetchTeamStatistics } from "../../../helpers/fetchTeamStatics";
import PieChart from "../../charts/PieChart";

import LineChart from "../../charts/LineChart";

const TeamPage = props => {
  const { team, statistics } = useContext(SearchContext);
  const [goals, setGoals] = useState(statistics.goals);
  const [matches, setMatches] = useState(statistics.matches);

  useEffect(() => {
    setGoals(statistics.goals);
    setMatches(statistics.matches);
  });

  console.log("statistics in team page::", statistics);

  //const { goals, matches } = statistics;
  console.log("Matches in team page ::: ", matches);

  const matchesChartDataset = [
    matches.wins.total,
    matches.draws.total,
    matches.loses.total
  ];
  console.log(matchesChartDataset);

  const init = {
    labels: ["Wins", "Draws", "Loses"],
    datasets: [
      {
        label: "Matches ",
        backgroundColor: "rgb(144, 192, 243)",
        borderColor: "lightgray",
        data: matchesChartDataset
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
