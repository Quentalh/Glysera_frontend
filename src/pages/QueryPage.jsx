import Menu from "../components/items/Menu";
import ConsultasForm from "../components/forms/QueryForm";
import styles from "../styles/Query.module.css";
import Copyright from "../components/items/Footer"

function QueryPage() {
  return (
    <div className={styles.container}>
      <header  className={styles.containerheader}>
        <h1>Consultas do Paciente</h1>
      </header>
      <Menu />
      <main className={styles.containerform}>
        <ConsultasForm />
        <div className={styles.consultasList}>
          <div className={styles.consultaItem}>
            <span>DATA</span>
            <span>ESPECIALIDADE</span>
            <span>MÉDICO</span>
            <button className={styles.editButton}>✏️</button>
          </div>
        </div>
      </main>
      <div className={styles.containerfooter}>
        <Copyright/>
      </div>
    </div>
  );
}

export default QueryPage;