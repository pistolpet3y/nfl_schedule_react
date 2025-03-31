import styled from "styled-components";


export const StyledTeamsPage = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  width: 90vw;
  

img {
  height: 100px;
  width: 100px;
  border-radius: 20%;
  backdrop-filter: blur(5px);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.teams-page img:not(.arrow-icon){
  transition: transform 0.3s ease-in-out;
}

.teams-page img:not(.arrow-icon):hover{
  transform: scale(1.3);
}

/* .team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:rgba(0, 0, 0, 0.10);
  border-radius: 10%;
  padding-bottom: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
} */

.teams-page{
  background-color:rgba(0, 0, 0, 0.11);
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 50px;
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
  backdrop-filter: blur(5px);
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.88);
  border-top: 2px solid rgba(142, 197, 252, 0.62);
}

p{
  line-height: 0.2rem;}

`