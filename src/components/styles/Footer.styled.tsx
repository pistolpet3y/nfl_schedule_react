import styled from "styled-components";

export const StyledFooter  =styled.footer`
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