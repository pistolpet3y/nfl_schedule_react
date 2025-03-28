import styled from "styled-components";


export const StyledTeamsPage = styled.nav`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  width: 80vw;

  img {
    width: 100px;
}

.teams-page{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 10px;
}

p{
line-height: 0.2rem;}

`