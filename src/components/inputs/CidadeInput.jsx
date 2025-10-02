import styles from "../../styles/Register.module.css";

function CidadeInput({ name, value, onChange }) {
  return (
    <input
      className={styles.cardCidade}
      type="text"
      placeholder="Digite a Cidade"
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default CidadeInput;