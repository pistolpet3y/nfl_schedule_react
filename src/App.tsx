import React from 'react';
import { useState } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import { GlobalStyles } from './components/styles/Global.styled';


interface Team {
  displayName: string;
  logo: string;
}


const App: React.FC = () => {
  const [teams, /* setTeams */] = useState<Team[]>([]);

  const router = createHashRouter([
    {
      path: '/',
      element: <Layout teams={teams} />,
      children: [
        { index: true, element: <HomePage teams={teams} /> },
        { path: '/teams', element: <TeamsPage /* teams={teams} onDataFetch={setTeams} */ /> },
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