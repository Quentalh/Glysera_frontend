import styles from "../../styles/ObservationPage.module.css";

function ObservationTextInput({ name, value, onChange }) {
  return (
    <textarea 
        className={styles.textAreaField} 
        rows="4"
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Digite uma observação inicial..."
    ></textarea>
  );
}

export default ObservationTextInput;