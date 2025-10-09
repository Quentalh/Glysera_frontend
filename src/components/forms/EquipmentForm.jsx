import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../../styles/Equipment.module.css";
import NumeroSerieField from "../fields/NumeroSerieField";
import ModeloField from "../fields/ModeloField";
import MarcaField from "../fields/MarcaField";
import StatusField from "../fields/StatusField";
import RegisterButton from '../buttons/RegisterButton';

function EquipmentForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        numero_de_serie: '',
        modelo: '',
        marca: '',
        status: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submissionData = {
            equipamento: {
                numero_de_serie: formData.numero_de_serie,
                marca: formData.marca,
                modelo: formData.modelo,
                data: new Date().toISOString().split('T')[0]
            }
        };

        const apiUrl = `http://localhost:3000/equipamentos`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Equipamento cadastrado com sucesso! Agora, adicione a observação inicial.');
                navigate('/ObservationPage', { state: { equipmentId: result.data.id } });
            } else {
                alert('Erro no cadastro: ' + (result.errors ? result.errors.join(', ') : 'Erro desconhecido'));
            }
        } catch (error) {
            alert('Erro de conexão. Verifique se o servidor Rails está rodando.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.containerform}>
            <NumeroSerieField name="numero_de_serie" value={formData.numero_de_serie} onChange={handleChange} />
            <MarcaField name="marca" value={formData.marca} onChange={handleChange} />
            <ModeloField name="modelo" value={formData.modelo} onChange={handleChange} />
            <StatusField name="status" value={formData.status} onChange={handleChange} />
            <div className={styles.containerbtn}>
              <RegisterButton />
            </div>
        </form>
    );
}

export default EquipmentForm;