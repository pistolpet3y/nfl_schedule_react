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
  height: 85px;
  position: relative;
  z-index: 1;


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
  font-size: 1.5rem;
  padding: 1rem;
  cursor: pointer;
}
`;


export const Wrapper = styled.div`
  position: relative;
`;

export const SignInWindow = styled.div`
  position: absolute;
  top: 60px; 
  right: 0;
  width: 250px;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-bottom: 5px solid rgba(142, 197, 252, 0.8);
  border-radius: 2px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
  z-index: 100;
`;
