import styles from "../../styles/ObservationPage.module.css";
import ObservationTextInput from "../inputs/ObservationTextInput";

function ObservationTextField({ name, value, onChange }) {
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label}>OBSERVAÇÃO INICIAL:</label>
      <ObservationTextInput name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default ObservationTextField;