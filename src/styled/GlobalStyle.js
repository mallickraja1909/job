import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');
*{
    font-family: 'Spartan', sans-serif;
    box-sizing: border-box;

}

body{
    margin: 0;
    padding: 0;
    // background-color: hsl(180, 31%, 95%);
    background-color:cyan;
}

#search{
    padding: 10px 40px;
    border-radius: 10px;
    margin-bottom: 30px;
    border:none;
    background-color: hsl(180, 31%, 85%);
    font-size: 18px;
    position: sticky;
    top: 5%;
    z-index:1;
}

#search:focus{
   outline:none;
}

@media (max-width: 710px){
    #search{
       width: 100%;
     }

 }

`

export default GlobalStyle