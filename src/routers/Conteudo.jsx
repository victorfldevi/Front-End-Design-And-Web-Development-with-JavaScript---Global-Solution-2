import { useEffect } from 'react';
import Login from './Login.jsx';
import quedaImg from '../assets/queda-idoso.jpg';
import celularImg from '../assets/cellphone.png';
import '../css/conteudo.css';

function Conteudo() {

    function retornarLogin() {
        sessionStorage.clear();
        window.location.reload(false);
    };

    return (
    <>
        <section className='grid-container-top'>
            <article className='imagem'>
                <img src={quedaImg} alt="Idoso no chão" />
            </article>
            <article className='textoCanto'>
                <div>
                    <h1>O que é a nossa solução</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ea vitae laborum, quaerat commodi aut neque quis itaque eum magnam. Molestiae dolores, corporis ratione rerum quia amet laudantium provident cumque magnam delectus dicta exercitationem magni beatae perspiciatis ad error dignissimos nisi fuga, recusandae voluptatibus cum. Quia cumque harum sapiente</p>
                </div>
                <hr />
                <div>
                    <h1>O que ela fará</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ea vitae laborum, quaerat commodi aut neque quis itaque eum magnam. Molestiae dolores, corporis ratione rerum quia amet laudantium provident cumque magnam delectus dicta exercitationem magni beatae perspiciatis ad error dignissimos nisi fuga, recusandae voluptatibus cum. Quia cumque harum sapiente</p>
                </div>
                <hr />
                <div>
                    <h1>Como funcionará</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ea vitae laborum, quaerat commodi aut neque quis itaque eum magnam. Molestiae dolores, corporis ratione rerum quia amet laudantium provident cumque magnam delectus dicta exercitationem magni beatae perspiciatis ad error dignissimos nisi fuga, recusandae voluptatibus cum. Quia cumque harum sapiente</p>
                </div>
            </article>
            <div className='tituloPrincipal'>
                <h1>Auto Call</h1>
            </div>
            <article className='textoSolucao'>
                <div>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere odio ratione itaque asperiores iusto corrupti quasi reiciendis iste debitis magni, reprehenderit deserunt recusandae provident! Deleniti sapiente sit corrupti facilis!</h4>
                </div>
            </article>
            <button className='botao'>Mais Informações</button>
        </section>
        <section className='grid-container-bottom'>
            <div className='tituloSecundario'>
                <h1>Vantagens</h1>
            </div>
            <div className='botaoLogout'>
                <button onClick={retornarLogin}><h2>Logout</h2></button>
            </div>
            <div className='card1'>
                <img src={celularImg} alt="Celular" />
                <div>
                    <h1>01</h1>
                    <h2>Lorem ipsum dolor</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut at vero voluptas iusto</p>
                </div>
            </div>
            <div className='card2'>
                <img src={celularImg} alt="Celular" />
                <div>
                    <h1>02</h1>
                    <h2>Lorem ipsum dolor</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut at vero voluptas iusto</p>
                </div>
            </div>
            <div className='card3'>
                <img src={celularImg} alt="Celular" />
                <div>
                    <h1>03</h1>
                    <h2>Lorem ipsum dolor</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut at vero voluptas iusto</p>
                </div>
            </div>
        </section>
    </>
    )
}

export default Conteudo