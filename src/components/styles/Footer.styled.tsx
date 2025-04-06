import styled from "styled-components";


export const StyledFooter  =styled.footer`
position: relative;
text-align: center;
width: 100%;
background-color:rgba(0, 0, 0, 0.51);
backdrop-filter: blur(4px);
color: white;
text-align: center;
box-sizing: border-box;

.SocialMedia{
padding-top: 20px;
padding-bottom: 5px;
display: flex;
justify-content: center;
gap: 40px;
}

.BuiltWith{
justify-content: center;
align-items: center;
}

.BuiltWith img {
padding-left: 10px;
  vertical-align: middle;
}
.BuiltWith a {
text-decoration: none;
}

.arrow-wrapper {
  display: flex;
  align-items: center;
  position: absolute;
  top: -80px;
  left: -210px; 
  transition: left 0.5s ease-in-out;
}

.arrowText {
  font-family: 'Fredoka', cursive;
  position: absolute;
  top: -85px;
  left: -190px;
  font-size: 1.2rem;
  color:rgb(255, 255, 255);
  opacity: 10;
  margin-left: 10px; 
  transition: opacity 1.5s ease-in-out;
  transition-delay: 1.5s; 
  transform: rotate(-10deg);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);

  /* text-transform: uppercase; */
}

.arrow{
  position: absolute;
  top: -80px;
  left:  -55px;
  transform: translateX(-50%) rotate(-10deg);
  width: 100px;
  height: auto;
  transition: left 10.5s ease-in-out;
}

.bgChangerArrow{
  position: relative;
  display: inline-block;
  margin-top: -25px;
  padding-top: 20px;
}

@keyframes fadeText {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.arrowText {
  animation: fadeText 5s infinite ease-in-out;
}

.arrow{
animation: fadeText 5s infinite ease-in-out;
}



.SocialMedia img{
  width: auto;
  height: 40px;
}

.SocialMedia img:not(.arrow-icon){
  transition: transform 0.3s ease-in-out;
}

.SocialMedia img:not(.arrow-icon):hover{
  transform: scale(1.3);
}

p{
  line-height: .5rem;
  color: lightblue;
  font-size: 1.rem;
  margin-bottom: 2px;
}
`