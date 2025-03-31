import React from 'react';
/* import TeamsContent from '../components/TeamsContent';  */
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
        <div className="teams-page">
        {teams.map((team) => (
        <div key={team.displayName} className="team-card">
          <img src={team.logo} alt={team.displayName}/>
          <p>{team.displayName}</p>
        </div>
      ))}
    </div>
      </StyledTeamsPage>
    </>
  );
}; 


export default TeamsPage;
