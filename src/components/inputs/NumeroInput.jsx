import styles from "../../styles/Register.module.css";

function NumeroInput({ name, value, onChange }) {
  return (
    <input
      className={styles.cardNumero}
      type="text"
      placeholder="Digite o Número"
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default NumeroInput;