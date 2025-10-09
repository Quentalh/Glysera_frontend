// src/pages/QueryPage.jsx
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ConsultasForm from "../components/forms/QueryForm";
import styles from "../styles/Query.module.css";
import Copyright from "../components/items/Footer";
import Menu from "../components/items/Menu";

function QueryPage() {
  const [searchStatus, setSearchStatus] = useState('idle');
  const [paciente, setPaciente] = useState(null);
  const [equipamentos, setEquipamentos] = useState([]); 
  const [message, setMessage] = useState('');

  const handleSearchResult = (result) => {
    setSearchStatus(result.status);
    if (result.status === 'found') {
      setPaciente(result.data.paciente);
      setEquipamentos(result.data.equipamentos || []); 
      setMessage('');
    } else {
      setPaciente(null);
      setEquipamentos([]);
      setMessage(result.message || 'Ocorreu um erro.');
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.containerheader}>
        <h1>Consulta de Pacientes</h1>
      </header>
      <Menu/>
      <main className={styles.containerform}>
        <ConsultasForm onSearchComplete={handleSearchResult} />

        {searchStatus === 'found' && paciente && (
          <div className={styles.actionsContainer}>
            <Link to="/EditPage" state={{ paciente: paciente }}>
              <button className={styles.editarButton}>EDITAR</button>
            </Link>
          </div>
        )}
        <div className={styles.resultsWrapper}>
          <div className={styles.resultsList}>
            <div className={styles.resultsHeader}>
              <span className={styles.column}>EQUIPAMENTO</span>
              <span className={styles.column}>NOME DO PACIENTE</span>
              <span className={styles.column}>DATA DE NASCIMENTO</span>
              <span className={styles.columnIcon}></span>
            </div>
            {searchStatus === 'found' && paciente && (
              <div className={styles.resultsRow}>
                <span className={styles.column}>
                  {equipamentos.length > 0 ? equipamentos[0].modelo : 'Nenhum'}
                </span>
                <span className={styles.column}>{paciente.nome}</span>
                <span className={styles.column}>
                  {new Date(paciente.nascimento_date).toLocaleDateString()}
                </span>
              </div>
            )}
          </div>
          <div className={styles.statusIcon}>
            {searchStatus === 'found' && <span>✅</span>}
            {(searchStatus === 'not_found' || searchStatus === 'error') && <span>❌</span>}
          </div>
        </div>
        {(searchStatus === 'not_found' || searchStatus === 'error') && (
            <p className={styles.errorMessage}>{message}</p>
        )}
      </main>
      <div className={styles.containerfooter}>
        <Copyright />
      </div>
    </div>
  );
}

export default QueryPage;