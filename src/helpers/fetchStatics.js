const fetchTeamStatics = async () => {
    // const url = ` https://api-football-beta.p.rapidapi.com/statistics?season=2019&team=${id}&league=39`;

    const response = await fetch("../../MockStatics.json", {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
            'x-rapidapi-key': 'b42ff9aec1mshf038ebfe4dc2a03p1fb971jsn092088567d66'
        }
    });

    if (response.ok === false) {
        throw new Error('request failed')
    }

    return await response.json();
}

export default fetchTeamStatics; 