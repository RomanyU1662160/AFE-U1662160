const fetchTeamStatistics = async id => {
  const url = `https://api-football-beta.p.rapidapi.com/teams/statistics?season=2019&team=${id}&league=39`;
  const response = await fetch(url, {
      		method: 'get',
      		headers: {
      			'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
      			'x-rapidapi-key': 'b42ff9aec1mshf038ebfe4dc2a03p1fb971jsn092088567d66'
      		}
      	});

  const data = await response.json();
  console.log(data);

  return data;
};
export default fetchTeamStatistics;
