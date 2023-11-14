import { useRef, useState, useEffect } from 'react';
import Conteudo from './Conteudo.jsx'
import '../css/login.css';

function Login() {
  /*hook useref ele retorna uma referencia a um elemento ou componente sem ter que ser renderizado novamente e também permite acesso ao DOM */
  const user = useRef();
  const password = useRef();
  /* pegando o usuario e adcionando ao sessionStorage */
  const getUser = sessionStorage.getItem('userData');
  /* pegando a senha e adcionando ao sessionStorage */
  const getSenha = sessionStorage.getItem('senhaData');
  /* pegando a senha e adcionando ao sessionStorage */
  const getEmail = sessionStorage.getItem('emailData');

    //useState
    const [dados, setDados]= useState([]);

  //promisse assincrona

  useEffect(() => {
      fetch('http://localhost:5000/dados')
      .then((res)=>{
          return res.json();
      })
      .then((res)=>{
          setDados(res);
      })
  },[]);

  /*função que verifica se o usuario e senha são validos e grava na sessão */
  const handleSubmit = (e) => {

    dados.map((data) => {
    if (user.current.value === data.nome && password.current.value === data.senha) {
      sessionStorage.setItem('userData', dados.map((data) => data.nome));
      sessionStorage.setItem('senhaData', dados.map((data) => data.senha));
      sessionStorage.setItem('emailData', dados.map((data) => data.email));

    } else {
      e.preventDefault();
      alert('usuário e senha inválidos !!!');
    }
    });
  };

  return (
    <>
    {getUser && getSenha && getEmail ? (
        <Conteudo />
      ) : (
    <section>
      <form className="grid-container" onSubmit={handleSubmit}>
        <div className="usuario">
          <p>Usuário</p>
          <input type="text" ref={user} placeholder={dados.map((data) => data.nome)}/>
          <p>{}</p>
        </div>
        <div className="senha">
          <p>Senha</p>
          <input type="password" ref={password} placeholder={dados.map((data) => data.senha)} />
        </div>
          <input className="botao" type="submit" value="Login >>" />
        </form>
    </section>
  )}
  </>
  );
}

export default Login