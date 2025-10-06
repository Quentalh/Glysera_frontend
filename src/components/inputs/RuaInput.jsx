import styles from "../../styles/Register.module.css";

function RuaInput({ name, value, onChange }) {
  return (
    <input
      className={styles.cardRua}
      type="text"
      placeholder="Digite a Rua"
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default RuaInput;