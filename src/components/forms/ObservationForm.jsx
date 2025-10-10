// src/components/forms/ObservationForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../../styles/ObservationPage.module.css";
import ObservationTextField from "../fields/ObservationTextField";
import AttachmentField from "../fields/AttachmentField";
import SaveButton from '../buttons/SaveButton';

function ObsForm({ equipmentId }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    texto: '',
    arquivo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      arquivo: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = new FormData();
    submissionData.append('observacao[texto]', formData.texto);
    submissionData.append('observacao[equipamento_id]', equipmentId);
    if (formData.arquivo) {
      submissionData.append('observacao[arquivo]', formData.arquivo);
    }

    try {
      const response = await fetch('http://localhost:3000/observacoes', {
        method: 'POST',
        body: submissionData,
      });

      const result = await response.json();

      if (response.ok) {
        alert('Observação salva com sucesso!');
        navigate('/EquipmentPage');
      } else {
        alert('Erro ao salvar observação: ' + (result.errors ? result.errors.join(', ') : 'Erro desconhecido'));
      }
    } catch (error) {
      alert('Erro de conexão ao salvar observação.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <ObservationTextField name="texto" value={formData.texto} onChange={handleChange} />
      <AttachmentField name="arquivo" onChange={handleFileChange} />
      <SaveButton />
    </form>
  );
}

export default ObsForm;