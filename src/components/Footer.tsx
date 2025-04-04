import { StyledFooter } from "./styles/Footer.styled";
import BackgroundChanger from "./BackgroundChanger";

const images = {
  facebook: new URL('../assets/f.png', import.meta.url).href,
  instagram: new URL('../assets/ig.png', import.meta.url).href,
  twitter: new URL('../assets/x.png', import.meta.url).href,
  linkedin: new URL('../assets/in.png', import.meta.url).href,
  youTube: new URL('../assets/yt.png', import.meta.url).href,
  react: new URL('../assets/react.png', import.meta.url).href,
};


export default function Footer() {
  return (
    <>
    <StyledFooter>
      <BackgroundChanger />
      <div className="SocialMedia">
      <a href="https://www.facebook.com/alex.tarverdi" target="_blank"><img src={images.facebook} alt="Facebook" /></a>
      <a href="https://www.instagram.com/pistolpet3y/" target="_blank"><img src={images.instagram} alt="Instagram" /></a>
      <a href="https://x.com/NFL" target="_blank"><img src={images.twitter} alt="Twitter" /></a>
      <a href="https://www.linkedin.com/in/alex-tarverdi/" target="_blank"><img src={images.linkedin} alt="LinkedIn" /></a>
      <a href="https://www.youtube.com/@NFL" target="_blank"><img src={images.youTube} alt="YouTube"  /></a>
      </div>
      <p>© 2025 Alex, Inc. All rights reserved.</p>
      <span className="BuiltWith">
      <a href="https://react.dev/" target="_blank"><p>Built with <img src={images.react} alt="react" width={30}/></p></a>
      </span>
    </StyledFooter>
    </>
  );
}
