import React, { useState } from 'react';
import styles from '../../styles/EquipmentQuery.module.css';

function EquipmentQueryForm({ onSearchComplete }) {
  const [serialNumber, setSerialNumber] = useState('');

  const handleSearch = async () => {
    if (!serialNumber) {
      onSearchComplete({ status: 'error', message: 'Por favor, digite um Número de Série.' });
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/equipamentos/${serialNumber}`);
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
    <div className={styles.formContainer}>
      <label>Nº de Série</label>
      <input
        className={styles.queryinput}
        type="text"
        value={serialNumber}
        onChange={(e) => setSerialNumber(e.target.value)}
        placeholder="Digite o Nº de Série do equipamento"
      />
      <button onClick={handleSearch} className={styles.querybtn}>
        Pesquisar
      </button>
    </div>
  );
}

export default EquipmentQueryForm;