import './Consulta.css'
import { useState } from 'react';
import LogoNav from '../../assets/LogoNav.png'
function Consulta() {
    const [nome ,setNome] = useState('');
    const [nmr,setNmr] = useState('');
    const[nascimento,setNascimento] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for the menu
    const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);};

    return(
        <div className="Consulta">
            <nav>
                <div className="menu-botao">
                    <button onClick={toggleMenu} aria-label="Toggle menu" className="menu-btn">
                        <div className={`menu-line ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`menu-line ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`menu-line ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>
                    <img src={LogoNav} alt="Logo da barra" className="LogoNav"/>
                </div>
            </nav>
            <h1>CONSULTAR CADASTRO DE PACIENTES</h1>
            <div className="nome-p">
                <label htmlFor="nome-paciente">Nome do Paciente</label>
                <input type="text" placeholder="Digite o nome do paciente"id="nome-paciente" value={nome} onChange={(e) => setNome(e.target.value)}  />
            </div>
            <div className="numero-sus">
                <label htmlFor="numero-do-sus">Número do SUS</label>
                <input type="text" placeholder="Digite o número do SUS do paciente"id="numero-do-sus" value={nmr} onChange={(e) => setNmr(e.target.value)} />
            </div>
            <div className="data-nascimento">
                <label htmlFor="data-nascimento">Data de Nascimento</label>
                <input type="date" id="data-nascimento" value={nascimento} onChange={(e) => setNascimento(e.target.value)} />
            </div>
            <div className="botoes">
                <button>Pesquisar</button>
                <button>Detalhes</button>
            </div>
            <div className="box">
                <ul>
                    <li>SUS: {nmr}</li>
                    <li>Nome: {nome}</li>
                    <li>Data de Nascimento: {nascimento}</li>
                </ul>

            </div>
            <div
                className={`overlay ${isMenuOpen ? 'visible' : 'hidden'}`}
                onClick={toggleMenu}
            ></div>

            {/* Empty Slide menu */}
            <nav className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
                {/* Add menu items here */}
                <ul className="slide-menu-list">
                    <li><button>INICIO</button></li>
                    <li><button>CADASTROS</button></li>
                    <li><button>GERENCIAMENTO</button></li>
                    <li><button>CONSULTAS</button></li>
                </ul>
            </nav>
        </div>
    )
}
export default Consulta;