import { useRef, useState, useEffect } from 'react';
import Conteudo from './Conteudo.jsx'
import '../css/login.css';

function Login() {
  /*hook useref ele retorna uma referencia a um elemento ou componente sem ter que ser renderizado novamente e também permite acesso ao DOM */
  const user = useRef();
  const password = useRef();
  
  const getUser = sessionStorage.getItem('userData');
  /* pegando a senha e adcionando ao sessionStorage */
  const getSenha = sessionStorage.getItem('senhaData');
  const getEmail = sessionStorage.getItem('emailData');

  //useState
  const [dados, setDados] = useState([]);
  const [feedbackUser, setFeedbackUser] = useState();
  const [feedbackSenha, setFeedbackSenha] = useState();

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
      setFeedbackUser("");
      setFeedbackSenha("");
      window.location.reload();

    } else {
      if (user.current.value != data.nome || user.current.value === ""){
        e.preventDefault();
        setFeedbackUser("* Não há usuários com esse login");
        if (user.current.value === ""){
          setFeedbackUser("* Este campo é obrigatório");
        }
      } else {
        e.preventDefault();
        setFeedbackUser("");
      }
      
      if (password.current.value != data.password || password.current.value === ""){
        e.preventDefault();
        setFeedbackSenha("* A senha não condiz com o login");
        if (password.current.value === ""){
          setFeedbackSenha("* Este campo é obrigatório");
        }
      }
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
          <p>{feedbackUser}</p>
        </div>
        <div className="senha">
          <p>Senha</p>
          <input type="password" ref={password} placeholder={dados.map((data) => data.senha)} />
          <p>{feedbackSenha}</p>
        </div>
          <input className="botao" type="submit" value="Login >>" />
        </form>
    </section>
  )}
  </>
  );
}

export default Login