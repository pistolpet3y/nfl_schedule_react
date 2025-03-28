import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

interface Team {
  displayName: string;
  logo: string;
}

interface Props {
  teams: Team[];
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainWrapper = styled.main`
  flex: 1;
`;

const Layout: React.FC<{ teams: Team[] }> = ({ teams }) => {
  return (
    <PageWrapper>
      <Header />
      <Navbar teams={teams} />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default Layout;
