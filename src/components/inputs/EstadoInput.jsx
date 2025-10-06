import styles from "../../styles/Register.module.css";

function EstadoInput({ name, value, onChange }) {
  return (
    <input
      className={styles.cardEstado}
      type="text"
      placeholder="Digite o Estado"
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default EstadoInput;