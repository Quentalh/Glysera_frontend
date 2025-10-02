import styles from "../../styles/ObservationPage.module.css";
import EquipmentInput from "../inputs/EquipmentInput";

function EquipmentField() {
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label}>EQUIPAMENTO VINCULADO:</label>
      <EquipmentInput />
    </div>
  );
}

export default EquipmentField;