import { createGlobalStyle } from "styled-components"

export const colors = {
  primary: '#0B2470',
  secondary: '#376BF0',
  white: '#FBFCFF',
  red: '#DB4437',
  grey: '#f1f2f3',
  black: '#2C3333',
  disable: '#EAEAEA'
}

const theme = { colors }
export default theme


export const GlobalStyle = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  background-color: ${props => props.theme.colors.grey};
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
  height: 100%;
}

/*animated*/
.animated { 
  background-image: url(/css/images/logo.png); 
  background-repeat: no-repeat;
  background-position: left top; 
  padding-top:95px;
  margin-bottom:60px;
  -webkit-animation-duration: 1s;
  animation-duration: 1s; 
  -webkit-animation-fill-mode: both; 
  animation-fill-mode: both; 
}

@-webkit-keyframes bounce { 
  0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);} 
  40% {-webkit-transform: translateY(-30px);} 
  60% {-webkit-transform: translateY(-15px);} 
} 

@keyframes bounce { 
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
  40% {transform: translateY(-30px);} 
  60% {transform: translateY(-15px);} 
}

.bounce { 
  -webkit-animation-name: bounce; 
  animation-name: bounce; 
}

`