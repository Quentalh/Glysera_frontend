import styles from "../styles/Main.module.css";
import Copyright from "../components/items/Footer";
import { FaUsers } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function MainPage(){
  return(
    <div className={styles.container}>
      <header></header>
        <main className={styles.card}>
         <section className="cards">
          <div className="card destaque">
            <h3>Última Medição</h3>
            <p className="valor">115 mg/dL</p>
            <span className="status normal">Normal</span>
          </div>

          <div className="card grafico">
            <h3>Histórico da Semana</h3>
            <div className="grafico-fake">📊 (gráfico aqui)</div>
          </div>

          <div className="card acoes">
            <button>➕ Registrar Medição</button>
            <button>📊 Ver Histórico</button>
            <button>⚙️ Configurações</button>
          </div>
        </section>
        </main>
        <div className={styles.container_cadastro}>
          <Link to="/RegisterPage" className={styles.link}>
            <button className={styles.cadastro_btn}><FaUsers className={styles.icon}/>Cadastro</button>
          </Link>
        </div>
        <div className={styles.container_consultas}>
          <Link to="/ManagePage" className={styles.link}>
            <button className={styles.consultas_btn}><FaSearch className={styles.icon}/>Consultas</button>
          </Link>
        </div>
        <div className={styles.container_gerenciamento}>
          <Link to="/QueryPage" className={styles.link}>
            <button className={styles.gerenciamento_btn}><FaFileAlt className={styles.icon}/>Gerenciamento</button>
          </Link>
        </div>
        <footer className={styles.mainfooter}>
          <Copyright />
        </footer>
    </div>
  );

}

export default MainPage;