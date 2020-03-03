import React, {useContext, useEffect} from "react";
import {SearchContext} from "../../../contexts/SearchContext";
import Loader from "react-loader-spinner";
import TabGroup from "../../baseComponents/tabs/TabGroup";
import {StyledRightSideMedia, StyledLeftSideMedia, Wrapper} from "./style";

import PieChart from "../../charts/PieChart";
import LineChart from "../../charts/LineChart";
import BarChart from "../../charts/BarChart";

const TeamPage = props => {
  const {team, isLoading, statistics = {}} = useContext(SearchContext);
  const {goals, matches} = statistics;

  const matchesChartDataset = [
    matches?.wins?.total,
    matches?.draws?.total,
    matches?.loses?.total
  ];

  const goalsChartDataSet = [
    goals?.for?.total.total,
    goals?.for?.total.away,
    goals?.for?.total.home
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
      <h3 className='text-primary text-secondary' data-testid='teampagetitle'>
        Welcome to {team.team.name}'s page
      </h3>
      {isLoading ? (
        <Loader type='Oval' color='#00BFFF' height={100} width={100}></Loader>
      ) : (
        <>
          <Wrapper>
            <StyledRightSideMedia>
              {matches !== null ? (
                <PieChart
                  chartData={matchesData}
                  options={{maintainAspectRatio: false}}></PieChart>
              ) : (
                "Loading.."
              )}
            </StyledRightSideMedia>
            <StyledLeftSideMedia>
              {goals !== null ? (
                <BarChart
                  chartData={matchesData}
                  options={{maintainAspectRatio: false}}></BarChart>
              ) : (
                "..Loading"
              )}
            </StyledLeftSideMedia>
          </Wrapper>

          <TabGroup team={team} groupId={team.team.id}></TabGroup>
        </>
      )}
    </>
  );
};

export default TeamPage;
