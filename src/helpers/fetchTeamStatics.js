export const fetchStatistics = async () => {
  // const url = ` https://api-football-beta.p.rapidapi.com/statistics?season=2019&team=${id}&league=39`;

  const response = await fetch("../../MockStatics.json");

  const data = await response.json();
  console.log(data);

  return data;
};

export const fetchTeamStatistics = async id => {
  const statistics = await fetchStatistics();

  const teamStatistics = statistics.filter(data => {
    return data.response.team.id === id;
  });
  // console.log("teamStatistics in helper function ::", teamStatistics);

  // console.log("teamStatistics in helpers :: ", teamStatistics);
  return teamStatistics;
};
