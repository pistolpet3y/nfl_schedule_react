import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledSignup, SignInWindow, Wrapper, StyledHeader } from './styles/Header.styled';
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
  const [showSignIn, setShowSignIn] = useState(false);


  return (
    <Wrapper>
    <nav className="signup-nav">
      <StyledSignup onClick={() => setShowSignIn(!showSignIn)}>
       <a>Sign In</a>
      </StyledSignup>
    </nav>
    {showSignIn && (
      <SignInWindow>
          <h3>Sign In</h3>
          <form>
            <input type="text" id="username" name="username" required placeholder='username'/>
            <input type="password" id="password" name="password" required  placeholder='password'/>
            <button type="submit">Submit</button>
          </form>
          <p>Don't have an account? <a href="/">Sign up</a></p>
    </SignInWindow>
    )}
    </Wrapper>
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