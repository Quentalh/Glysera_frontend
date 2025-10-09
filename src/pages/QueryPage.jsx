// src/pages/QueryPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ConsultasForm from "../components/forms/QueryForm";
import styles from "../styles/Query.module.css";
import Copyright from "../components/items/Footer";
import Menu from "../components/items/Menu";

function QueryPage() {
  const [allPatients, setAllPatients] = useState([]);
  const [displayPatients, setDisplayPatients] = useState([]);
  const [searchStatus, setSearchStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const fetchAllPatients = async () => {
    try {
      const response = await fetch('http://localhost:3000/pacientes');
      const result = await response.json();
      if (response.ok) {
        setAllPatients(result.data);
        setDisplayPatients(result.data);
        setSearchStatus('found');
      } else {
        setMessage('Erro ao carregar a lista de pacientes.');
        setSearchStatus('error');
      }
    } catch (error) {
      setMessage('Falha na comunicação com o servidor.');
      setSearchStatus('error');
    }
  };

  useEffect(() => {
    fetchAllPatients();
  }, []);

  const handleSearchResult = (result) => {
    setSearchStatus(result.status);
    if (result.status === 'found') {
      const patientData = result.data.paciente;
      patientData.equipamentos = result.data.equipamentos || [];
      setDisplayPatients([patientData]);
      setMessage('');
    } else {
      setDisplayPatients([]);
      setMessage(result.message || 'Ocorreu um erro.');
    }
  };

  const handleClearSearch = () => {
    setDisplayPatients(allPatients);
    setSearchStatus('found');
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <header className={styles.containerheader}>
        <h1>Consulta de Pacientes</h1>
      </header>
      <Menu/>
      <main className={styles.containerform}>
        <ConsultasForm onSearchComplete={handleSearchResult} />
        <button onClick={handleClearSearch} className={styles.clearButton}>
          Mostrar Todos
        </button>

        {displayPatients.length === 1 && (
          <div className={styles.actionsContainer}>
            <Link to="/EditPage" state={{ paciente: displayPatients[0] }}>
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
            </div>
            
            {displayPatients.length > 0 ? (
              displayPatients.map(paciente => (
                <div key={paciente.id} className={styles.resultsRow}>
                  <span className={styles.column}>
                    {paciente.equipamentos && paciente.equipamentos.length > 0 
                      ? paciente.equipamentos[0].modelo 
                      : 'Nenhum'}
                  </span>
                  <span className={styles.column}>{paciente.nome}</span>
                  <span className={styles.column}>
                    {new Date(paciente.nascimento_date).toLocaleDateString()}
                  </span>
                </div>
              ))
            ) : (
              <div className={styles.resultsRow}>
                <p>Nenhum paciente para exibir.</p>
              </div>
            )}
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