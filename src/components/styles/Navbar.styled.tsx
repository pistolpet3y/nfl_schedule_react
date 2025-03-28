import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding-top: 5px;
  margin: 0 auto;
  background-color:rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  overflow-x: auto;
  width: 100%;
  min-height: 60px;
  backdrop-filter: blur(6px);

  span {
    color: white;
  }

.scroll-container {
  width: 90%;
  overflow-x: auto;
  white-space: nowrap;
  cursor: grab;
  margin: 0 auto;
  display: flex;
  align-items: center;
  user-select: none;
  scrollbar-width: thin;
  scrollbar-color:rgba(142, 197, 252, 0.78) rgba(0, 0, 0, 0.16);
}

.scroll-container::-webkit-scrollbar {
  height: 8px;
  background-color: rgba(0, 0, 0, 0.2);
}

.scroll-container::-webkit-scrollbar-thumb {
  background: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%) !important;
  border-radius: 100px;
}

.team-list {
  display: flex;
  align-items: center;
  margin: 0 auto;
}


`;
