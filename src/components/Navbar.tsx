import React, { useMemo } from 'react';
import { StyledNavbar } from './styles/Navbar.styled';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'
import { useState } from 'react';

interface Team {
  displayName: string;
  logo: string;
}

interface Props {
  teams: Team[];
}



const Navbar: React.FC<Props> = ({teams}) => {

const [searchTerm, setSearchTerm] = useState(''); 

const filteredTeams = useMemo(() => {
  return teams.filter((team) => {
  return team.displayName.toLowerCase().includes(searchTerm.toLowerCase());
  });
}, [teams, searchTerm]);

  return (
    <>
    <StyledNavbar>
      <ScrollContainer   className="scroll-container">
      <div className="team-list">
{filteredTeams.map((team, i) => (
  <div
    key={i}
    className="team"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '100px',
      margin: '0 8px',
      color: 'white',
    }}
  >
    <img src={team.logo} alt={team.displayName} width="30" />
    <span style={{ fontSize: '14px', marginTop: '4px', textAlign: 'center' }}>
      {team.displayName}
    </span>
  </div>
))}
      </div>
      </ScrollContainer>
    </StyledNavbar>
        <div className='search-field'>
        <input type="text" placeholder='search' onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
      </>
  );
};

export default Navbar;
