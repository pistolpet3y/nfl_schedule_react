import React from 'react';
import TeamsContent from '../components/TeamsContent'; 
import MainContent from '../components/MainContent';
import { StyledTeamsPage } from '../components/styles/TeamsPage.styled'; 


interface Team {
  displayName: string;
  logo: string;
} 

 interface Props {
  teams: Team[];
  onDataFetch: (teams: Team[]) => void;
} 

const TeamsPage: React.FC<Props> = ({ teams }) => {
  return (
    <>
      <MainContent />
      <StyledTeamsPage>
      <TeamsContent teams={teams} />
      </StyledTeamsPage>
    </>
  );
}; 


export default TeamsPage;
