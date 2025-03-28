import React from 'react';
import { StyledTeamsPage } from './styles/TeamsPage.styled';

interface Team {
  displayName: string;
  logo: string;
}

interface Props {
  teams: Team[];
}

const TeamsContent: React.FC<Props> = ({ teams }) => {
  return (
    <StyledTeamsPage>
    <div className="teams-page">
      {teams.map((team) => (
        <div key={team.displayName}>
          <img src={team.logo} alt={team.displayName}/>
          <p>{team.displayName}</p>
        </div>
      ))}
    </div>
    </StyledTeamsPage>
  );
};

export default TeamsContent;
