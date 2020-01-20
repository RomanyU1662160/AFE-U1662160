import Axios from 'axios';

// export const ApiURL = 'http://aviation-edge.com/v2/public/timetable?key=acb04d-fb6668&iataCode=JFK&type=departure';
export const ApiURL = 'https://opensky-network.org/api/flights/arrival?airport=EDDL&begin=1517227200&end=1517230800';

async function callApi() {
	try {
		return await Axios.get(ApiURL);
	} catch (e) {
		console.log(e);
	}
}

const Flights = callApi();

export default Flights;
