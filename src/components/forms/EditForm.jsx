import React, { useState, useEffect } from 'react';
import styles from '../../styles/Edit.module.css';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../items/ConfirmationModal';
function EditForm({ pacienteData }) {
  const navigate = useNavigate();

  const [initialData] = useState({
    nome: pacienteData.nome || '',
    nome_social: pacienteData.nome_social || '',
    nome_mae: pacienteData.nome_mae || '',
    nascimento_date: pacienteData.nascimento_date ? new Date(pacienteData.nascimento_date).toISOString().split('T')[0] : '',
    sexo: pacienteData.sexo || '',
    cpf: pacienteData.cpf || '',
    cep: pacienteData.endereco?.cep || '',
    rua: pacienteData.endereco?.rua || '',
    bairro: pacienteData.endereco?.bairro || '',
    cidade: pacienteData.endereco?.cidade || '',
    estado: pacienteData.endereco?.estado || '',
    numero: pacienteData.endereco?.numero || '',
    complemento: pacienteData.endereco?.complemento || '',
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
      paciente: {
        nome: formData.nome,
        nome_social: formData.nome_social,
        nome_mae: formData.nome_mae,
        cpf: formData.cpf,
        nascimento_date: formData.nascimento_date,
        sexo: formData.sexo,
      },
      endereco: {
        cep: formData.cep,
        rua: formData.rua,
        bairro: formData.bairro,
        cidade: formData.cidade,
        estado: formData.estado,
        numero: formData.numero,
        complemento: formData.complemento,
      }
    };

    try {
      const response = await fetch(`http://localhost:3000/pacientes/${pacienteData.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Paciente atualizado com sucesso!');
        navigate('/QueryPage');
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
        {createField('NOME', 'nome')}
        {createField('ESTADO', 'estado')}
        {createField('NOME SOCIAL', 'nome_social')}
        {createField('CIDADE', 'cidade')}
        {createField('NOME MÃE', 'nome_mae')}
        {createField('NÚMERO', 'numero')}
        {createField('DATA NASCIMENTO', 'nascimento_date', 'date')}
        {createField('COMPLEMENTO', 'complemento')}
        {createField('SEXO', 'sexo')}
        {createField('CPF', 'cpf')}
        {createField('CEP', 'cep')}
        {createField('RUA', 'rua')}
        {createField('BAIRRO', 'bairro')}

        <button type="submit" className={styles.saveButton} disabled={!isChanged}>
          SALVAR ALTERAÇÕES
        </button>
        {message && <p className={styles.errorMessage}>{message}</p>}
      </form>
    </>
  );
}

export default EditForm;