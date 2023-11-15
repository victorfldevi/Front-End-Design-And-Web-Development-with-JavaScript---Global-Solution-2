import quedaImg from '../assets/queda-idoso.jpg';
import engrenagemImg from '../assets/engrenagem.png'
import tesouraImg from '../assets/tesoura.png'
import hexagonosImg from '../assets/hexagonos.png'

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
                    <p>É um dispositivo IoT para ser colocado na parte superior de um sapato usando um velcro, feito para ser barato e funcionar de forma independente de seu usuário, dessa forma sendo muito acessível para qualquer usuário e permitindo pessoas com pouco conhecimento em tecnologia ou mesmo mobilidade reduzida a desfrutaren de seus beneficios.</p>
                </div>
                <hr />
                <div>
                    <h1>O que ela fará</h1>
                    <p>Este dispositivo tem como foco pessoas mais idosas, com dificuldades de locomoção e equilíbrio, e seu principal objetivo é detectar quedas, dessa forma caso a pessoa idosa caia e não consiga se mover para alcançar um botão ou celular, ou mesmo esteja inconsciente, o dispositivo acionará e pedirá ajuda automaticamente.</p>
                </div>
                <hr />
                <div>
                    <h1>Como funcionará</h1>
                    <p>É composto por um ESP32 para conexão com a internet, um giroscópio para captar rotação, um acelerômetro para verificar movimentos rapidos, e uma bateria para o manter ligado fora de uma tomada, e caso detecte movimentos rápidos e perceber que o giroscópio mudou de orientação, ele ligará um alarme desativável e em seguida, ligar para um parente ou ambulancia.</p>
                </div>
            </article>
            <div className='tituloPrincipal'>
                <h1>Auto Call</h1>
            </div>
            <article className='textoSolucao'>
                <div>
                    <h4>Um dispositivo IoT para pessoas idosas que, caso detecte que ocorreu uma queda, ligará automaticamente para um familiar responsável ou a ambulância para socorrer o idoso</h4>
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
                <img src={engrenagemImg} alt="Engrenagem" />
                <div>
                    <h1>01</h1>
                    <h2>Automático</h2>
                    <p>Acionará automaticamente quando necessário.</p>
                </div>
            </div>
            <div className='card2'>
                <img src={tesouraImg} alt="Tesoura cortando dinheiro" />
                <div>
                    <h1>02</h1>
                    <h2>Barato</h2>
                    <p>Um exemplar pode ser construido por 100 reais atualmente.</p>
                </div>
            </div>
            <div className='card3'>
                <img src={hexagonosImg} alt="Hexagonos Modulares" />
                <div>
                    <h1>03</h1>
                    <h2>Modular</h2>
                    <p>Funciona em qualquer sapato ou calçado.</p>
                </div>
            </div>
        </section>
    </>
    )
}

export default Conteudo