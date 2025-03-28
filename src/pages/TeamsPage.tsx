import React from 'react';
import TeamsContent from '../components/TeamsContent'; 
import { Container } from '../components/styles/Container.styled';

interface Team {
  displayName: string;
  logo: string;
} 

 interface Props {
  teams: Team[];
  onDataFetch: (teams: Team[]) => void;
} 

const TeamsPage: React.FC<Props> = ({ teams: _teams, onDataFetch }) => {
  return (
    <Container>
      <TeamsContent onDataFetch={onDataFetch} />
    </Container>
  );
}; 

/* const TeamsPage: React.FC = () =>{
    return (
    <Container>
      { <TeamsContent onDataFetch={onDataFetch} /> }
    </Container>
  );
} */


export default TeamsPage;
