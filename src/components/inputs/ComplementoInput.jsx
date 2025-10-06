import styles from "../../styles/Register.module.css";

function ComplementoInput({ name, value, onChange }) {
  return (
    <input
      className={styles.cardComplemento}
      type="text"
      placeholder="Digite o Complemento"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default ComplementoInput;