import { useState, useEffect } from 'react';
import bg1 from '../assets/background1.jpg';
import bg2 from '../assets/background2.jpg';
import {StyledBgChanger} from './styles/BgChanger.styled';


export default function BackgroundChanger() {
  const [bgImage, setBgImage] = useState(bg1);

  const toggleBackground = () => {
    setBgImage(prevImage => prevImage === bg1 ? bg2 : bg1);
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgImage})`;
  }, [bgImage]);


return (
  <StyledBgChanger >
  <div>
      <button className="btn" onClick={toggleBackground}></button>
  </div>
  </StyledBgChanger>
);
}
