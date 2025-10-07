import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/Edit.module.css';
import Menu from '../components/items/Menu';
import EditPacienteForm from '../components/forms/EditForm';

function EditPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { paciente } = location.state || {};

  if (!paciente) {
    return (
      <div>
        <h1>Erro</h1>
        <p>Nenhum paciente foi selecionado para edição.</p>
        <button onClick={() => navigate('/QueryPage')}>Voltar para a busca</button>
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
          <h1>Editar dados do Paciente</h1>
        </div>
        <EditPacienteForm pacienteData={paciente} />
      </main>
    </div>
  );
}

export default EditPage;