import React from 'react';
import { useState, useEffect } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import { GlobalStyles } from './components/styles/Global.styled';


interface Team {
  displayName: string;
  logo: string;
}

interface ApiData {
  sports: {
    leagues: {
      teams: {
        team: {
          displayName: string;
          logos: { href: string }[];
        };
      }[];
    }[];
  }[];
}


const App: React.FC = () => {
  const [teams,  setTeams ] = useState<Team[]>([]);

  

  useEffect(() => {
  fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
    .then((res) => res.json())
    .then((data: ApiData) => {
      const formattedTeams = data.sports[0].leagues[0].teams.map((t) => ({
        displayName: t.team.displayName,
        logo: t.team.logos[0]?.href || '',
      }));
      setTeams(formattedTeams);
    });
}, []);

  const router = createHashRouter([
    {
      path: '/',
      element: <Layout teams={teams} />,
      children: [
        { index: true, element: <HomePage teams={teams} /> },
        { path: '/teams', element: <TeamsPage  teams={teams} onDataFetch={setTeams} /> },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default  App;