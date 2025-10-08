import styles from "../../styles/Register.module.css";

function StatusInput ({ name, value, onChange }){
    return(
      <select
        className={styles.cardStatus}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Selecione o status</option>
        <option value="Ativo">Ativo</option>
        <option value="Inativo">Inativo</option>
        <option value="Suspenso">Suspenso</option>
      </select>
    );
}

export default StatusInput;