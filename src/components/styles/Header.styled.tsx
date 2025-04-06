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

.loginBtn{
  background-color: rgba(142, 197, 252, 0.8);
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
  width: 270px;
  padding: 1rem;
  padding-left: 2rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-bottom: 5px solid rgba(142, 197, 252, 0.8);
  border-radius: 2px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
  z-index: 100;



.button-24 {
  background:rgb(66, 186, 255);
  border: 1px solid rgba(219, 237, 255, 0.47);
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: flex;
  font-family: "BebasFont", sans-serif;
  letter-spacing: 0.14rem;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  min-height: 20px;
  outline: 0;
  padding: 3px 10px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  margin-top: 10px;
}

.button-24:hover,
.button-24:active {
  background-color: rgb(142, 197, 252);
  border: 1px solid rgb(219, 237, 255);
  background-position: 0 0;
  color: white;
}

.button-24:active {
  opacity: .5;
}

`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  zIndex: 1000;
`;


export const ModalWindow = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  min-width: 300px;
  color: white;


  .button-24 {
  background:rgb(66, 186, 255);
  border: 1px solid rgba(219, 237, 255, 0.47);
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-family: "BebasFont", sans-serif;
  letter-spacing: 0.14rem;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  min-height: 20px;
  outline: 0;
  padding: 3px 10px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  margin-top: 10px;
}

.button-24:hover,
.button-24:active {
  background-color: rgb(142, 197, 252);
  border: 1px solid rgb(219, 237, 255);
  background-position: 0 0;
  color: white;
}

.button-24:active {
  opacity: .5;
}
`;