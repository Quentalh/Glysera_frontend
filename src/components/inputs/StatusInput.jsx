import styles from "../../styles/Register.module.css";

function StatusInput (){
    return(
      <select
        className={styles.cardStatus}
        type="texto">
        <option value="">Selecione o status</option>
        <option value="Ativo">Ativo</option>
        <option value="Inativo">Inativo</option>
        <option value="Suspenso">Suspenso</option>
      </select>
    );
}

export default StatusInput;