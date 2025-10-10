import React, { useState } from 'react';
import styles from '../../styles/PatientQuery.module.css'

function ConsultasForm({ onSearchComplete }) {
  const [cpf, setCpf] = useState('');

  const handleSearch = async () => {
    if (!cpf) {
      onSearchComplete({ status: 'error', message: 'Por favor, digite um CPF.' });
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/pacientes/${cpf}`);
      const result = await response.json();

      if (response.ok) {
        onSearchComplete({ status: 'found', data: result.data });
      } else {
        onSearchComplete({ status: 'not_found', message: result.message });
      }
    } catch (err) {
      onSearchComplete({ status: 'error', message: 'Falha na comunicação com o servidor.' });
    }
  };

  return (
    <div className={styles.querysearch}>
      <label className={styles.labelqueryinput}>CPF</label>
      <input className={styles.queryinput}
        type="text"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="Digite o CPF do paciente"
      />
      <div className={styles.containerquerybtn}>
        <button onClick={handleSearch} className={styles.querybtn}>
          Pesquisar
        </button>
      </div>
    </div>
  );
}

export default ConsultasForm;