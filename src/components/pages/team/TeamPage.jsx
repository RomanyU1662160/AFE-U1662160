import React, { useState, useContext, useEffect } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import TabGroup from '../../baseComponents/tabs/TabGroup';
import TeamChart from '../../charts/TeamChart';
import TeamStaticsBtn from '../../baseComponents/Buttons/TeamStaticsBtn';



const TeamPage = () => {
	const { team, getTeamStatics, setTeam} = useContext(SearchContext);
	// const [theTeam, setTheteam] = useState({})
	

	useEffect(() => {
		const StorageTeam = localStorage.getItem('localStorageTeam');
		const localStorageTeam = JSON.parse(StorageTeam);

	} )
	
	
	return (
	<>
	<h3 className="text-info text-center"> Welcome to {team.team.name}'s page  </h3>
     	<TeamStaticsBtn   />
		
		<TabGroup team={team} groupId={team.team.id} ></TabGroup>
	</>
	)

};

export default TeamPage;
