import styles from "../../styles/ObservationPage.module.css";
import ObservationDateInput from "../inputs/ObservationDateInput";

function ObservationDateField() {
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label}>DATA DA OBSERVAÇÃO:</label>
      <ObservationDateInput />
    </div>
  );
}

export default ObservationDateField;