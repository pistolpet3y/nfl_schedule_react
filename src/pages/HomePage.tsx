import React from 'react';
import MainContent from '../components/MainContent';
import { useOutletContext } from "react-router-dom";

interface Team {
  displayName: string;
  logo: string;
}

const HomePage: React.FC = () => {
  const teams = useOutletContext<Team[]>();
  //console loggar för att få bort felmeddelandet från typescript, teams ska användas senare.
  console.log(teams);

  return (
    <>
      <MainContent />
      
    </>
  );
};

export default HomePage;
