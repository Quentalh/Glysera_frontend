// pages/QueryPage.jsx
import React, { useState } from "react";
import ConsultasForm from "../components/forms/QueryForm";
import styles from "../styles/Query.module.css";
import Copyright from "../components/items/Footer";
import Menu from "../components/items/Menu";

function QueryPage() {
  const [searchStatus, setSearchStatus] = useState('idle');
  const [paciente, setPaciente] = useState(null);
  const [equipamento, setEquipamento] = useState(null);
  const [message, setMessage] = useState('Nenhum paciente pesquisado.');

  const handleSearchResult = (result) => {
    setSearchStatus(result.status);
    if (result.status === 'found') {
      setPaciente(result.data.paciente);
      setEquipamento(result.data.equipamento);
      setMessage('');
    } else {
      setPaciente(null);
      setEquipamento(null);
      setMessage(result.message);
    }
  };

  return (
    <div className={styles.container}>
      <Menu/>
      <main className={styles.containerform}>
        <div className={styles.searchArea}>
          <ConsultasForm onSearchComplete={handleSearchResult} />
          <div className={styles.statusIcon}>
            {searchStatus === 'found' && <span style={{color: 'green', fontSize: '2rem'}}>✅</span>}
            {(searchStatus === 'not_found' || searchStatus === 'error') && <span style={{color: 'red', fontSize: '2rem'}}>❌</span>}
          </div>
        </div>

        {searchStatus === 'found' && paciente && (
          <div className={styles.resultsContainer}>
            <h2>Dados do Paciente</h2>
            <p><strong>Nome:</strong> {paciente.nome}</p>
            <p><strong>Data de Nascimento:</strong> {new Date(paciente.nascimento_date).toLocaleDateString()}</p>

            <h3 style={{marginTop: '20px'}}>Equipamento Associado</h3>
            {equipamento ? (
              <p>{equipamento.nome_do_equipamento || 'Equipamento sem nome'}</p>
            ) : (
              <p>Nenhum equipamento encontrado para este paciente.</p>
            )}
          </div>
        )}

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