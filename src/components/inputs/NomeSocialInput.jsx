import styles from "../../styles/Register.module.css";

function NomeSocialInput({ name, value, onChange }) {
  return (
    <input
      className={styles.cardNomeSocial}
      type="text"
      placeholder="Digite seu Nome Social"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default NomeSocialInput;