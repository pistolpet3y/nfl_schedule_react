import MainContent from '../components/MainContent';
import React from 'react';
/* import { GlobalStyles } from '../components/styles/Global.styled'; */

interface Team {
  displayName: string;
  logo: string;
}

interface Props {
  teams: Team[];
  onDataFetch: (teams: Team[]) => void;
}


const HomePage: React.FC<Props> = () => {

  return (
    <>
      <MainContent />
    </>
  );
};

export default HomePage;
