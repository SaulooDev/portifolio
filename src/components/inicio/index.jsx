import React from "react";

export const Inicio = () =>{
    return(
        <div>
            <section class='section-centro'>
                <img src="img/bolhas-esquerda.svg" alt="bolhas" height='200px'/>
                <section class='texto-centro'>
                    <h3>Olá mundo! Eu me chamo</h3>
                    <h1>Milena Garcia</h1>
                    <h3>aspirante em desenvolvimento Front-end</h3>
                </section>
                <img src="img/bolhas-direita.svg" alt='bolhas' height='200px'/>
            </section>
            <section class="seta">
                <a href="#ref-sobre"><img id='botao-inicio' src="img/seta-para-baixo.svg" alt="seta para baixo" /></a>
            </section>
        </div>
    )
}

export default Inicio;