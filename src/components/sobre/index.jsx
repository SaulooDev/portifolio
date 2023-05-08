import React from 'react';

export const Apresentacao = () => {
    return(
        <div>
            <section class='section-base sobre'>
                <section class='texto-borda'>
                    <p>&emsp; Olá mundo! Meu nome é <strong>Milena</strong> e sou aspirante em programação. Minha vontade e curiosidade me guiam para novas descobertas a todo momento.</p>
                    <p>&emsp; Meu interesse pela programação se deu em 2021 quando comecei um curso técnico de Análise e Desenvolvimento de Sistemas. Com o tempo já tinha facilidade com <strong>HTML5 e CSS3</strong>, então comecei a me aprofundar em <strong>JavaScrip e React</strong>.</p>
                    <p>&emsp; Meus objetivos são estudar cada vez mais para me tornar uma <strong>Desenvolvedora Full-Stack</strong>.</p>
                </section>
                <img src="img/foto-perfil-bolhas.svg" alt="foto de perfil" height='330px' />
            </section>
            <section class="seta">
                <a href="#ref-form"><img id='botao-sobre' src="img/seta-para-baixo.svg" alt="seta para baixo" /></a>
            </section>
        </div>
    )
}
export default Apresentacao;