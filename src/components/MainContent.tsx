/* import React, { useState, useEffect } from 'react'; */
import NFLShield from '../assets/nfl.png';
import {StyledMainContent} from './styles/MainContent.styled';



export default function MainContent() {
  return (
    <StyledMainContent>
      <img src={NFLShield} alt="NFL Shield" width={160}/>
      <h1>NFL SCHEDULE<br />2025</h1>
    </StyledMainContent>
  );
}