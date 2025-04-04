import React from 'react';
import { useOutletContext } from "react-router-dom";
import MainContent from '../components/MainContent';
import { StyledTeamsPage } from '../components/styles/TeamsPage.styled';

interface Team {
  displayName: string;
  logo: string;
}

const TeamsPage: React.FC = () => {
  const teams = useOutletContext<Team[]>();

  return (
    <>
      <MainContent />
      <StyledTeamsPage>
        <div className="teams-page">
          {teams.map((team) => (
            <div key={team.displayName} className="team-card">
              <img src={team.logo} alt={team.displayName} />
              <p>{team.displayName}</p>
            </div>
          ))}
        </div>
      </StyledTeamsPage>
    </>
  );
};

export default TeamsPage;
