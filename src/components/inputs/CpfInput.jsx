import styles from "../../styles/Register.module.css";

function CpfInput({ name, value, onChange }) {
  return (
    <input
      className={styles.cardCpf}
      type="text"
      placeholder="Digite o CPF"
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default CpfInput;