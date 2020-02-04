import React, { useState, useContext, useEffect } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import TabGroup from '../../baseComponents/tabs/TabGroup';
import TeamChart from '../../charts/TeamChart';
import TeamStaticsBtn from '../../baseComponents/Buttons/TeamStaticsBtn';
import fetchTeamStatics from '../../../helpers/fetchStatics';



const TeamPage = () => {
	const { team, setTeam} = useContext(SearchContext);
	// const [theTeam, setTheteam] = useState({})

	useEffect(() => {
		//... get team statics with teamId
		//set state of team within component
	}, [])

	useEffect(() => {
		const StorageTeam = localStorage.getItem('localStorageTeam');
		const localStorageTeam = JSON.parse(StorageTeam);

	} )
	
	const getStatics = async () => {
		try {
			const teamStatics = await fetchTeamStatics();
			console.log(teamStatics)
		} catch (error) {
			/// ... display an error message to user
		}
	};
	
	return (
	<>
	<h3 className="text-info text-center"> Welcome to {team.team.name}'s page  </h3>
     	<TeamStaticsBtn handleClick={getStatics} />
		<TeamChart />
		<TabGroup team={team} groupId={team.team.id} ></TabGroup>
	</>
	)

};

export default TeamPage;
