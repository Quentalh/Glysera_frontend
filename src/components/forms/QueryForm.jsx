// components/forms/QueryForm.jsx
import React, { useState } from 'react';

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
    <div>
      <input
        type="text"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="Digite o CPF do paciente"
      />
      <button onClick={handleSearch} className="pesquisarButton">
        Pesquisar
      </button>
    </div>
  );
}

export default ConsultasForm;