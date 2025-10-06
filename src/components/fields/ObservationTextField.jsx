import styles from "../../styles/ObservationPage.module.css";
import ObservationTextInput from "../inputs/ObservationTextInput";

function ObservationTextField() {
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label}>OBSERVAÇÃO:</label>
      <ObservationTextInput />
    </div>
  );
}

export default ObservationTextField;