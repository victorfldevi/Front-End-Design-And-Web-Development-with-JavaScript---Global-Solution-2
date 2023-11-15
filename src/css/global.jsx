import { createGlobalStyle } from 'styled-components';
//é uma função para aplicar estilos globais em toda a aplicação, sem as restrições de escopo
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Arial';
}

@media screen and (max-width: 1920px) {
    html{
        font-size: 16px;
    }
}

@media screen and (max-width: 1248px) {
    html{
        font-size: 14px;
    }
}

@media screen and (max-width: 1041px) {
    html{
        font-size: 13px;
    }
}

@media screen and (max-width: 929px) {
    html{
        font-size: 12px;
    }
}

`;
export default GlobalStyle;
