





//export const ApiURL = "https://free-football-soccer-videos.p.rapidapi.com/"; 

// const mockData =  "../../MockTeams.json"

async function callApi()
{
	const ApiURL = "https://api-football-beta.p.rapidapi.com/teams?league=39&season=2019";
	try {
		const response = await fetch("../../MockTeams.json", {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "api-football-beta.p.rapidapi.com",
				// "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
				"x-rapidapi-key": "b42ff9aec1mshf038ebfe4dc2a03p1fb971jsn092088567d66"
			}
		})


		const data = await response.json();
		//  console.log((data));
		return data;

	} catch (e) {
		console.log(e)
	}
}
// callApi();

export default callApi;
