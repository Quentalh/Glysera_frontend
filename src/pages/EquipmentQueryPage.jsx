// src/pages/EquipmentQueryPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../components/items/Menu';
import styles from '../styles/EquipmentQuery.module.css';
import Copyright from '../components/items/Footer';
import EquipmentQueryForm from '../components/forms/EquipmentQueryForm';
import ConfirmationModal from '../components/items/ConfirmationModal';

function EquipmentQueryPage() {
    const navigate = useNavigate();
    const [allEquipments, setAllEquipments] = useState([]);
    const [displayEquipments, setDisplayEquipments] = useState([]);
    const [searchStatus, setSearchStatus] = useState('idle');
    const [message, setMessage] = useState('');
    const [equipmentToDelete, setEquipmentToDelete] = useState(null);

    const fetchAllEquipments = async () => {
        try {
            const response = await fetch('http://localhost:3000/equipamentos');
            const result = await response.json();
            if (response.ok) {
                setAllEquipments(result.data);
                setDisplayEquipments(result.data);
                setSearchStatus('found');
            } else {
                setMessage('Erro ao carregar a lista de equipamentos.');
                setSearchStatus('error');
            }
        } catch (error) {
            setMessage('Falha na comunicação com o servidor.');
            setSearchStatus('error');
        }
    };

    useEffect(() => {
        fetchAllEquipments();
    }, []);
    
    const handleSearchResult = (result) => {
        setSearchStatus(result.status);
        if (result.status === 'found') {
            setDisplayEquipments([result.data]);
            setMessage('');
        } else {
            setDisplayEquipments([]);
            setMessage(result.message || 'Ocorreu um erro.');
        }
    };

    const handleClearSearch = () => {
        setDisplayEquipments(allEquipments);
        setSearchStatus('found');
        setMessage('');
    };

    const handleDeleteClick = (equipment) => {
        setEquipmentToDelete(equipment);
    };

    const confirmDelete = async () => {
        if (!equipmentToDelete) return;

        try {
            const response = await fetch(`http://localhost:3000/equipamentos/${equipmentToDelete.id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Equipamento removido com sucesso!');
                setEquipmentToDelete(null);
                fetchAllEquipments();
            } else {
                alert('Erro ao remover o equipamento.');
            }
        } catch (error) {
            alert('Falha na comunicação com o servidor.');
        }
    };

    const cancelDelete = () => {
        setEquipmentToDelete(null);
    };

    return (
        <div className={styles.container}>
            {equipmentToDelete && (
                <ConfirmationModal
                    message={`Tem certeza que deseja remover o equipamento ${equipmentToDelete.modelo}?`}
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                    confirmButtonClass="btnConfirmDelete"
                />
            )}
            <Menu />
            <main className={styles.mainContent}>
                <div className={styles.header}>
                    <button onClick={() => navigate('/QueryPage')} className={styles.backButton}>
                        &lt; VOLTAR
                    </button>
                    <h1>Consulta de Equipamentos</h1>
                </div>
                <EquipmentQueryForm onSearchComplete={handleSearchResult} />
                <button onClick={handleClearSearch} className={styles.clearButton}>
                    Mostrar Todos
                </button>

                {displayEquipments.length === 1 && (
                    <div className={styles.actionsContainer}>
                        <Link to="/EditEquipmentPage" state={{ equipamento: displayEquipments[0] }}>
                            <button className={styles.editarButton}>EDITAR</button>
                        </Link>
                        <button onClick={() => handleDeleteClick(displayEquipments[0])} className={styles.removerButton}>
                            REMOVER
                        </button>
                    </div>
                )}
                
                <div className={styles.resultsWrapper}>
                    {displayEquipments.length > 0 ? (
                        displayEquipments.map(equip => (
                            <div key={equip.id} className={styles.equipmentCard}>
                                <div className={styles.details}>
                                    <p><strong>Marca:</strong> {equip.marca}</p>
                                    <p><strong>Modelo:</strong> {equip.modelo}</p>
                                    <p><strong>Nº de Série:</strong> {equip.numero_de_serie}</p>
                                </div>
                                <div className={styles.observations}>
                                    <h4>Observações</h4>
                                    {equip.observacoes && equip.observacoes.length > 0 ? (
                                        <ul>
                                            {equip.observacoes.map(obs => (
                                                <li key={obs.id}>{obs.texto}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>Nenhuma observação registrada.</p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Nenhum equipamento para exibir.</p>
                    )}
                </div>

                {(searchStatus === 'not_found' || searchStatus === 'error') && (
                    <p className={styles.errorMessage}>{message}</p>
                )}
            </main>
            <footer className={styles.footer}>
                <Copyright />
            </footer>
        </div>
    );
}

export default EquipmentQueryPage;