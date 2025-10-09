
import { useState } from "react";
import styles from "../styles/ManagePage.module.css";
import Menu from "../components/items/Menu";
import Copyright from "../components/items/Footer";

function ManagePage() {
  const [cpfInput, setCpfInput] = useState("");
  const [paciente, setPaciente] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const handleBuscarPaciente = async () => {
    if (cpfInput.length !== 11) {
      setMensagem("CPF inválido. Digite os 11 dígitos sem pontos ou traços.");
      return;
    }

    setLoading(true);
    setMensagem("");
    try {
      const response = await fetch(`http://localhost:3000/pacientes/${cpfInput}`);
      if (!response.ok) throw new Error("Paciente não encontrado.");
      const data = await response.json();
      setPaciente(data);
      setMensagem("Paciente encontrado!");
    } catch (error) {
      console.error(error);
      setPaciente(null);
      setMensagem("Erro ao buscar paciente. Verifique o CPF e tente novamente.");
    } finally {
      setLoading(false);
    }
  };


  const emitirPDF = async (e) => {
    e.preventDefault();
    if (!paciente) {
      setMensagem("Busque um paciente antes de emitir o formulário.");
      return;
    }

    setLoading(true);
    setMensagem("Gerando PDF...");

    try {
      const response = await fetch("http://localhost:3000/emissao_formulario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paciente_id: paciente.id,
        }),
      });

      if (!response.ok) {
        const errorJson = await response.json();
        throw new Error(errorJson?.error || "Erro ao emitir formulário.");
      }

      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "formulario.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      setMensagem("Formulário emitido com sucesso! O download foi iniciado.");
    } catch (error) {
      console.error(error);
      setMensagem(error.message || "Erro ao emitir formulário.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Menu />
      <main className={styles.Principal}>
        <h1 className={styles.titulo}>Emissão de Formulário por CPF</h1>

 
        <div className={styles.searchBox}>
          <input
            type="text"
            value={cpfInput}
            onChange={(e) => setCpfInput(e.target.value.replace(/\D/g, ""))}
            placeholder="Digite o CPF (somente números)"
            maxLength="11"
          />
          <button onClick={handleBuscarPaciente} disabled={loading}>
            {loading ? "Buscando..." : "Buscar"}
          </button>
        </div>

        {mensagem && <p className={styles.message}>{mensagem}</p>}

       
        {paciente && (
          <div className={styles.resultado}>
            <h2 className={styles.nomePaciente}>Paciente: {paciente.nome}</h2>

            <form onSubmit={emitirPDF} className={styles.form}>
              <input type="text" value={paciente.nome || ""} readOnly />
              <input type="text" value={paciente.cpf || ""} readOnly />
              <input type="text" value={paciente.unidadeSaude || ""} readOnly />

              <button
                type="submit"
                className={styles.emitirBtn}
                disabled={loading}
              >
                {loading ? "Emitindo..." : "Emitir PDF"}
              </button>
            </form>
          </div>
        )}
      </main>

      <div className={styles.fundo}>
        <Copyright />
      </div>
    </div>
  );
}

export default ManagePage;
