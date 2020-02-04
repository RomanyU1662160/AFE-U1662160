const fetchTeamStatistics = async id => {
  // const url = ` https://api-football-beta.p.rapidapi.com/statistics?season=2019&team=${id}&league=39`;

  const response = await fetch("../../MockStatics.json");

  const data = await response.json();
  console.log(data);

  return data;
};
export default fetchTeamStatistics;
