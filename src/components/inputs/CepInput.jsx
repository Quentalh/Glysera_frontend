import styles from "../../styles/Register.module.css";

function CepInput({ name, value, onChange }) {
  return (
    <input
      className={styles.cardCep}
      type="text"
      placeholder="Digite o CEP"
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default CepInput;