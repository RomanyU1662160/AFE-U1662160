import React, { useState, useContext, useEffect } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import TabGroup from '../../baseComponents/tabs/TabGroup';


const TeamPage = () => {
	const { team } = useContext(SearchContext);
	// const [theTeam, setTheteam] = useState({})
	
	// useEffect( () => {
	// 	localStorage.setItem('team' , JSON.stringify(team))
	// 	const localTeam = localStorage.getItem(JSON.parse('team'))
	//     // localTeam ? setTheteam(localTeam): setTheteam(team);
	// 	console.log("theTeam::",  theTeam);
	// },[] )

	useEffect(() => {
		console.log(team);
		
	} )


	return(
	<>
	<h3 className="text-info text-center"> Welcome to {team.team.name}'s page  </h3>
		<TabGroup team={team} groupId={team.team.id} ></TabGroup>

	</>
	)

};

export default TeamPage;
