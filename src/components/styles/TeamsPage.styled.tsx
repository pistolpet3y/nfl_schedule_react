import styled from "styled-components";

export const StyledTeamsPage = styled.nav`
  margin: 0 auto;
  margin-top: 100px;
  height: 700px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 80%;
  background-color:rgba(39, 39, 39, 0.32);


  .scroll-container {
  cursor: grab;
  display: flex;
  height: 300px;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: #8EC5FC rgba(0, 0, 0, 0.2);
}
`