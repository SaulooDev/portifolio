import './App.css'
import Contato from './components/contato';
import Formacao from './components/formacao';
import Apresentacao from './components/sobre';
import Inicio from './components/inicio';

function App() {
    return(
        <div>
            <nav>
                <img id='logo' src="img/letra-m.svg" alt="logo"/>
                <ul class='menu'>
                    <a href="#ref-sobre"><li>Sobre</li></a>
                    <a href="#ref-form"><li>Formação</li></a>
                    <a href="#ref-contato"><li>Contato</li></a>
                </ul>
            </nav>

            <Inicio/>            

            <a id='ref-sobre'></a>
            <Apresentacao/>
            

            <a id='ref-form'></a>
            <Formacao/>
            

            <a id='ref-contato'></a>
            <Contato/>
        </div>
    )
}
export default App;