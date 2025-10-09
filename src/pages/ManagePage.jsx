// src/pages/ManagePage.jsx
import React, { useState, useEffect } from 'react';
import Menu from '../components/items/Menu';
import styles from '../styles/Manage.module.css';

function ManagePage() {
  const [pacientes, setPacientes] = useState([]);
  const [equipamentos, setEquipamentos] = useState([]);
  const [selectedPacienteId, setSelectedPacienteId] = useState('');
  const [selectedEquipamentoId, setSelectedEquipamentoId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch Pacientes
    fetch('http://localhost:3000/pacientes')
      .then(res => res.json())
      .then(data => setPacientes(data.data))
      .catch(() => setMessage('Erro ao carregar pacientes.'));

    // Fetch Equipamentos
    fetch('http://localhost:3000/equipamentos')
      .then(res => res.json())
      .then(data => setEquipamentos(data.data))
      .catch(() => setMessage('Erro ao carregar equipamentos.'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('Gerando formulário...');

    try {
      const response = await fetch('http://localhost:3000/emissao_formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paciente_id: selectedPacienteId,
          equipamento_id: selectedEquipamentoId,
        }),
      });

      if (response.ok) {
        setMessage('Formulário gerado com sucesso! O download iniciará em breve.');

        // Handle the file download
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        const disposition = response.headers.get('Content-Disposition');
        let filename = 'formulario.pdf';
        if (disposition && disposition.indexOf('attachment') !== -1) {
          const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
          const matches = filenameRegex.exec(disposition);
          if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
          }
        }
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

      } else {
        const errorData = await response.json();
        setMessage(`Erro: ${errorData.error || 'Não foi possível gerar o formulário.'}`);
      }
    } catch (error) {
      setMessage('Erro de conexão com o servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  const isButtonDisabled = !selectedPacienteId || !selectedEquipamentoId || isLoading;

  return (
    <div className={styles.container}>
      <Menu />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Emissão de formulário</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.dropdownContainer}>
            <label htmlFor="paciente" className={styles.label}>Paciente</label>
            <select
              id="paciente"
              className={styles.select}
              value={selectedPacienteId}
              onChange={(e) => setSelectedPacienteId(e.target.value)}
            >
              <option value="">Selecione o CPF do Paciente</option>
              {pacientes.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.cpf} ({p.nome})
                </option>
              ))}
            </select>
          </div>

          <div className={styles.dropdownContainer}>
            <label htmlFor="equipamento" className={styles.label}>Glicosímetro</label>
            <select
              id="equipamento"
              className={styles.select}
              value={selectedEquipamentoId}
              onChange={(e) => setSelectedEquipamentoId(e.target.value)}
            >
              <option value="">Selecione o N° de Série</option>
              {equipamentos.map((eq) => (
                <option key={eq.id} value={eq.id}>
                  {eq.numero_de_serie} ({eq.modelo})
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className={styles.emitirButton} disabled={isButtonDisabled}>
            {isLoading ? 'EMITINDO...' : 'EMITIR'}
          </button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </main>
    </div>
  );
}

export default ManagePage;