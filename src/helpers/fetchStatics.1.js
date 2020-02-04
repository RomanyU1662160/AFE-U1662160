const fetchTeamStatics = () =>
{
    // const url = ` https://api-football-beta.p.rapidapi.com/statistics?season=2019&team=${id}&league=39`;
    try {
        fetch("../../MockStatics.json", {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
                'x-rapidapi-key': 'b42ff9aec1mshf038ebfe4dc2a03p1fb971jsn092088567d66'
            }
        }).then(function (res)
        {
            return res.json()
        }).then(function (data)
        {
            console.log(data);
            return data.response;

        }).catch((err) =>
        {
            console.log(err)
        });

        // const statics = await response.json();
        // console.log('statics in helpers:: ', statics.response);
        // return statics;
    } catch (e) {
        console.log(e);

    }


}

export default fetchTeamStatics; 