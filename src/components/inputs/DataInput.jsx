import styles from "../../styles/Register.module.css";

function DataInput({ name, value, onChange }) {
  return (
    <input
      className={styles.cardData}
      type="date"
      placeholder="Digite a Data de Nascimento"
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default DataInput;