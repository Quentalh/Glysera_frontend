import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/items/Menu';
import styles from '../styles/QuerySelection.module.css';
import Copyright from '../components/items/Footer';

function QuerySelectionPage() {
  return (
    <div className={styles.container}>
      <Menu />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Consultas</h1>
        <p className={styles.subtitle}>Selecione o tipo de consulta que deseja realizar.</p>
        <div className={styles.buttonContainer}>
          <Link to="/PatientQueryPage" className={styles.queryButton}>
            Consultar Pacientes
          </Link>
          <Link to="/EquipmentQueryPage" className={styles.queryButton}>
            Consultar Equipamentos
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <Copyright />
      </footer>
    </div>
  );
}

export default QuerySelectionPage;