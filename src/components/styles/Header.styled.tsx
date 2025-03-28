import styled from "styled-components";


export const StyledHeader  =styled.header`
  justify-content: space-between;
  background-color:rgba(83, 83, 83, 0.34);
  margin: 0 auto;
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  h2 { 
    font-family: 'BebasFont', sans-serif;
    color: white;
    font-size: 3rem;
    letter-spacing: 0.14rem;
    margin: 0; 
}
.header {
  display: flex; 
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
}

img {
  margin-left: 3rem;
}


nav {
  display: flex;
  flex-direction: row;
  padding-left: 2rem;
}

.main-nav {
  display: flex;
  flex-direction: row;
  width: 100%; 
  padding-left: 2rem;
  white-space: nowrap;
}

.signup-nav {
  display: flex;
  flex-direction: row;
  margin-left: auto;
  white-space: nowrap;
  padding-right: 2rem;
}


ul {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 2rem;
  margin: 0;
  }

 h3 {
  font-family: 'BebasFont', sans-serif; 
  color: white;
  font-size: 1.5rem;
  margin: 0;
} 

li {
  font-family: 'BebasFont', sans-serif; 
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  margin: 0;
  list-style-type: none;
}
  a {
    font-family: 'BebasFont', sans-serif;
    color: white;
    text-decoration: underline;
  }
  a:hover {
    color: lightblue;
  }

`


export const StyledSignup = styled.div`
  color: white;
  text-decoration: underline;
  text-decoration: line-through crimson;
  font-size: 1.5rem;
  padding: 1rem;
`;