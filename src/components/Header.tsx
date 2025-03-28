import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './styles/Header.styled';
import { StyledSignup } from './styles/Header.styled';
import NFLShieldBW from '../assets/nfl.shield.bw.png';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  color: blue;
  text-decoration: none;
  padding: 0.5rem 1rem;
    font-family: 'BebasFont', sans-serif;
    color: white;
    text-decoration: underline;
    font-size: 1.5rem;
  padding: 1rem;
  margin: 0;
  &.active {
    color: lightblue;
  }
`;

const Navbar: React.FC = () => {
  return (
    <nav className="main-nav">
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/teams">
        Teams
      </StyledNavLink>
      <StyledNavLink to="/contact">
        Contact
      </StyledNavLink>
    </nav>
  );
};

const SignUp: React.FC = () => {
  return (
    <nav className="signup-nav">
      <StyledSignup>
        Sign Up
      </StyledSignup>
      <StyledSignup>
        Login
      </StyledSignup>
    </nav>
  );
};


export default function Header() {
return (
<StyledHeader>
<div className="header">
<img src={NFLShieldBW} alt="NFL Shield" width={100}/>
<h2>NFL</h2>
</div>
<Navbar />
<SignUp />
</StyledHeader>
);
}