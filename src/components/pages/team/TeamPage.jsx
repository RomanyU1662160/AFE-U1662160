import React, { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";

import Loader from "react-loader-spinner";
import TabGroup from "../../baseComponents/tabs/TabGroup";
import { StyledRightSideMedia, StyledLeftSideMedia, Wrapper } from "./style";

import PieChart from "../../charts/PieChart";
import BarChart from "../../charts/BarChart";
import Img from "react-image";

const TeamPage = props => {
  const { team, isLoading, statistics = {} } = useContext(SearchContext);
  const { goals, matches } = statistics;

  const matchesData = [
    matches?.wins?.total,
    matches?.draws?.total,
    matches?.loses?.total
  ];

  const goalsData_for = [
    goals?.for?.average.total,
    goals?.for?.total.away,
    goals?.for?.total.home
  ];

  const goalsData_against = [
    goals?.against?.total.total,
    goals?.against?.total.away,
    goals?.against?.total.home
  ];

  const goalsAvg_for = [
    goals?.for?.average.home,
    goals?.for?.average.away,
    goals?.for?.average.total
  ];
  const goalsAvg_against = [
    goals?.against?.average.home,
    goals?.against?.average.away,
    goals?.against?.average.total
  ];

  const matchesChartDataset = {
    labels: ["Wins", "Draws", "Loses"],
    datasets: [
      {
        label: "Matches ",
        backgroundColor: ["#98bd9e", "#f5dd96", "#fbca93"],
        borderColor: "lightgray",
        data: matchesData
      }
    ]
  };

  const goalsChartDataSet = {
    datasets: [
      {
        label: "For avg",
        type: "line",
        data: goalsAvg_for,
        fill: false,
        borderColor: "#90c0f3",
        backgroundColor: "#90c0f3",
        pointBorderColor: "#90c0f3",
        pointBackgroundColor: "#EC932F",
        pointHoverBackgroundColor: "#90c0f3",
        pointHoverBorderColor: "#90c0f3",
        yAxisID: "y-axis-2"
      },
      {
        label: "Against avg",
        type: "line",
        data: goalsAvg_against,
        fill: false,
        borderColor: "#6c757d",
        backgroundColor: "#6c757d",
        pointBorderColor: "#EC932F",
        pointBackgroundColor: "#EC932F",
        pointHoverBackgroundColor: "#6c757d",
        pointHoverBorderColor: "#6c757d",
        yAxisID: "y-axis-3"
      },
      {
        type: "bar",
        label: "For",
        data: goalsData_for,
        fill: false,
        backgroundColor: "#98bd9e",
        borderColor: "#98bd9e",
        hoverBackgroundColor: "#98bd9e",
        hoverBorderColor: "#98bd9e",
        yAxisID: "y-axis-1"
      },
      {
        type: "bar",
        label: "Against",
        data: goalsData_against,
        fill: false,
        backgroundColor: "#f5dd96",
        borderColor: "#98bd9e",
        hoverBackgroundColor: "#f5dd96",
        hoverBorderColor: "#f5dd96",
        yAxisID: "y-axis-1"
      }
    ]
  };

  return (
    <>
      {/* <Img src={team.team.logo}></Img> */}
      {/* <Logo background={team.team.logo}> </Logo> */}

      <div className="media">
        <div className="media-body"></div>
        <div className="media-body"></div>
      </div>

      <div className="row ">
        <div className="col">
          <Img src={team.team.logo} className="align-self-center"></Img>
          <h4
            className="text-center text-secondary"
            data-testid="teampagetitle">
            Welcome to {team.team.name}'s page
          </h4>
        </div>
      </div>

      {isLoading ? (
        <Loader type="Oval" color="#00BFFF" height={100} width={100}></Loader>
      ) : (
        <>
          <Wrapper>
            <StyledRightSideMedia>
              {matches !== null ? (
                <PieChart
                  chartData={matchesChartDataset}
                  options={{ maintainAspectRatio: false }}></PieChart>
              ) : (
                "Loading.."
              )}
            </StyledRightSideMedia>

            <StyledLeftSideMedia>
              {goals !== null ? (
                <BarChart
                  chartData={goalsChartDataSet}
                  options={{ maintainAspectRatio: false }}></BarChart>
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
