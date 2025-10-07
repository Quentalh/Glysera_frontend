import styles from "../styles/ManagePage.module.css";
import Menu from "../components/items/Menu";
import Copyright from "../components/items/Footer";
import { useState } from "react";

function ManagePage() {
    const [cpfInput, setCpfInput] = useState(''); 
    const [paciente, setPaciente] = useState({
        nome: "", unidadeSaude: "", cep: "", rua: '',
        bairro: '', estado: '', cidade: '', numero: '',
        complemento: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleBuscarPaciente = async () => {
        if (cpfInput.length !== 11) {
            setError('CPF inválido. Digite os 11 dígitos.');
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://sua-api.com/pacientes/${cpfInput}`);
            
            if (!response.ok) {
                throw new Error('Sem resposta da rede');
            }

            const data = await response.json();
            setPaciente(data);

        } catch (err) {
            setPaciente({ 
                nome: '', unidadeSaude: '', cep: '', rua: '', 
                bairro: '', estado: '', cidade: '', numero: '', 
                complemento: '' 
            });
            setError('Paciente não encontrado ou erro na comunicação com o servidor.');
            console.error("Erro ao buscar paciente:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <Menu />
            
            <main className={styles.mainContent}>
                <h1 className={styles.titulo}>Busca de Paciente</h1>
                <div className={styles.searchBox}>
                    <input 
                        type="text"
                        value={cpfInput}
                        onChange={(e) => setCpfInput(e.target.value.replace(/\D/g, ''))}
                        placeholder="Digite o CPF (somente números)"
                        maxLength="11"
                    />
                    <button onClick={handleBuscarPaciente} disabled={loading}>
                        {loading ? 'Buscando...' : 'Buscar'}
                    </button>
                </div>

                {error && <p className={styles.error}>{error}</p>}

                <form>
                    <input type="text" value={paciente.nome} placeholder="Nome do Paciente" readOnly />
                    <input type="text" value={paciente.unidadeSaude} placeholder="Unidade de Saúde" readOnly />
                    {/* Formulário*/}
                </form>
            </main>

            <Copyright />
        </div>
    );
}
export default ManagePage;
