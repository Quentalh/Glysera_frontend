import styles from "../../styles/ObservationPage.module.css";
import EquipmentField from "../fields/EquipmentField";
import ObservationDateField from "../fields/ObservationDateField";
import ObservationTextField from "../fields/ObservationTextField";
import AttachmentField from "../fields/AttachmentField";

function ObservationForm() {
  return (
    <form className={styles.form}>
      <EquipmentField />
      <ObservationDateField />
      <ObservationTextField />
      <AttachmentField />
    </form>
  );
}

export default ObservationForm;