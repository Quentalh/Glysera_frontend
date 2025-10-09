import styles from "../styles/ManagePage.module.css";
import Menu from "../components/items/Menu";
import Copyright from "../components/items/Footer";
import { useState } from "react";
import jsPDF from "jspdf";
import AtestadoTexto from "../components/AtestadoTexto/AtestadoTexto";

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
            const emitirPDF = () => {
        if (!paciente.nome) {
            alert("Busque um paciente antes de emitir o atestado.");
            return;
        }

        const doc = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
        });

        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("ATESTADO DE RECEBIMENTO", 105, 30, { align: "center" });

        
        const texto = AtestadoTexto({ paciente, cpf: cpfInput });

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        const lines = doc.splitTextToSize(texto, 170);
        doc.text(lines, 20, 50);

        doc.save(`Atestado_${paciente.nome}.pdf`);
        };

    return (
        <div className={styles.container}>
            <Menu />
            
            <main className={styles.Principal}>
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
                    <button
                className={styles.emitirBtn}
                onClick={emitirPDF}
                disabled={!paciente.nome}
                >
                Emitir Atestado (PDF)
            </button>
                </form>
            </main>
            <div className={styles.fundo}>
            <Copyright />
            </div>
        </div>
    );
}
export default ManagePage;
