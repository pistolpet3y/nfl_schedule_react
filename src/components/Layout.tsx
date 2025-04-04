import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';
import BackgroundChanger from './BackgroundChanger';

interface Team {
  displayName: string;
  logo: string;
}

interface ApiData {
  sports: {
    leagues: {
      teams: {
        team: {
          displayName: string;
          logos: { href: string }[];
        };
      }[];
    }[];
  }[];
}


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainWrapper = styled.main`
  flex: 1;
`;

const Layout: React.FC = () => {
  const [teams,  setTeams ] = React.useState<Team[]>([]);
  

  React.useEffect(() => {
  fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
    .then((res) => res.json())
    .then((data: ApiData) => {
      const formattedTeams = data.sports[0].leagues[0].teams.map((t) => ({
        displayName: t.team.displayName,
        logo: t.team.logos[0]?.href || '',
      }));
      setTeams(formattedTeams)

    });
}, []);


  return (
    <PageWrapper>
      <Header />
      <Navbar teams={teams} />
      <MainWrapper>
        <Outlet context={teams} />
        <BackgroundChanger />
      </MainWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default Layout;
