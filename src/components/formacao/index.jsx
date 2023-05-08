import React from "react";

export const Formacao = () => {
    return(
        <div>
            <section class='section-base forma'>
                <h1 class='titulo'>Formações</h1>
                <section class='formacao'>
                    <img src="img/capelo.svg" alt="bolhas" height='110px'/>
                    <section class='texto-borda variante-1'>
                        <p>2018-2023<br/><strong>&ensp;Curso de língua inglesa</strong><br/>&ensp;Excellent Global</p>
                        <p>2021-2023<br/><strong>&ensp;Curso técnico integrado com ensino médio - Análise e desenvolvimento de sistemas</strong><br/>&ensp;Etec Ermelinda Giannini Teixeira</p>
                        <p>03/08/2020-14/10/2020<br/><strong>&ensp;Informática básica</strong><br/>&ensp;SENAI</p>
                        <p>15 de agosto de 2022<br/><strong>&ensp;Responsividade com mobile-first</strong><br/>&ensp;Alura</p>
                    </section>
                    <img src="img/info.svg" alt="bolhas" height='110px'/>
                </section>
            </section>
            <section class="seta">
                <a href="#ref-contato"><img id='botao-formacao' src="img/seta-para-baixo.svg" alt="seta para baixo" /></a>
            </section>
        </div>
    )
}
export default Formacao;