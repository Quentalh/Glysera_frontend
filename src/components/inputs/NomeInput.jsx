import styles from "../../styles/Register.module.css";

function NomeInput({ name, value, onChange }) {
  return (
    <input
      className={styles.cardNome}
      type="text"
      placeholder="Digite seu Nome"
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default NomeInput;