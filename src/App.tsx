import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import ContactPage from './pages/ContactPage';
import { GlobalStyles } from './components/styles/Global.styled';




const App: React.FC = () => {

  const router = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/teams', element: <TeamsPage  /> },
        { path: '/contact', element: <ContactPage /> },
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