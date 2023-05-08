import React from "react";

export const Contato = () => {
    return(
        <div>
            <section class='section-base contato'>
            <img src="img/bolhas-esquerda.svg" alt="bolhas" height='200px'/>
            <section class='texto-contato'>
                <h1 id='titulo-contato'>Entre em contato</h1>
                <p>No momento não estou procurando um estágio, mas caso queira me encontrar você pode mandar um e-mail para <strong>milenagarcia.dev@gmail.com</strong>.</p>
                <br/>   
                <section class="redes">
                    <a href="https://github.com/MilenaGarciaCosta" target="_blank"><img src="img/github-logo.svg" alt="github"/></a>
                    <a href="https://www.linkedin.com/in/milena-garcia-605931256/" target="_blank"><img src="img/linkedin-logo.svg" alt="linkedin"/></a>
                </section>
            </section>
            <img src="img/bolhas-direita.svg" alt="bolhas" height='200px'/>
            </section>
            <section class="seta">
                <a href="#logo"><img id='botao-volta' src="img/seta-para-cima.svg" alt="seta para baixo" /></a>
            </section>
        </div>
    )
}
export default Contato;