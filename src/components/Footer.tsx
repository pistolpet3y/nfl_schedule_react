import { StyledFooter } from "./styles/Footer.styled";

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
    <StyledFooter>
      <div className="SocialMedia">
      <img src={images.facebook} alt="Facebook" />
      <img src={images.instagram} alt="Instagram" />
      <img src={images.twitter} alt="Twitter" />
      <img src={images.linkedin} alt="LinkedIn" />
      <img src={images.youTube} alt="YouTube"  />
      </div>
      <p>© 2025 Alex, Inc. All rights reserved.</p>
      <span className="BuiltWith">
      <p>Built with <img src={images.react} alt="react" width={30}/></p>
      </span>
    </StyledFooter>
  );
}
