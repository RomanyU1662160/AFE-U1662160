import Axios from 'axios';

// export const ApiURL = 'http://aviation-edge.com/v2/public/timetable?key=acb04d-fb6668&iataCode=JFK&type=departure';
// export const ApiURL = 'https://opensky-network.org/api/flights/arrival?airport=EDDL&begin=1517227200&end=1517230800';
export const ApiURL = '../../mock/flights.jsx';
async function callApi() {
	try {
		return await Axios.get(ApiURL).then((res) => console.log(res));
	} catch (e) {
		console.log(e);
	}
}
// callApi();
export default callApi;
