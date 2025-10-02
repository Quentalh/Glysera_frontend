import styles from "../../styles/Register.module.css";

function NeighborhoodInput({ name, value, onChange }) {
  return (
    <input
      className={styles.cardNeighborhood}
      type="text"
      placeholder="Digite o Bairro"
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default NeighborhoodInput;