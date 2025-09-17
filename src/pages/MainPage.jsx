import styles from "../styles/Main.module.css";
import Menu from "../components/items/Menu";

function MainPage(){
  return(
    <div className={styles.container}>
      <header></header>
      <Menu/>
        <main>
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
        <footer>
          <p className={styles.pragraph}>Todos os direitos reservados.</p>
        </footer>
    </div>
  );

}

export default MainPage;