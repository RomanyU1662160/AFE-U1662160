export const fetchStatistics = async () => {
  const response = await fetch("../../MockStatics.json");
  const data = await response.json();
  console.log(data);
  return data;
};

//calling  the mock data

export const fetchTeamStatistics = async id => {
  const statistics = await fetchStatistics();

  const teamStatistics = statistics.filter(data => {
    return data.response.team.id === id;
  });
  // console.log("teamStatistics in helper function ::", teamStatistics);

  // console.log("teamStatistics in helpers :: ", teamStatistics);
  return teamStatistics;
};

// Uncomment this method to call the Football_API

// export const fetchTeamStatistics = async id => {
//   const url = `https://api-football-beta.p.rapidapi.com/teams/statistics?team=${id}&season=2019&league=39`;
//   const res = await fetch(url, {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
//       "x-rapidapi-key": "b42ff9aec1mshf038ebfe4dc2a03p1fb971jsn092088567d66"
//     }
//   });

//   console.log("res in Helper::", res);
//   const data = await res.json();
//   console.log("data in Helper::", data);
//   const teamStatistics = data.response;
//   console.log("teamStatistics in helpers :: ", teamStatistics);
//   return teamStatistics;
// };
