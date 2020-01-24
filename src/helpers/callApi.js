
import axios from 'axios';
// export const ApiURL = 'http://aviation-edge.com/v2/public/timetable?key=acb04d-fb6668&iataCode=JFK&type=departure';

export const ApiURL = 'https://opensky-network.org/api/flights/arrival?airport=EDDL&begin=1517227200&end=1517230800';


const mockUrl = '../flights.json';

async function callApi()
{
	try {
		const response = await fetch(mockUrl);

		const data = await response.json();

		return data;
	} catch (e) {
		console.log(e);
	}
}

// callApi();

export default callApi;
