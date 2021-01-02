import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
  }
  html, body, #root {
    height: 100%;
    overflow-x:hidden;
    background: var(--secondary);
    ::-webkit-scrollbar {
    width: 8px;
  }
  
    ::-webkit-scrollbar-thumb {
      background-color:var(--quinary);
      border-radius:4px;
    }
    ::-webkit-scrollbar-track {
      background-color:var(--secondary);
    }
  }
  select[readonly], input:read-only {
  background: var(--input-read-only); /*Simular campo inativo - Sugestão @GabrielRodrigues*/
  pointer-events: none;
  touch-action: none;
}
  *, button, input {
    border:0;
    outline:0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    position:relative;
  }
  
  :root {
    --primary: #36393f;
    --secondary:#1E1E2F;
    --tertiary: #BF15A6;
    --quaternary: #364f6b; 
    /* 1b263b */
    --quinary: #0AAA96;
    --senary: #828386;
   
   --backgroundChart: #27293D;
   --backgroundLoading: rgba(39, 41, 61, 0.6);
    --white: #fff;
    --gray: #8a8c90;
 
    --notification: #f84a4b;
    --chart: #00D6B4;
    --mention-detail: #f9a839;
    --mention-message: #A035A1;
 
    --link: #5d80d6;
    --border-white: rgba(255,255,255,0.7);
    --input-read-only: #cccc;
  }
`;