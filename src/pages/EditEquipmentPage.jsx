import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/Edit.module.css';
import Menu from '../components/items/Menu';
import EditEquipmentForm from '../components/forms/EditEquipmentForm';

function EditEquipmentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { equipamento } = location.state || {};

  if (!equipamento) {
    return (
      <div>
        <h1>Erro</h1>
        <p>Nenhum equipamento foi selecionado para edição.</p>
        <button onClick={() => navigate('/EquipmentQueryPage')}>Voltar para a busca</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Menu />
      <main className={styles.mainContent}>
        <div className={styles.header}>
          <button onClick={() => navigate(-1)} className={styles.backButton}>
            &lt; VOLTAR
          </button>
          <h1>Editar dados do Equipamento</h1>
        </div>
        <EditEquipmentForm equipmentData={equipamento} />
      </main>
    </div>
  );
}

export default EditEquipmentPage;