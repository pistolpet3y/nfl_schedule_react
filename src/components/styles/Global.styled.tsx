import { createGlobalStyle } from 'styled-components';
import BebasFont from "../../assets/fonts/BebasNeue-Regular.ttf";
import background from '../../assets/background1.jpg';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: 'BebasFont', sans-serif;
  color: white;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 100vh;
  }

html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

@font-face {
    font-family: 'BebasFont';
    src: url(${BebasFont});
  }

.search-field{
  display: flex;
  position: relative;
  padding-top: 5px;
  padding-left: 100px;
  }

.search-field input {
  background-color: rgba(255, 255, 255, 0.13);
  border: solid 1px rgba(255, 255, 255, 0.29);
  border-radius: 3px;
  color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
}

.search-field input::placeholder {
  color:  rgba(255, 255, 255, 0.80);
}

`

;