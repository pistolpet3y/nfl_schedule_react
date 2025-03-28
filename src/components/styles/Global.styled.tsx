import { createGlobalStyle } from 'styled-components';
import BebasFont from "../../assets/fonts/BebasNeue-Regular.ttf";
import background from '../../assets/background.jpg';

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

body {
  overflow-x: hidden; /* om du vill ta bort sidleds-scroll */
  scrollbar-width: thin;
  scrollbar-color: rgba(142, 197, 252, 0.78) rgba(0, 0, 0, 0.16);
}

/* Chrome-scrollbars */
body::-webkit-scrollbar {
  width: 8px;
}
body::-webkit-scrollbar-thumb {
  background-color: rgba(142, 197, 252, 0.78);
  border-radius: 4px;
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
}

.search-field input::placeholder {
  color:  rgba(255, 255, 255, 0.80);
}

`

;