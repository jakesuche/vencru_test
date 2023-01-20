import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter';
        // overflow-x: hidden;
    }

    body {
        ${'' /* background: ${({ theme }) => theme.bg2}; */}
        ${'' /* color: ${({ theme }) => theme.text}; */}
        font-family: 'Inter' ;
        letter-spacing: .6px;
    }


  

   @media (max-width: 657px) {
    h1{
       font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    }
    h2{
       font-size: clamp(1.1rem, 2.5vw, 2.5rem);
    }
   }
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}







`;
