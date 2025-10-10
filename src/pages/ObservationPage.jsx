// src/pages/ObservationPage.jsx
import { useState, useEffect } from "react";
import styles from "../styles/ObservationPage.module.css";
import Menu from "../components/items/Menu";
import ObservationForm from "../components/forms/ObservationForm";
import Copyright from "../components/items/Footer";

function ObsPage() {
    const [equipments, setEquipments] = useState([]);
    const [selectedEquipmentId, setSelectedEquipmentId] = useState('');

    useEffect(() => {
        const fetchEquipments = async () => {
            try {
                const response = await fetch('http://localhost:3000/equipamentos');
                const result = await response.json();
                if (response.ok) {
                    setEquipments(result.data);
                } else {
                    console.error("Erro ao carregar equipamentos.");
                }
            } catch (error) {
                console.error("Erro de conexão ao buscar equipamentos.");
            }
        };
        fetchEquipments();
    }, []);

    return (
        <div className={styles.container}>
            <header></header>
            <Menu />
            <main className={styles.obsform}>
                <h2>Adicionar Observação</h2>
                <div className={styles.fieldContainer}>
                    <label className={styles.label}>Selecione o Equipamento:</label>
                    <select
                        className={styles.inputField}
                        value={selectedEquipmentId}
                        onChange={(e) => setSelectedEquipmentId(e.target.value)}
                    >
                        <option value="">Selecione um equipamento</option>
                        {equipments.map((eq) => (
                            <option key={eq.id} value={eq.id}>
                                {eq.modelo} - (N/S: {eq.numero_de_serie})
                            </option>
                        ))}
                    </select>
                </div>

                {selectedEquipmentId ? (
                    <ObservationForm equipmentId={selectedEquipmentId} />
                ) : (
                    <p>Por favor, selecione um equipamento para adicionar uma observação.</p>
                )}
            </main>
            <footer className={styles.containerfooter}>
                <Copyright />
            </footer>
        </div>
    );
};

export default ObsPage;