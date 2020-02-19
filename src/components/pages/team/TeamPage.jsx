import React, { useContext, useEffect } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import Loader from "react-loader-spinner";
import TabGroup from "../../baseComponents/tabs/TabGroup";
import { StyledRightSideMedia, StyledLeftSideMedia, Wrapper } from "./style";

import PieChart from "../../charts/PieChart";

import LineChart from "../../charts/LineChart";

const TeamPage = props => {
  const { team, isLoading, statistics = {} } = useContext(SearchContext);
  const { goals, matches } = statistics;

  const matchesChartDataset = [
    matches?.wins?.total,
    matches?.draws?.total,
    matches?.loses?.total
  ];

  const matchesData = {
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
      {isLoading ? (
        <Loader type="Oval" color="#00BFFF" height={100} width={100}></Loader>
      ) : (
        <>
          <Wrapper>
            <StyledRightSideMedia>
              <PieChart
                chartData={matchesData}
                options={{ maintainAspectRatio: false }}
              ></PieChart>
            </StyledRightSideMedia>
            <StyledLeftSideMedia>
              <LineChart
                chartData={matchesData}
                options={{ maintainAspectRatio: false }}
              ></LineChart>
            </StyledLeftSideMedia>
          </Wrapper>

          <TabGroup team={team} groupId={team.team.id}></TabGroup>
        </>
      )}
    </>
  );
};

export default TeamPage;
