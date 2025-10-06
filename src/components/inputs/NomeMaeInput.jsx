import styles from "../../styles/Register.module.css";

function NomeMaeInput({ name, value, onChange }) {
  return (
    <input
      className={styles.cardNomeMae}
      type="text"
      placeholder="Digite o Nome da Mãe"
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default NomeMaeInput;