import React, { useState, useEffect } from 'react';
import styles from '../../styles/Edit.module.css';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../items/ConfirmationModal';

function EditEquipmentForm({ equipmentData }) {
  const navigate = useNavigate();

  const [initialData, setInitialData] = useState({
    marca: equipmentData.marca || '',
    modelo: equipmentData.modelo || '',
    numero_de_serie: equipmentData.numero_de_serie || '',
  });

  const [formData, setFormData] = useState(initialData);
  const [isChanged, setIsChanged] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const hasChanged = JSON.stringify(initialData) !== JSON.stringify(formData);
    setIsChanged(hasChanged);
  }, [formData, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    if (isChanged) {
      setShowConfirmModal(true);
    } else {
      alert("Nenhuma alteração foi feita.");
    }
  };

  const handleConfirmSave = async () => {
    setShowConfirmModal(false);
    setMessage('Salvando...');

    const submissionData = {
      equipamento: { ...formData }
    };

    try {
      const response = await fetch(`http://localhost:3000/equipamentos/${equipmentData.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Equipamento atualizado com sucesso!');
        navigate('/EquipmentQueryPage');
      } else {
        setMessage(`Erro: ${result.errors ? result.errors.join(', ') : 'Ocorreu um erro.'}`);
      }
    } catch (error) {
      setMessage('Erro de conexão. Verifique o servidor.');
    }
  };

  const handleCancelSave = () => {
    setShowConfirmModal(false);
  };
  
  const createField = (label, name, type = 'text') => (
    <div className={styles.formField}>
      <label>{label}:</label>
      <div className={styles.inputWrapper}>
        <input type={type} name={name} value={formData[name]} onChange={handleChange} />
        <span className={styles.editIcon}>✏️</span>
      </div>
    </div>
  );

  return (
    <>
      {showConfirmModal && (
        <ConfirmationModal
          message="Você tem certeza que deseja salvar as alterações?"
          onConfirm={handleConfirmSave}
          onCancel={handleCancelSave}
        />
      )}
      <form className={styles.formGrid} onSubmit={handleSaveClick}>
        {createField('MARCA', 'marca')}
        {createField('MODELO', 'modelo')}
        {createField('Nº DE SÉRIE', 'numero_de_serie')}
        
        <button type="submit" className={styles.saveButton} disabled={!isChanged}>
          SALVAR ALTERAÇÕES
        </button>
        {message && <p className={styles.errorMessage}>{message}</p>}
      </form>
    </>
  );
}

export default EditEquipmentForm;