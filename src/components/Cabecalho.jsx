import { useEffect } from 'react';

import '../css/cabecalho.css';

function Cabecalho() {

  /* pegando o usuario e adcionando ao sessionStorage */
  const getUser = sessionStorage.getItem('userData');
  /* pegando o email e adcionando ao sessionStorage */
  const getEmail = sessionStorage.getItem('emailData');

  return (
    <>
      <header>
          <h1>AA</h1>
          <p>{getUser}</p>
          <p>{getEmail}</p>
          <p>Global Solution 2023 - Engenharia de Software</p>
      </header>
    </>
  )
}

export default Cabecalho