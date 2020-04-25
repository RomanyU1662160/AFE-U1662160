# Premier League Info

## About the application

The Premier League Info is a Single Page Application (SPA) developed by React.js. The application provides information about the teams playing in the Premier League (EPL). Users can use the filter search functionality to find a team and click on it to view the team’s page.

The Team’s page dynamically displays the team details. It displays the team’s logo and two charts illustrating the team’s statistics. The first chart is a line chart displaying the history of the teams’ goals. The data include the goals scored for and against the team. It also displays whether the goals have been scored in the team’s venue or away.

The second chart is a pie chart. It simply displays the statistics for the team’s matches, the data classified into wins, draws and losses, each section displayed in a different color. Users can interact with the charts by clicking on the labels to change the chart’s view.

Moreover, the Team’s page contains more information about the team, the coach and the team’s venue. The data retrieved from a JSON file contained a mock data. The displayed in a tab group to improve the users’ experience on small devices.

## Installation

All you need to do is to install the dependencies

`yarn install`

or

`npm install`

To run the tests

`yarn test`

or

`npm run test`

## Working with Football API

To make the the application utilize the Football_API and retrieve real data you need do the following steps :
1- uncomment the
`fetchTeamStatistics` in the `helpers/fetchTeamStatistics` directory
2- `getTeamStatistics` method in `contexts/SearchContext`
